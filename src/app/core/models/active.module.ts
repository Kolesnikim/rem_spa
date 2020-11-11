/**
 * Элемент(модуль) доступный для навигации.
 */
export class ActiveModule {
    private name: string;
    private path: string;

    constructor(name: string, path: string) {
      this.name = name;
      this.path = path;
    }

    /**
     * Получить имя модуля
     */
    public get Name(): string {
      return this.name;
    }

    /**
     * Получить путь к модулю
     */
    public get Path(): string {
      return this.path;
    }
}
