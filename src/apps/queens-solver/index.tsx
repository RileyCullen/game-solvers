import { Box } from '@mui/material';
import { Board, CellModel } from '../../components';
import { QueensBoardModel } from './queens-board-model';
import { useState, useRef } from 'react';
import { useBoard } from './use-board';
import { QueensEditModes } from './components/configuration-panel/panel-sections/edit-mode';
import { ConfigurationPanel } from './components/configuration-panel/configuration-panel';

export default function QueensSolver() {
    const { board, setBoard, boardSize, setBoardSize } = useBoard(5);
    const [isMultiCellEditing, setIsMultiCellEditing] = useState(false);
    const [editMode, setEditMode] = useState(QueensEditModes.CellContent);
    const [color, setColor] = useState('#FFFFFF');

    const targetCells = useRef<CellModel[]>([]);
    const startingCell = useRef<CellModel>(null);

    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'row',
                gap: '20px'
            }}
        >
            <ConfigurationPanel
                boardSize={boardSize}
                setBoardSize={setBoardSize}
                editMode={editMode}
                setEditMode={setEditMode}
                color={color}
                setColor={setColor}
            />
            <Box
                sx={{
                    padding: '10px'
                }}
            >
                <Board
                    board={board}
                    cellEventHandlers={{
                        onClick,
                        onMouseEnter,
                        onMouseDown,
                        onMouseUp
                    }}
                />
            </Box>
        </Box>
    );

    function onClick(cell: CellModel) {
        const { id } = cell;
        switch (editMode) {
            case QueensEditModes.Color:
                board.setCellColor(id, color);
                break;
            case QueensEditModes.CellContent:
                board.setCell(id);
                break;
            default:
                throw new Error('Unexpected edit mode on click.');
        }
        setBoard(QueensBoardModel.fromBoardModel(board));
    }

    function onMouseEnter(cell: CellModel) {
        if (isMultiCellEditing) {
            if (startingCell.current) {
                targetCells.current.push(startingCell.current);
                startingCell.current = null;
            }
            targetCells.current.push(cell);
        }
    }

    function onMouseDown(cell: CellModel) {
        startingCell.current = cell;
        setIsMultiCellEditing(true);
    }

    function onMouseUp() {
        setIsMultiCellEditing(false);
        if (targetCells) {
            const cellIds = targetCells.current.map(({ id }) => id);
            switch (editMode) {
                case QueensEditModes.Color:
                    board.setCellsColor(cellIds, color);
                    break;
                case QueensEditModes.CellContent:
                    board.setCells(cellIds);
                    break;
                default:
                    throw new Error('Unexpected edit mode on mouse up.');
            }
            targetCells.current = [];
            setBoard(QueensBoardModel.fromBoardModel((board)));
        }
    }
}

