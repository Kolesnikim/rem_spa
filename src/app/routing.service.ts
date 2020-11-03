
export class RouteItem {
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
        new RouteItem('Программа', '/program'),
        new RouteItem('Избранное', '/favourites'),
        new RouteItem ('Фотогаллерея', '/gallery'),
        new RouteItem('Документы', '/documents'),
        new RouteItem('О приложении', '/about')];

    getData(): RouteItem[]{
        return this.routes;
    }
}
