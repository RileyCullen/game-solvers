import styles from './cell.module.css';
import { Cell as CellModel } from './types';

export interface CellEventHandlers {
    /** Handler to execute on cell click. */
    onClick?: CellEventHandler;
    /** Handler to execute when mouse enters cell. */
    onMouseEnter?: CellEventHandler;
    /** Handler to execute when mouse click starts. */
    onMouseDown?: CellEventHandler;
    /** Handler to execute when mouse click ends. */
    onMouseUp?: CellEventHandler;
}

export type CellEventHandler = (cell: CellModel) => void;

/** Props for {@link Cell}. */
export interface CellProps extends CellEventHandlers {
    /** Cell properties. */
    cell: CellModel;
    size?: string;
}

/** Cell display component. */
export function Cell(props: CellProps) {
    const {
        cell,
        size,
        onClick,
        onMouseEnter,
        onMouseDown,
        onMouseUp
    } = props;
    return (
        <div
            className={styles['cell-container']}
            style={{
                backgroundColor: cell.color,
                width: size ?? '100px',
                height: size ?? '100px'
            }}
            onClick={() => onClick?.(cell)}
            onMouseEnter={() => onMouseEnter?.(cell)}
            onMouseDown={() => onMouseDown?.(cell)}
            onMouseUp={() => onMouseUp?.(cell)}
        >
            {/*ToDo: Refactor to support more node types*/}
            {cell.value as string}
        </div>
    );
}

