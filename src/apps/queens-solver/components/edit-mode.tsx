import { Box, FormControlLabel, Stack, Switch } from '@mui/material';

export enum QueensEditModes {
    Color = 'color',
    CellContent = 'cell-content'
}

export interface EditModeProps {
    editMode: QueensEditModes;
    color: string;
    setEditMode(editMode: QueensEditModes): void;
    setColor(color: string): void;
}

export function EditMode(props: EditModeProps) {
    const { editMode, setEditMode, color, setColor } = props;
    return (
        <Stack>
            <Stack
                direction='row'
            >
                <FormControlLabel
                    value={editMode}
                    checked={editMode === QueensEditModes.Color}
                    control={
                        <Switch
                            onChange={(event) => {
                                if (event.target.checked) {
                                    setEditMode(QueensEditModes.Color);
                                    return;
                                }
                                setEditMode(QueensEditModes.CellContent);
                            }}
                        />
                    }
                    label='Edit Colors'
                    labelPlacement='start'
                />
            </Stack>
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'center'
                }}
            >
                {
                    (editMode === QueensEditModes.Color)
                    && (
                        <Stack direction='row'>
                            <input
                                type='color'
                                value={color}
                                onChange={(e) => {
                                    setColor(e.target.value);
                                }}
                            />
                        </Stack>
                    )
                }
            </Box>
        </Stack>
    );
}

