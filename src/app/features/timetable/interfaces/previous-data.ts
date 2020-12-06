import { ISession } from './session';

/**
 * Интерфейс расписания после первой трансформации
 */
export interface IPreviousData {
  date: string;
  topics: string[];
  sessions: ISession[][];
}
