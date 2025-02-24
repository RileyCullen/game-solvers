import { ComponentType } from 'react';

/** Defines a supported sub-application. */
export interface App {
    /** Unique identifier for the application. */
    id: string;
    /** Name to be displayed on UI. */
    label: string;
    /** UI Component to be displayed on app selection. */
    // ToDo: Strictly type the component props
    component: ComponentType<unknown>;
}

