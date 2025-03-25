# AI Instructions Manager

## Overview
This project provides a structured way to manage AI instruction files and generate context or instruction files that can be used as input for AI models. It includes several markdown files containing instructions and scripts to build and prepare these files for AI consumption.

## Project Structure
```
.
├── README.md          # Project documentation
|── flow/              # Flow instructions and configuration
|   ├── conf/          # Configuration files for AI context and memory management
|   |   ├── custom_mem.md   # Default memory configurations and abbreviations
|   |   ├── mem.md          # Memory context management rules
|   |   ├── model_params.md # Model parameter configurations
|   |   ├── overral.md      # Overall configuration settings
|   |   ├── prefixes.md     # Formatting and prefix guidelines
|   |   ├── role_context.md # Role-specific context settings
|   |   └── shorthand.md    # Shorthand interpretations and abbreviations
|   └── generated/     # Automatically generated files or outputs
└── global/            # Global project-wide rules and settings
    └── overal.md      # Global indexing and workspace rules
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
