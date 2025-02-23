import BaseAppBar from '@mui/material/AppBar'; 
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

/** Props for {@link Appbar} component. */
interface AppBarProps {
    /** Title displayed within {@link AppBar}.  */
    title: string;
}

/** Application information bar present at top of the UI. */
export function AppBar(props: AppBarProps) {
    const { title } = props;
    return (
        <BaseAppBar
            sx={{
                zIndex: (theme) => theme.zIndex.drawer + 1
            }}
        >
            <Toolbar>
                <Typography variant='h6'>{title}</Typography>
            </Toolbar>
        </BaseAppBar>
    );
}

