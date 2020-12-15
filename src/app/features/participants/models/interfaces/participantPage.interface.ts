import { Participant } from '../participant.model'

export interface ParticipantPage<Participant>{
    totalItems: number;
    itemsPerPage: number;
    offset: number;
    entities: Participant[];
} 