import { Cell } from './cell/cell';
import { Cell as CellModel } from './cell/types';
import { Board as BoardModel } from './types';

export interface BoardProps {
    board: BoardModel;
}

export function Board(props: BoardProps) {
    const { board } = props;
    const { cells } = board;
    return (
        <div>
            {
                cells.map((row) => (
                    <BoardRow values={row} />
                ))
            }
        </div>
    );
}

export interface BoardRowProps {
    values: CellModel[];
}

export function BoardRow(props: BoardRowProps) {
    const { values } = props;
    return (
        <div>
            {
                values.map((cell) => (
                    <Cell cell={cell} />
                ))
            }
        </div>
    );
}

