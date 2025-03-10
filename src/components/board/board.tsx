import { Cell, CellEventHandlers } from './cell/cell';
import { Cell as CellModel } from './cell/types';
import { Board as BoardModel } from './types';
import styles from './board.module.css';

/** Props for {@link Board}. */
export interface BoardProps {
    /** Board information. */
    board: BoardModel;
    cellEventHandlers?: CellEventHandlers;
}

/** Display component for board. */
export function Board(props: BoardProps) {
    const {
        board,
        cellEventHandlers
    } = props;
    const { cells } = board;
    return (
        <div
            className={styles.board}
        >
            {
                cells.map((row) => (
                    <BoardRow
                        values={row}
                        cellEventHandlers={cellEventHandlers}
                    />
                ))
            }
        </div>
    );
}

/** Props for {@link BoardRow} */
export interface BoardRowProps {
    /** Cell column values for a row. */
    values: CellModel[];
    cellEventHandlers?: CellEventHandlers;
}

/** Display component for a board row. */
export function BoardRow(props: BoardRowProps) {
    const {
        values,
        cellEventHandlers
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
                    />
                ))
            }
        </div>
    );
}

