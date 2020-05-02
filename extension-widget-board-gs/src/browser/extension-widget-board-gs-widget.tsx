import * as React from 'react';
import { injectable, postConstruct, inject } from 'inversify';
import { ReactWidget } from '@theia/core/lib/browser/widgets/react-widget';
import { MessageService } from '@theia/core';
//@ts-ignore
import {Board} from '@lhazuca/gs-board-tsx'
import '@lhazuca/gs-board-tsx/dist/board.css'


@injectable()
export class ExtensionWidgetBoardGsWidget extends ReactWidget {

    static readonly ID = 'extension-widget-board-gs:widget';
    static readonly LABEL = 'ExtensionWidgetBoardGs Widget';

    @inject(MessageService)
    protected readonly messageService!: MessageService;

    @postConstruct()
    protected async init(): Promise < void> {
        this.id = ExtensionWidgetBoardGsWidget.ID;
        this.title.label = ExtensionWidgetBoardGsWidget.LABEL;
        this.title.caption = ExtensionWidgetBoardGsWidget.LABEL;
        this.title.closable = true;
        this.title.iconClass = 'fa fa-window-maximize'; // example widget icon.
        this.update();
    }

    protected render(): React.ReactNode {
        return <Board editable columnsQuantity={5} rowsQuantity={7} header={{x : 2,y :0}} />
    }

    protected displayMessage(): void {
        this.messageService.info('Congratulations: ExtensionWidgetBoardGs Widget Successfully Created!');
    }

}
