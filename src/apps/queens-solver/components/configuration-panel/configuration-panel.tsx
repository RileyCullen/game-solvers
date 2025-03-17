import { Button, Card } from '@mui/material';
import { EditMode, QueensEditModes } from './panel-sections/edit-mode';
import { BoardSize } from './panel-sections/board-size';

export interface ConfigurationPanelProps {
    boardSize: number;
    setBoardSize: (size: number) => void;
    editMode: QueensEditModes;
    setEditMode: (mode: QueensEditModes) => void;
    color: string;
    setColor: (color: string) => void;
    resetBoard: () => void;
}

export function ConfigurationPanel(props: ConfigurationPanelProps) {
    const {
        boardSize,
        setBoardSize,
        editMode,
        setEditMode,
        color,
        setColor,
        resetBoard
    } = props;

    return (
        <Card
            sx={{
                padding: '10px',
                display: 'flex',
                flexDirection: 'column',
                rowGap: '10px',
                margin: '10px',
                minWidth: 'fit-content'
            }}
        >
            <BoardSize
                currentSize={boardSize}
                setSize={setBoardSize}
            />
            <EditMode
                editMode={editMode}
                setEditMode={setEditMode}
                color={color}
                setColor={setColor}
            />
            <>
                <Button
                    variant='contained'
                    onClick={() => resetBoard()}
                >
                    Reset Board
                </Button>
            </>
        </Card>
    );
}

