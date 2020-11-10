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


  /**
   * Метод который возвращает массив доступных модулей для построения меню в хедере
   */
  getAvailableRoutes(): ActiveModule[] {
    return this.availableRoutes;
  }

/**
 * Проверка на доступность модуля
 * @param route путь к модулю
 * @returns true - если доступен, иначе false
 */
  isAvailable(route: string): boolean {
    return this.availableRoutes.findIndex(item => item.Path === route) !== -1;
  }
}
