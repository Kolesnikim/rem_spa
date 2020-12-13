import { Session } from './session';

export interface Section {
  id: number;
  location: string;
  title: string;
  sessions: Session[];
}
