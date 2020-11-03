
class RouteItem {
    private name: string;
    private path: string;

    constructor(name: string, path: string){
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

export class RoutingService {
    private routes: RouteItem[] = [
        new RouteItem('Программа', '/'),
        new RouteItem('Избрранное', '/'),
        new RouteItem ('Фотогаллерея', '/'),
        new RouteItem('Документы', ''),
        new RouteItem('О приложении', '')];

    getData(): RouteItem[]{
        return this.routes;
    }
}
