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
    }
];

