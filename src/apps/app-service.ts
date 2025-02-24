import { App } from './app.ts';

/** Defines services that fetch specific applications. */
export interface AppService {

    /** Fetches registered apps. */
    getRegisteredApps(): App['id'][];

    /**
     * Fetches label from app definition.
     *
     * @param {App['id']} id Application identifier. */
    getLabel(id: App['id']): App['label'];

    /**
     * Creates react component of application.
     *
     * @param {App['id']} id Application identifier.
     */
    createComponent(id: App['id']): App['component'] | null;
}

/**
 * Concrete implementation of {@link AppService} that swallows App not found
 * errors.
 */
export class ErrorSwallowingAppService implements AppService {

    private _registeredApps: Map<App['id'], App>;
    private _registeredAppKeys: App['id'][];

    /**
     * Creates an AppService instance.
     *
     * @param {App[]} appsToRegister The applications to be registered.
     */
    constructor(appsToRegister: App[]) {
        this._registeredAppKeys = appsToRegister.map((app) => app.id);
        this._registeredApps = new Map(
            appsToRegister.map((app) => ([app.id, app]))
        );
    }

    public getRegisteredApps() {
        return this._registeredAppKeys;
    }

    /**
     * Implementation of getLabel that shallows errors by returning an empty
     * string if App is not found.
     */
    public getLabel(id: App['id']) {
        const label = this._registeredApps.get(id)?.label;
        return label ?? '';
    }

    /**
     * Implementation of createComponent that shallows errors by returning a
     * null component if App is not found.
     */
    public createComponent(id: App['id']) {
        const component = this._registeredApps.get(id)?.component;
        return component ?? null;
    }
}

