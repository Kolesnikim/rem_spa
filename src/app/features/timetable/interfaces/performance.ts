import { ISpeaker } from './speaker';

export interface IPerformance {
  id: number;
  organization: string;
  section: string;
  speaker: ISpeaker;
  title: string;
  startTime: Date;
  endTime: Date;
  rating: number;
  location: string;
  abstract: string;
  canBeFavorited: boolean;
  canBeCommented: boolean;
  firstDocumentUrl: string;
  secondDocumentUrl: string;
  thirdDocumentUrl: string;
  fourthDocumentUrl: string;
  fifthDocumentUrl: string;
  firstLink: string;
  secondLink: string;
  thirdLink: string;
  fourthLink: string;
  fifthLink: string;
  firstDocumentNameplate: string;
  secondDocumentNameplate: string;
  thirdDocumentNameplate: string;
  fourthDocumentNameplate: string;
  fifthDocumentNameplate: string;
  firstLinkNameplate: string;
  secondLinkNameplate: string;
  thirdLinkNameplate: string;
  fourthLinkNameplate: string;
  fifthLinkNameplate: string;
  firstDocumentVisible: boolean;
  secondDocumentVisible: boolean;
  thirdDocumentVisible: boolean;
  fourthDocumentVisible: boolean;
  fifthDocumentVisible: boolean;
  firstLinkVisible: boolean;
  secondLinkVisible: boolean;
  thirdLinkVisible: boolean;
  fourthLinkVisible: boolean;
  fifthLinkVisible: boolean;
  comments: [
    {
      id: string;
      name: string;
      organization: string;
      userPhotoUrl: string;
      text: string;
      number: number;
      dateTime: Date
    }
  ];
}
