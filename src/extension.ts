import * as vscode from 'vscode';
export function activate(context: vscode.ExtensionContext) {
	console.log('Congratulations, your extension "message-tests" is now active!');
	let disposable: vscode.Disposable[] = [];
	disposable.push(
		vscode.commands.registerCommand('extension.showMessage', () => {
			vscode.window.showInformationMessage('Hello World!');
		})
	);
	disposable.push(
		vscode.commands.registerCommand('extension.showMessageNewLines', () => {
			vscode.window.showInformationMessage('Hello World!\nHello World!\nHello World!');
		})
	);
	disposable.push(
		vscode.commands.registerCommand('extension.showModalMessage', () => {
			vscode.window.showInformationMessage('Hello World!\nHello World!\nHello World!', { modal: true });
		})
	);
	disposable.push(
		vscode.commands.registerCommand('extension.showModalMessageWithItems', () => {
			vscode.window.showInformationMessage('Hello World!\nHello World!\nHello World!', { modal: true }, { title: 'Bye!', isCloseAffordance: false });
		})
	);
	disposable.push(
		vscode.commands.registerCommand('extension.showModalMessageNoClose', () => {
			vscode.window.showInformationMessage('Hello World!\nHello World!\nHello World!', { modal: true }, { title: 'Bye!', isCloseAffordance: true });
		})
	);
	disposable.push(
		vscode.commands.registerCommand('extension.showModalMessageNoCloseWithItems', () => {
			const items: vscode.MessageItem[] = [{ title: 'a', isCloseAffordance: false }, { title: 'b', isCloseAffordance: true }]
			vscode.window.showInformationMessage('Hello World!\nHello World!\nHello World!', { modal: true }, ...items);
		})
	);
	context.subscriptions.push(...disposable);
}
export function deactivate() { }
