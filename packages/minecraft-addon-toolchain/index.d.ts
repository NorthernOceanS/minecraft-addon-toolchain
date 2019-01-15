interface IPlugin {
    sourceTasks?: ITask[];
    addDefaultTasks?: (gulpTasks: any) => void;
}

interface ITask {
    condition: string | RegExp;
    preventDefault?: boolean;
    task: () => NodeJS.ReadWriteStream
}

declare class MinecraftAddonBuilder {
    addPlugin(plugin: IPlugin);
    getTasks(selector: (plugin: IPlugin) => ITask[]);

    /**
     * returns a default set of gulp tasks that perform the usual actions for a minecraft add-on
     */
    configureEverythingForMe(): Any;
}