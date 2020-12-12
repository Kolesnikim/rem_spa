/**
 * Описание спонсора
 */
export interface Sponsor {
    id: number;
    isHidden: boolean;
    logoUrl: string;
    webSite: string;
    title: string;
    text: string;
    conferenceId: string;
    sponsorTypeTag: string;
    photoUrl: string;
}
