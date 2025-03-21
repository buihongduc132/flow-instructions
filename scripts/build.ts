import * as fs from 'fs/promises';
import * as path from 'path';

const __dirname = path.dirname(__filename);

type ConfItem = {
  name: string;
  level?: number;
  preprocess?: {
    order?: number
  },
  postprocess?: {
    order?: number
  }
};

async function buildConfiguration(confName: string, confItems: ConfItem[]): Promise<void> {
  // Define the path to the configuration directory
  const confDir = path.resolve(__dirname, '..', 'flow', 'conf');

  console.table(confItems);
  console.log('Building configuration', { confName });

  // Read all files in the conf directory

  const fileContents = await Promise.all(
    confItems.map((item) => {
      const filePath = path.join(confDir, `${item.name}.md`);
      return fs.readFile(filePath, 'utf-8');
    })
  );
  // const files = await fs.readdir(confDir);

  // const fileInfo = await files.reduce(async (prev, file, fileIndex): Promise<string[]> => {
  //   const prevData = await prev;
  //   if(path.extname(file) !== '.md') return prevData;

  //   const filePath = path.join(confDir, file);
  //   console.log('Processing file', {
  //     fileIndex,
  //     fileName: file
  //   });

  //   const content = await fs.readFile(filePath, 'utf-8');

  //   // If confItems is provided, filter or process based on items
  //   if (confItems && confItems.length > 0) {
  //     // Example processing: could add more complex logic here
  //     const matchingItem = confItems.find(item =>
  //       content.toLowerCase().includes(item.name.toLowerCase())
  //     );

  //     // return matchingItem ? content : '';
  //     return [...prevData, {
        
  //     }];
  //   }

  //   return prevData;

  //   // return content;
    
  // }, Promise.resolve<{ content, order }[]>([]))

  // // Read contents of each file
  // const fileContents = await Promise.all(
  //   mdFiles.map(async (file, fileIndex): Promise<string> => {
  //     const filePath = path.join(confDir, file);
  //     console.log('Processing file', {
  //       fileIndex,
  //       fileName: file
  //     });

  //     const content = await fs.readFile(filePath, 'utf-8');

  //     // If confItems is provided, filter or process based on items
  //     if (confItems && confItems.length > 0) {
  //       // Example processing: could add more complex logic here
  //       const matchingItem = confItems.find(item =>
  //         content.toLowerCase().includes(item.name.toLowerCase())
  //       );

  //       return matchingItem ? content : '';
  //     }

  //     return content;
  //   })
  // );

  // Concatenate file contents, filtering out empty strings
  const concatenatedContent = fileContents
    .filter(content => content.trim() !== '')
    .map((content, contentIndex) => {
      const lines = content.split('\n');
      const fileConf: ConfItem = confItems?.[contentIndex] || {} as ConfItem;
      const level = fileConf.level ?? 1;
      const preprocess = fileConf.preprocess;
      const postprocess = fileConf.postprocess;

      let addedPreprocess = false;
      let addedPostprocess = false;

      return lines.map((line) => {

        if (line.match(/^\#/)) {
          let l = `${'#'.repeat(level - 1)}${line}`;
          if (!addedPreprocess && preprocess) {
            l = `${l} Preprocess`;
            if (preprocess.order) {
              l = `${l} (order: ${preprocess.order})`;
            }
            addedPreprocess = true;
          }
          if (!addedPostprocess && postprocess) {
            l = `${l} Postprocess`;
            if (postprocess.order) {
              l = `${l} (order: ${postprocess.order})`;
            }
            addedPostprocess = true;
          }
          return l.trim();
        }
        return line;
      }).join('\n');
    })
    .join('\n\n----\n\n');

  // Ensure output directory exists
  const outputDir = path.resolve(__dirname, '..', 'output');
  await fs.mkdir(outputDir, { recursive: true });

  // Write concatenated content to output file
  const outputPath = path.join(outputDir, `${confName}.md`);
  await fs.writeFile(outputPath, concatenatedContent);

  console.log(`Generated ${confName}.md in output directory`);
}


(async () => {
  // TODO: implement take args in cli
  await buildConfiguration('default', [
    { name: 'overral', preprocess: { order: 1 } },
    { name: 'mem' },
    { name: 'model_params' },
    { name: 'prefixes' },
    { name: 'shorthand' },
    { name: 'role_context', postprocess: { order: 2 } },
    { name: 'custom_mem', postprocess: { order: 1 } },
  ])
})();