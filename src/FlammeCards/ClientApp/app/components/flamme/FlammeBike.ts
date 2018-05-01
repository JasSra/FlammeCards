import { FlammeCardManager } from './FlammeCardManager';

export class FlammeBike {
    bikeType : number = 0;
    name: string;
    selectedCard: number;
    selectedCardIndex: number;
    deck: FlammeCardManager;
    cardsState: number = 0;
    colour: string;
    exhaustionAdded: boolean = false;
    teamType: string;
}