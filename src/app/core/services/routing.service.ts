import { Injectable } from '@angular/core';

export class RouteItem {
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

@Injectable({
  providedIn: 'root'
})
export class RoutingService {

  private availableRoutes: RouteItem[] = [
    new RouteItem('Программа', 'timetable'),
    new RouteItem('Избранное', 'favourites'),
    new RouteItem('Фотогаллерея', 'gallery'),
    new RouteItem('Документы', 'documents'),
    new RouteItem('О приложении', 'about')];

  getAvailableRoutes(): RouteItem[] {
    return this.availableRoutes;
  }

  isAvailable(route: string): boolean {
    for (const item of this.availableRoutes){
      if (item.Path === route) {
        return true;
      }
    }

    return false;
  }
}
