import { Injectable } from '@angular/core';
import { ActiveModule} from '../../models/active.module';

@Injectable({
  providedIn: 'root'
})
export class AppSettingsService {

  private availableRoutes: ActiveModule[] = [
    new ActiveModule('Программа', 'timetable'),
    new ActiveModule('Избранное', 'favourites'),
    new ActiveModule('Фотогаллерея', 'gallery'),
    new ActiveModule('Документы', 'documents'),
    new ActiveModule('О приложении', 'about')];

  // метод, который отдает доступные модули (для постоения меню хедера)
  getAvailableRoutes(): ActiveModule[] {
    return this.availableRoutes;
  }

// метод который проверяет возможность перехода из модуля в модуль(для роутинга)
  isAvailable(route: string): boolean {
    for (const item of this.availableRoutes){
      if (item.Path === route) {
        return true;
      }
    }

    return false;
  }
}
