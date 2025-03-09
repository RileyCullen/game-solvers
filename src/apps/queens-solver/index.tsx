import { Board, BoardModel, CellTypes } from '../../components';

export default function QueensSolver() {
    const board: BoardModel = {
        cells: [
            [
                {
                    type: CellTypes.String,
                    id: '00',
                    value: 'A',
                    color: ''
                },
                {
                    type: CellTypes.String,
                    id: '01',
                    value: '',
                    color: ''
                },
            ],
            [
                {
                    type: CellTypes.String,
                    id: '10',
                    value: 'C',
                    color: ''
                },
                {
                    type: CellTypes.String,
                    id: '11',
                    value: 'D',
                    color: ''
                },
            ]
        ]
    };

    return (
        <div>
            <Board
                board={board}
                cellEventHandlers={{
                    onClick(cell) {
                        console.log(`Clicked ${cell.id}`);
                    },
                    onMouseEnter(cell) {
                        console.log(`Mouse enter ${cell.id}`);
                    },
                    onMouseDown(cell) {
                        console.log(`Mouse down ${cell.id}`);
                    },
                    onMouseUp(cell) {
                        console.log(`Mouse up ${cell.id}`);
                    }
                }}
            />
        </div>
    );
}

