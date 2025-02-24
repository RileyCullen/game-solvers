import { APP_DEFINITIONS, DEFAULT_APP, ErrorSwallowingAppService } from '../apps';
import { AppBar } from './app-bar';
import { MainContext } from './main-context';
import { Sidebar } from './sidebar';
import Box from '@mui/material/Box';
import { useState, useMemo } from 'react';

/** Main application container (i.e., entry point to the application).*/
export function Container() {
    const [ appId, setAppId ] = useState(DEFAULT_APP.id);
    const appService = useMemo(
        () => new ErrorSwallowingAppService(APP_DEFINITIONS),
        []
    );
    return (
        <Box>
            <MainContext.Provider
                value={{
                    appService,
                    currentAppId: appId
                }}>
                <AppBar />
                <Sidebar updateCurrentItem={setAppId} />
            </MainContext.Provider>
        </Box>
    );
}

