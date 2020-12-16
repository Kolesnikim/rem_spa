import { Speaker } from './interfaces/speaker.interface';
/**
 * Модель выступления участника
 */
export interface Session {
    id: number;
    organization: string ;
    title: string;
    startTime: string;
    endTime: string;
    location: string;
    section: string;
    speaker: Speaker;
}
