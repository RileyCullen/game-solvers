import { Board, BoardModel, CellTypes } from '../components';
import { App } from './app';

export const DEFAULT_APP: App = {
    id: 'queens-solver',
    label: 'Queens Solver',
    component: () => <p>Queens!</p>
};

export const APP_DEFINITIONS: App[] = [
    DEFAULT_APP,
    {
        id: 'tango-solver',
        label: 'Tango Solver',
        component() {
            return <p>Tango!</p>
        }
    },
    {
        id: 'test-board',
        label: 'Test Board',
        component() {
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
            return <Board board={board} />;
        }
    }
];

