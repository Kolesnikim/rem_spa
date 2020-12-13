
/**
 * Интерфейс комментария
 */
export interface IComment {
  sessionId: number;
  name?: string;
  organization?: string;
  text: string;
  number: number;
  userPhotoUrl?: string;
  dateTime?: string;
}

