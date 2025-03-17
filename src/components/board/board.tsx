import { Cell, CellEventHandlers } from './cell/cell';
import { Cell as CellModel } from './cell/types';
import { Board as BoardModel } from './types';
import styles from './board.module.css';

/** Props for {@link Board}. */
export interface BoardProps {
    /** Board information. */
    board: BoardModel;
    cellEventHandlers?: CellEventHandlers;
    resizeCellsToFitInView?: {
        width: number;
        height: number;
    };
}

/** Display component for board. */
export function Board(props: BoardProps) {
    const {
        board,
        cellEventHandlers,
        resizeCellsToFitInView
    } = props;
    const { cells } = board;

    let cellSize: number;
    if (resizeCellsToFitInView) {
        const { width, height } = resizeCellsToFitInView;
        cellSize = calculateCellSize(cells.length, width, height)
    }

    return (
        <div
            className={styles.board}
        >
            {
                cells.map((row) => (
                    <BoardRow
                        values={row}
                        cellEventHandlers={cellEventHandlers}
                        cellSize={cellSize}
                    />
                ))
            }
        </div>
    );
}

function calculateCellSize(
    numberOfCells: number,
    width: number,
    height: number
) {
    const restrictedAxis = (width <= height) ? width : height;
    // subtract 10 to account for cell padding
    return (restrictedAxis / numberOfCells) - 10;
}

/** Props for {@link BoardRow} */
export interface BoardRowProps {
    /** Cell column values for a row. */
    values: CellModel[];
    cellEventHandlers?: CellEventHandlers;
    cellSize: number | undefined;
}

/** Display component for a board row. */
export function BoardRow(props: BoardRowProps) {
    const {
        values,
        cellEventHandlers,
        cellSize
    } = props;
    return (
        <div
            className={styles['board-row']}
        >
            {
                values.map((cell) => (
                    <Cell
                        {...cellEventHandlers}
                        cell={cell}
                        size={cellSize ? `${cellSize}px` : undefined}
                    />
                ))
            }
        </div>
    );
}

