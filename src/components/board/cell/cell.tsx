import { Cell as CellModel } from './types';

export interface CellProps {
    cell: CellModel;
}

export function Cell(props: CellProps) {
    const { cell } = props;
    return (
        <div
        >
            {/*ToDo: Refactor to support more node types*/}
            {cell.value as String}
        </div>
    );
}

