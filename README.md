# AI Instructions Manager

## Overview
This project provides a structured way to manage AI instruction files and generate context or instruction files that can be used as input for AI models. It includes several markdown files containing instructions and scripts to build and prepare these files for AI consumption.

## Project Structure
```
.
├── README.md               # Project documentation
|── flow/              # Flow instructions
|   ├── conf/          # Configuration files
|   ├── mem.md         # Memory management
|   ├── mems.md        # Custom memories
|   ├── model_params.md # Model parameter adjustments
|   ├── overall.md     # Overall instructions
|   ├── prefixes.md    # Prefixes and formatting
|   ├── role_context.md # Role context management
|   ├── shorthand.md   # Shorthand interpretations
|   └── custom_mem.md  # Custom memory behaviors
├── scripts/                # Directory for build scripts
│   ├── build.ts            # Script to compile AI instructions
└── output/                 # Generated AI instruction files
```

## Installation
1. Clone the repository:
   ```sh
   git clone https://github.com/buihongduc132/flow-instructions.git
   cd flow-instructions
   ```

2. Ensure you have the necessary dependencies:
   ```sh
   yarn install
   ```

## Usage
### Building AI Instructions
Concatenate all configuration files into a single file.
```sh
yarn concat
```

## TODO:
- Configure concat script to accept arguments
- Parameterize for conf files
   - `template-file` maybe? 

## Contribution
1. Fork the repository.
2. Create a new branch for your feature/fix.
3. Commit your changes and push them.
4. Open a pull request.

## License
This project is licensed under the MIT License.
