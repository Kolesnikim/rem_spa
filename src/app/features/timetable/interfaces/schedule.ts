import { Section } from './section';
/**
 * Интерфейс расписания
 */

export interface Schedule {
  date: Date;
  sections: Section[];
}
