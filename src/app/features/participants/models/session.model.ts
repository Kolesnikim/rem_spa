/**
 * Модель выступления участника
 */
export class Session {
    id: number;
    organization: string;
    title: string;
    startTime: string;
    endTime: string;
    location: string;
    section: string;
    speaker: {
        name: string;
        photoUrl: string;
    };
}
