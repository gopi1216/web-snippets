# Steps to create VSCode extention
- Install **YO** code npm package.
```
npm install -g yo generator-code
```
- Generate code using below command.
```
yo code
```
- Select **NEW Code Snippets** option.
- Provide folder name to import any existing snippets or just press **Enter**.
- Provide name of the extension.
- Provide identifier of your extension.
- Provide description for the same.
- Provide the language name for which the snippets should appear, then press Enter.
- You're ready with basic code (it takes some to create).

- Install vsce npm package and package the your extension.
```
vsce package
```