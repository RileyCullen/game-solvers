/** Denotes display type for cell. */
export enum CellTypes {
    /** Cell displays a string value. */
    String = 'string'
}

/** Represents a single cell. */
export interface Cell {
    /** Display type of cell. */
    type: CellTypes;
    /** Unique identifier for cell. */
    id: string;
    /** Value of cell. */
    value: unknown;
    /** Color of cell. */
    color: string;
}

export interface StringCell extends Cell {
    type: CellTypes.String;
    value: string;
}

export function isStringCell(cell: Cell): cell is StringCell {
    return cell.type === CellTypes.String;
}

