import { Box } from '@mui/material';
import { Board, CellModel } from '../../components';
import { QueensBoardModel } from './queens-board-model';
import { useEffect, useState, useRef } from 'react';
import { useBoard } from './use-board';
import { QueensEditModes } from './components/configuration-panel/panel-sections/edit-mode';
import { ConfigurationPanel } from './components/configuration-panel/configuration-panel';

interface Dimensions {
    height: number;
    width: number;
}

export default function QueensSolver() {
    const { board, setBoard, boardSize, setBoardSize } = useBoard(5);
    const [isMultiCellEditing, setIsMultiCellEditing] = useState(false);
    const [editMode, setEditMode] = useState(QueensEditModes.CellContent);
    const [color, setColor] = useState('#FFFFFF');

    const [appDimensions, setAppDimensions] = useState<Dimensions>();
    const containerRef = useRef<HTMLDivElement>(null);

    const [
        boardContainerDimensions,
        setBoardContainerDimensions
    ] = useState<Dimensions>();
    const boardContainerRef = useRef<HTMLDivElement>(null);

    const targetCells = useRef<CellModel[]>([]);
    const startingCell = useRef<CellModel>(null);

    // Ensure that configuration panel is correct on initial render.
    useEffect(() => {
        resize();
    }, [containerRef.current]);

    // Ensures that configuration panel is correct on window resize.
    useEffect(() => {
        window.addEventListener('resize', resize);
        return () => {
            window.removeEventListener('resize', resize);
        };
    }, []);

    // Set board size
    useEffect(() => {
        if (boardContainerRef.current) {
            const boardContainer = boardContainerRef.current;
            setBoardContainerDimensions({
                width: boardContainer.offsetWidth,
                height: boardContainer.offsetHeight
            });
        }
    }, [boardContainerRef.current]);

    return (
        <Box
            ref={containerRef}
            sx={{
                display: 'flex',
                flexDirection: 'row',
                gap: '20px',
                height: (appDimensions) ? `${appDimensions.height}px` : 'auto',
                width: (appDimensions) ? `${appDimensions.width}px` : 'auto',
                overflow: 'clip'
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
                ref={boardContainerRef}
                sx={{
                    padding: '10px',
                    overflow: 'scroll',
                    width: '100%'
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
                    resizeCellsToFitInView={boardContainerDimensions}
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

    function resize() {
        const configurationPanel = containerRef.current;
        if (configurationPanel) {
            const height = calculateSize(
                window.innerHeight,
                configurationPanel.offsetTop,
                5
            );
            const width = calculateSize(
                window.innerWidth,
                configurationPanel.offsetLeft,
                5
            );
            setAppDimensions({
                height,
                width
            });
        }
    }

    function calculateSize(size: number, offset: number, margin: number) {
        return size - offset - margin;
    }
}

