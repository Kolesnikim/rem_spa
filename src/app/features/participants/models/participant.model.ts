/**
 * Модель участника конференции
 */
export interface Participant {
    id: number;
    additionalInfo: string;
    department: string;
    email: string;
    fullName: string;
    index: number;
    link: string ;
    login: string;
    phone: string ;
    photoUrl: string;
    position: string;
    organizationName: string;
}
