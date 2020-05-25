import {inject, injectable} from 'inversify';
import {CommandContribution, MessageService, CommandRegistry} from "@theia/core";
import {EditorManager} from "@theia/editor/lib/browser";

export const ReadActiveEditorCommand = {
    id: 'ReadActiveEditor.command',
    label: 'Shows the active editor text'
}

@injectable()
export class ReadActiveEditorCommandContribution implements CommandContribution {

    constructor(
        @inject(MessageService) private readonly messageService: MessageService,
        //TODO: podria usar la clase CurrentEditorAccess.
        @inject(EditorManager) private readonly currentEditorAccess: EditorManager,
    ) {

    }

    registerCommands(registry: CommandRegistry): void {
        registry.registerCommand(ReadActiveEditorCommand, {
            execute: () => this.messageService.info(this.currentEditorAccess.currentEditor?.editor.document.getText() || 'AKsdjalkdads')
        });
    }
}