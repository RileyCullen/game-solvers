import { APP_DEFINITIONS, DEFAULT_APP, ErrorSwallowingAppService } from '../apps';
import { AppBar } from './app-bar';
import { MainContext } from './main-context';
import { Sidebar } from './sidebar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import { useState, useMemo, ComponentType, ReactNode } from 'react';

/** Main application container (i.e., entry point to the application).*/
export function Container() {
    const [appId, setAppId] = useState(DEFAULT_APP.id);
    const appService = useMemo(
        () => new ErrorSwallowingAppService(APP_DEFINITIONS),
        []
    );
    const Component: ComponentType = appService.createComponent(appId)
        ?? ComponentNotFound;

    return (
        <Box>
            <MainContext.Provider
                value={{
                    appService,
                    currentAppId: appId
                }}
            >
                <Box
                    sx={{
                        display: 'flex',
                        width: '100%'
                    }}
                >
                    <AppBar />
                    <Sidebar updateCurrentItem={setAppId} />
                    <AppContainer>
                        <Component />
                    </AppContainer>
                </Box>
            </MainContext.Provider>
        </Box>
    );
}

/** Help component to display when selected app is invalid. */
function ComponentNotFound() {
    return (
        <p>Error: Component not found</p>
    );
}

/** Props for {@link AappContainer}. */
interface AppContainerProps {
    /** Sub application to render. */
    children: ReactNode;
}

/** Container for sub-applications. */
function AppContainer(props: AppContainerProps) {
    const { children } = props;
    return (
        <Box
            sx={{
                flexGrow: 1,
            }}
        >
            <Toolbar />
            {children}
        </Box>
    );
}

