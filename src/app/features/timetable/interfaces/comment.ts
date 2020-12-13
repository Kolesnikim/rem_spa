/**
 * Интерфейс комментария к выступлению
 */
export interface Comment {
  id: string;
  name: string;
  organization: string;
  userPhotoUrl: string;
  text: string;
  number: number;
  dateTime: Date;
}
