import { FlammeCardManager } from './FlammeCardManager';

export class FlammeBike {
    name: string;
    selectedCard: number = 0;
    selectedCardIndex: number = 0;
    cardManager: FlammeCardManager;
    cardsState: number = 0;
    colour: string;
    exhaustionAdded: boolean = false;
    teamType: string;
}