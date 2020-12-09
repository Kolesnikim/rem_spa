/**
 * Интерфейс комментария к выступлению
 */
export interface IComment {
  id: string;
  name: string;
  organization: string;
  userPhotoUrl: string;
  text: string;
  number: number;
  dateTime: Date;
}
