const vscode = require('vscode'),
  formatCSS = require('clean-css'),
  prettier = require('prettier'),
  options = vscode.workspace.getConfiguration('compactCSS').get('options') || {},
  prettyOptions = vscode.workspace.getConfiguration('prettyJS').get('options') || {};

/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {
  const disposable = vscode.commands.registerCommand('web-formatter.CompactCSS', () =>
      minifyCSS(),
    ),
    _prettier = vscode.commands.registerCommand('web-formatter.PrettierJS', () => beautifyJS());

  context.subscriptions.push(disposable, _prettier);
}

const minifyCSS = () => {
  const editor = vscode.window.activeTextEditor;

  if (!editor) return;

  const doc = editor.document,
    selection = editor.selection;

  if (doc.languageId === 'css') {
    const cleanCss = new formatCSS(options);
    const editRange = selection.isEmpty
      ? new vscode.Range(
          new vscode.Position(0, 0),
          new vscode.Position(doc.lineCount - 1, doc.lineAt(doc.lineCount - 1).text.length),
        )
      : new vscode.Range(selection.start, selection.end);

    const newText = selection.isEmpty
      ? cleanCss.minify(doc.getText()).styles
      : cleanCss.minify(doc.getText(selection)).styles;

    editor
      .edit((edit) => {
        edit.replace(editRange, newText);
      })
      .then((success) => {
        if (!success) vscode.window.showErrorMessage('Failed to minify CSS.');
      });
  }
};

function beautifyJS() {
  const editor = vscode.window.activeTextEditor;

  if (!editor) return;

  const doc = editor.document,
    selection = editor.selection;

  if (doc.languageId === 'javascript' || doc.languageId === 'typescript') {
    try {
      const editRange = selection.isEmpty
        ? new vscode.Range(
            new vscode.Position(0, 0),
            new vscode.Position(doc.lineCount - 1, doc.lineAt(doc.lineCount - 1).text.length),
          )
        : new vscode.Range(selection.start, selection.end);

      const textToFormat = selection.isEmpty ? doc.getText() : doc.getText(selection);

      async function formattedText() {
        const { formatted } = await prettier.formatWithCursor(textToFormat, {
          ...prettyOptions,
          parser: doc.languageId === 'typescript' ? 'typescript' : 'babel',
        });

        return formatted;
      }

      formattedText().then((newText) => {
        editor.edit((edit) => {
          edit.replace(editRange, newText);
        });
      });
    } catch (error) {
      vscode.window.showErrorMessage(`Prettier formatting error: ${error.message}`);
    }
  }
}

module.exports = { activate };
