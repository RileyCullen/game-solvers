import { BoardModel, CellModel, CellTypes } from '../../components';

const EXCLUDED = 'X';
const QUEEN = 'O';
const EMPTY_CELL = '';

/** Board model for queens game. */
export class QueensBoardModel implements BoardModel {
    private _cells: CellModel[][] = [];

    /**
     * Default constructor that creates an empty board from the size.
     *
     * @param boardSize Initializes a boardSize by boardSize grid. If boardSize
     * is equal to 0, no board is initialized.
     */
    constructor(boardSize: number) {
        if (boardSize) {
            this._initializeEmptyBoard(boardSize);
        }
    }

    /** Creates a new board from an existing board model. */
    public static fromBoardModel(boardModel: QueensBoardModel) {
        const newBoardModel = new QueensBoardModel(0);
        newBoardModel._cells = boardModel._cells;
        return newBoardModel;
    }

    public get cells() {
        return this._cells;
    }

    public setCell(id: CellModel['id']) {
        const currentCell = this._getCurrentCellFromId(id);
        switch (currentCell.value) {
            case EMPTY_CELL:
                currentCell.value = EXCLUDED;
                break;
            case EXCLUDED:
                currentCell.value = QUEEN;
                break;
            case QUEEN:
                currentCell.value = EMPTY_CELL;
                break;
            default:
                throw new Error('Invalid Cell Value');
        }
    }

    public setCells(ids: CellModel['id'][]) {
        let firstCellValue: CellModel['value'];
        ids.forEach((id) => {
            const currentCell = this._getCurrentCellFromId(id);

            if (firstCellValue === undefined) {
                firstCellValue = currentCell.value;
            }
            switch (firstCellValue) {
                case EXCLUDED:
                    currentCell.value = EMPTY_CELL;
                    break;
                case EMPTY_CELL:
                    currentCell.value = EXCLUDED;
                    break;
                default:
                    break;
            }
        });
    }

    public setCellColor(id: CellModel['id'], color: string) {
        const currentCell = this._getCurrentCellFromId(id);
        currentCell.color = color;
    }

    public setCellsColor(ids: CellModel['id'][], color: string) {
        ids.forEach((id) => {
            const currentCell = this._getCurrentCellFromId(id);
            currentCell.color = color;
        });
    }

    private _getCurrentCellFromId(id: CellModel['id']) {
        const [row, column] = this._getRowAndColumnFromId(id);
        return this._cells[row][column];
    }

    private _getRowAndColumnFromId(id: CellModel['id']) {
        return id.split('-') as unknown as [number, number];
    }

    private _initializeEmptyBoard(boardSize: number) {
        this._cells = [];
        for (let i = 0; i < boardSize; i++) {
            this._cells.push([]);
            for (let j = 0; j < boardSize; j++) {
                this.cells[i].push(this._createEmptyCell(i, j));
            }
        }
    }

    private _createEmptyCell(row: number, column: number) {
        return {
            type: CellTypes.String,
            id: `${row}-${column}`,
            value: EMPTY_CELL,
            color: ''
        };
    }
}

