import { ParticipantsService } from '../../services/participants.service';
import { Participant } from '../participant.model';

export interface Participants {
    entities: Participant[];
}
