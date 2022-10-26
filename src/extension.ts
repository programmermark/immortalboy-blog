import * as vscode from "vscode";
import axios from "axios";

console.log("axios", axios);
export async function activate(context: vscode.ExtensionContext) {
  // const res = await axios.post(
  //   "https://immortalboy.cn/api/blog/articlelist/getArticleList",
  //   {
  //     limit: 20,
  //     offset: 0,
  //     type: "全部",
  //   }
  // );
  // console.log(res.data);
  console.log("axios", axios);
  // The command has been defined in the package.json file
  // Now provide the implementation of the command with registerCommand
  // The commandId parameter must match the command field in package.json
  let disposable = vscode.commands.registerCommand(
    "immortalboy-blog.listArticle",
    () => {
      console.log("axios", axios);
      // The code you place here will be executed every time your command is executed
      // Display a message box to the user
      vscode.window.showInformationMessage(
        "List articles from immortalboy-blog!"
      );
    }
  );

  context.subscriptions.push(disposable);
}

// This method is called when your extension is deactivated
export function deactivate() {}
