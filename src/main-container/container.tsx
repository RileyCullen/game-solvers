import { AppBar } from './app-bar';
import { Sidebar, SidebarItem } from './sidebar';
import Box from '@mui/material/Box';
import { useState } from 'react';

/** Schema for default app to show on startup. */
const DEFAULT_APP = {
    id: 'queens-solver',
    label: 'Queens Solver'
};

/** Schema to define supported sub applications. */
const APPS: SidebarItem[] = [
    DEFAULT_APP,
    {
        id: 'tango-solver',
        label: 'Tango Solver'
    }
];

/** Main application container (i.e., entry point to the application).*/
export function Container() {
    const [ app, setApp ] = useState(DEFAULT_APP);
    return (
        <Box>
            <AppBar title={app.label} />
            <Sidebar items={APPS} updateCurrentItem={setApp} />
        </Box>
    );
}

