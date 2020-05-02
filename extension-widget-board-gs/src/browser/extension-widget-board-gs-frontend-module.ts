import { ContainerModule } from 'inversify';
import { ExtensionWidgetBoardGsWidget } from './extension-widget-board-gs-widget';
import { ExtensionWidgetBoardGsContribution } from './extension-widget-board-gs-contribution';
import { bindViewContribution, FrontendApplicationContribution, WidgetFactory } from '@theia/core/lib/browser';

import '../../src/browser/style/index.css';

export default new ContainerModule(bind => {
    bindViewContribution(bind, ExtensionWidgetBoardGsContribution);
    bind(FrontendApplicationContribution).toService(ExtensionWidgetBoardGsContribution);
    bind(ExtensionWidgetBoardGsWidget).toSelf();
    bind(WidgetFactory).toDynamicValue(ctx => ({
        id: ExtensionWidgetBoardGsWidget.ID,
        createWidget: () => ctx.container.get<ExtensionWidgetBoardGsWidget>(ExtensionWidgetBoardGsWidget)
    })).inSingletonScope();
});
