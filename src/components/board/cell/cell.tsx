import styles from './cell.module.css';
import { Cell as CellModel } from './types';

/** Props for {@link Cell}. */
export interface CellProps {
    /** Cell properties. */
    cell: CellModel;
}

/** Cell display component. */
export function Cell(props: CellProps) {
    const { cell } = props;
    return (
        <div
            className={styles['cell-container']}
        >
            {/*ToDo: Refactor to support more node types*/}
            {cell.value as string}
        </div>
    );
}

