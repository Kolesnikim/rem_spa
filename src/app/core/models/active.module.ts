/**
 * Элемент(модуль) доступный для навигации.
 * Метод Path возвращает путь к элементу
 * Метод Name возвращает название элемента
 */
export class ActiveModule {
    private name: string;
    private path: string;

    constructor(name: string, path: string) {
      this.name = name;
      this.path = path;
    }

    public get Name(): string {
      return this.name;
    }

    public get Path(): string {
      return this.path;
    }
}
