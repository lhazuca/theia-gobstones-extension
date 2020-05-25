import {injectable} from 'inversify';
import {MenuContribution, MenuModelRegistry} from "@theia/core";
import {CommonMenus} from "@theia/core/lib/browser";
import {ReadActiveEditorCommand} from "./ReadActiveEditorCommandContribution";

@injectable()
export class ReadActiveEditorMenuContribution implements MenuContribution {
    registerMenus(menus: MenuModelRegistry): void {
        menus.registerMenuAction(CommonMenus.EDIT_FIND, {
            commandId: ReadActiveEditorCommand.id,
            label: 'Show the madafaka'
        });
    }

}