import { MainContext } from './main-context';
import BaseAppBar from '@mui/material/AppBar'; 
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { useContext } from 'react';

/** Application information bar present at top of the UI. */
export function AppBar() {
    const { appService, currentAppId } = useContext(MainContext);
    return (
        <BaseAppBar
            sx={{
                zIndex: (theme) => theme.zIndex.drawer + 1
            }}
        >
            <Toolbar>
                <Typography variant='h6'>{appService.getLabel(currentAppId)}</Typography>
            </Toolbar>
        </BaseAppBar>
    );
}

