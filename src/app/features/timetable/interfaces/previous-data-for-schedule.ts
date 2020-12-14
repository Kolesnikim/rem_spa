import { Session } from './session';

/**
 * Интерфейс расписания после вызова фугкции extractScheduleFromResponse
 */
export interface PreviousDataForSchedule {
  date: string;
  topics: string[];
  sessions: Session[][];
}
