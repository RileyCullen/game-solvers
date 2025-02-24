import { App, AppService, APP_DEFINITIONS, DEFAULT_APP, ErrorSwallowingAppService } from '../apps';
import { createContext } from 'react';

interface MainContextDefinition {
    appService: AppService;
    currentAppId: App['id'];
}

export const MainContext = createContext<MainContextDefinition>({
    appService: new ErrorSwallowingAppService(APP_DEFINITIONS),
    currentAppId: DEFAULT_APP.id
});

