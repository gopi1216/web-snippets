const vscode = require('vscode');
const formatCSS = require('clean-css');
let options = vscode.workspace.getConfiguration('compactCSS').get('options');

/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {
  let disposable = vscode.commands.registerCommand('web-formatter.CompactCSS', () => formateCSS());

  context.subscriptions.push(disposable);
}

const formateCSS = () => {
  const editor = vscode.window.activeTextEditor;

  if (!editor) {
    return;
  }

  let doc = editor.document,
    selection = editor.selection;

  if (doc.languageId === 'css') {
    const cleanCss = new formatCSS(options);
    const editRange = selection.isEmpty
      ? new vscode.Range(
          new vscode.Position(0, 0),
          new vscode.Position(doc.lineCount - 1, doc.lineAt(doc.lineCount - 1).text.length)
        )
      : new vscode.Range(selection.start, selection.end);

    const newText = selection.isEmpty
      ? cleanCss.minify(doc.getText()).styles
      : cleanCss.minify(doc.getText(selection)).styles;

    editor.edit((edit) => {
      edit.replace(editRange, newText);
    });
  } else {
    return;
  }
};

module.exports = { activate };