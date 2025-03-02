import { Cell } from './cell/types';

/** Represents an 2-dimensional board */
export interface Board {
    /** Cells that make up a board */
    cells: Cell[][];
}

