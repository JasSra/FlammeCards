import { FlammeCardManager } from './FlammeCardManager';

export class FlammeBike {
    name: string;
    selectedCard: number;
    selectedCardIndex: number;
    cardManager: FlammeCardManager;
    cardsState: number = 0;
    colour: string;
    exhaustionAdded: boolean = false;
    teamType: string;
}