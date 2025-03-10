import { Board, BoardModel, CellModel, CellTypes } from '../../components';
import { QueensBoardModel } from './queens-board-model';
import { useState, useRef } from 'react';

export default function QueensSolver() {
    const [board, setBoard] = useState(new QueensBoardModel(5));
    const [isMultiCellEditing, setIsMultiCellEditing] = useState(false);

    const targetCells = useRef<CellModel[]>([]);
    const startingCell = useRef<CellModel>(null);

    return (
        <div>
            <Board
                board={board}
                cellEventHandlers={{
                    onClick,
                    onMouseEnter,
                    onMouseDown,
                    onMouseUp
                }}
            />
        </div>
    );

    function onClick(cell: CellModel) {
        board.setCell(cell.id);
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

    function onMouseUp(cell: CellModel) {
        setIsMultiCellEditing(false);
        if (targetCells) {
            board.setCells(targetCells.current.map(({ id }) => id));
            targetCells.current = [];
            setBoard(QueensBoardModel.fromBoardModel((board)));
        }
    }
}

