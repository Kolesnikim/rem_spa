/**
 * Интерфейс комментария к выступлению
 */
export interface Comment {
  sessionId: number;
  name?: string;
  organization?: string;
  text: string;
  number: number;
  userPhotoUrl?: string;
  dateTime?: string;
}

