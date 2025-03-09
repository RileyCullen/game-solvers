import styles from './cell.module.css';
import { Cell as CellModel } from './types';

/** Props for {@link Cell}. */
export interface CellProps {
    /** Cell properties. */
    cell: CellModel;
    /** Handler to execute on cell click. */
    onClick?: CellEventHandler;
    /** Handler to execute when mouse enters cell. */
    onMouseEnter?: CellEventHandler;
}

export type CellEventHandler = (cell: CellModel) => void;

/** Cell display component. */
export function Cell(props: CellProps) {
    const { cell, onClick, onMouseEnter } = props;
    return (
        <div
            className={styles['cell-container']}
            onClick={() => onClick?.(cell)}
            onMouseEnter={() => onMouseEnter?.(cell)}
        >
            {/*ToDo: Refactor to support more node types*/}
            {cell.value as string}
        </div>
    );
}

