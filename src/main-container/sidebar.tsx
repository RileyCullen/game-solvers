import { App } from '../apps';
import { MainContext } from './main-context';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Toolbar from '@mui/material/Toolbar';
import { useContext } from 'react';

/** Props for {@link Sidebar}. */
interface SidebarProps {
    /** Update current item. */
    updateCurrentItem(id: App['id']): void;
}

const drawerWidth = 180;
/** Sidebar to select sub-application. */
export function Sidebar(props: SidebarProps) {
    const { updateCurrentItem } = props;
    const { appService } = useContext(MainContext);

    const appIds = appService.getRegisteredApps();

    return (
        <Drawer 
            variant='permanent'
            sx={{
                width: drawerWidth,
            }}
        >
            <Toolbar />
            <List>
                {
                    appIds.map((id) => (
                        <SidebarItem
                            key={id}
                            id={id}
                            label={appService.getLabel(id)}
                            updateCurrentItem={updateCurrentItem}
                        />
                    ))
                }
            </List>
        </Drawer>
    );
}

/** Props for {@link SidebarItem}. */
interface SidebarItemProps {
    /** Key to differentiate list elements. */
    key: string;
    /** Unique identifier for Sidebar item. */
    id: App['id'];
    /** Display label. */
    label: App['label'];
    /** Callback to update currently selected sidebar item. */
    updateCurrentItem: SidebarProps['updateCurrentItem'];
}

/** Internal/helper component to display sidebar items. */
function SidebarItem(props: SidebarItemProps) {
    const { id, label, updateCurrentItem } = props;
    return (
        <ListItem>
            <ListItemButton
                onClick={() => updateCurrentItem(id)}
            >
                <ListItemText primary={label} />
            </ListItemButton>
        </ListItem>
    );
}

