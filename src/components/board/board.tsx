import { Cell, CellEventHandler } from './cell/cell';
import { Cell as CellModel } from './cell/types';
import { Board as BoardModel } from './types';
import styles from './board.module.css';

/** Props for {@link Board}. */
export interface BoardProps {
    /** Board information. */
    board: BoardModel;
    /** Handler to execute on cell click. */
    onCellClick?: CellEventHandler;
    /** Handler to execute on mouse enter within a cell. */
    onCellMouseEnter?: CellEventHandler;
}

/** Display component for board. */
export function Board(props: BoardProps) {
    const { board, onCellClick, onCellMouseEnter } = props;
    const { cells } = board;
    return (
        <div
            className={styles.board}
        >
            {
                cells.map((row) => (
                    <BoardRow
                        values={row}
                        onCellClick={onCellClick}
                        onCellMouseEnter={onCellMouseEnter}
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
    /** Handler to execute on cell click. */
    onCellClick?: CellEventHandler;
    /** Handler to execute on mouse enter within a cell. */
    onCellMouseEnter?: CellEventHandler;
}

/** Display component for a board row. */
export function BoardRow(props: BoardRowProps) {
    const { values, onCellClick, onCellMouseEnter } = props;
    return (
        <div
            className={styles['board-row']}
        >
            {
                values.map((cell) => (
                    <Cell
                        cell={cell}
                        onClick={onCellClick}
                        onMouseEnter={onCellMouseEnter}
                    />
                ))
            }
        </div>
    );
}

