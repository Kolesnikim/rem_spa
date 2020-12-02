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
    new ActiveModule('Профиль', 'user'),
    new ActiveModule('О приложении', 'about')];


  /**
   * Получить список доступных модулей
   * @returns массив доступных модулей
   */
  getAvailableModules(): ActiveModule[] {
    return this.availableRoutes;
  }

/**
 * Проверка на доступность модуля
 * @param route путь к модулю
 * @returns true - если доступен, иначе false
 */
  isModuleAvailable(route: string): boolean {
    return this.availableRoutes.findIndex(item => item.Path === route) !== -1;
  }
}
