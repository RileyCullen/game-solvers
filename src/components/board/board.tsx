import { Cell } from './cell/cell';
import { Cell as CellModel } from './cell/types';
import { Board as BoardModel } from './types';
import styles from './board.module.css';

/** Props for {@link Board}. */
export interface BoardProps {
    /** Board information. */
    board: BoardModel;
}

/** Display component for board. */
export function Board(props: BoardProps) {
    const { board } = props;
    const { cells } = board;
    return (
        <div
            className={styles.board}
        >
            {
                cells.map((row) => (
                    <BoardRow values={row} />
                ))
            }
        </div>
    );
}

/** Props for {@link BoardRow} */
export interface BoardRowProps {
    /** Cell column values for a row. */
    values: CellModel[];
}

/** Display component for a board row. */
export function BoardRow(props: BoardRowProps) {
    const { values } = props;
    return (
        <div
            className={styles['board-row']}
        >
            {
                values.map((cell) => (
                    <Cell cell={cell} />
                ))
            }
        </div>
    );
}

