import { Box, Button, TextField } from '@mui/material';

/** Props for {@link BoardSize}. */
export interface BoardSizeProps {
    currentSize: number;
    setSize: (newSize: number) => void;
}

const SIDE_LENGTH = '40px';
const COMMON_BUTTON_STYLES = {
    fontSize: '1.2rem',
    height: SIDE_LENGTH,
    width: SIDE_LENGTH,
    minWidth: SIDE_LENGTH
};

/** Component to configure board size. */
export function BoardSize(props: BoardSizeProps) {
    const { currentSize, setSize } = props;
    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'row',
                gap: '10px'
            }}
        >
            <Button
                variant='outlined'
                onClick={() => decrementSize(currentSize)}
                sx={COMMON_BUTTON_STYLES}
            >
                -
            </Button>
            <TextField
                label='Board Size'
                size='small'
                value={currentSize}
                slotProps={{
                    input: {
                        readOnly: true
                    },
                    inputLabel: {
                        shrink: true
                    }
                }}
                sx={{
                    height: SIDE_LENGTH,
                    minHeight: SIDE_LENGTH,
                    width: '90px'
                }}
            />
            <Button
                variant='outlined'
                onClick={() => setSize(currentSize + 1)}
                sx={COMMON_BUTTON_STYLES}
            >
                +
            </Button>
        </Box>
    );

    function decrementSize(size: number) {
        if (size === 1) {
            return;
        }
        setSize(size - 1);
    }
}

