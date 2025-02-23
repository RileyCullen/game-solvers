import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Toolbar from '@mui/material/Toolbar';

/** Props for {@link Sidebar}. */
interface SidebarProps {
    /** Items to display in sidebar. */
    items: SidebarItem[];
    /** Update current item. */
    updateCurrentItem(item: SidebarItem): void;
}

/** Side bar item interface. */
export interface SidebarItem {
    /** Unique ID to represent sidebar item. */
    id: string;
    /** Presentation label to display in sidebar. */
    label: string;
}

/** Sidebar to select sub-application. */
export function Sidebar(props: SidebarProps) {
    const { items, updateCurrentItem } = props;
    return (
        <Drawer variant='permanent'>
            <Toolbar />
            <List>
                {
                    items.map((item) => (
                        <SidebarListElement
                            key={item.id}
                            item={item}
                            updateCurrentItem={updateCurrentItem}
                        />
                    ))
                }
            </List>
        </Drawer>
    );
}

/** Props for {@link SidebarListElement}. */
interface SidebarListElementProps {
    /** Key to differentiate list elements. */
    key: string;
    /** Item to be displayed. */
    item: SidebarItem;
    /** Callback to update currently selected sidebar item. */
    updateCurrentItem: SidebarProps['updateCurrentItem'];
}

/** Internal/helper component to display sidebar items. */
function SidebarListElement(props: SidebarListElementProps) {
    const { item, updateCurrentItem } = props;
    return (
        <ListItem>
            <ListItemButton
                onClick={() => updateCurrentItem(item)}
            >
                <ListItemText primary={item.label} />
            </ListItemButton>
        </ListItem>
    );
}

