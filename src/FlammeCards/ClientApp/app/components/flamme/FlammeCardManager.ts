export class FlammeCardManager {
    deckType: number;
    cards: Array<number> = new Array();
    four: Array<number> = new Array();
    recycle : Array<number> = new Array();
    removed: Array<number> = new Array();

    constructor(deckType: number) {
        this.deckType = deckType;

        if (deckType === 0) { // rouler

            this.cards.push(3);
            this.cards.push(3);
            this.cards.push(3);
            this.cards.push(4);
            this.cards.push(4);
            this.cards.push(4);
            this.cards.push(5);
            this.cards.push(5);
            this.cards.push(5);
            this.cards.push(6);
            this.cards.push(6);
            this.cards.push(6);
            this.cards.push(7);
            this.cards.push(7);
            this.cards.push(7);

        } else if (deckType === 1) { // sprinter

            this.cards.push(2);
            this.cards.push(2);
            this.cards.push(2);
            this.cards.push(3);
            this.cards.push(3);
            this.cards.push(3);
            this.cards.push(4);
            this.cards.push(4);
            this.cards.push(4);
            this.cards.push(5);
            this.cards.push(5);
            this.cards.push(5);
            this.cards.push(9);
            this.cards.push(9);
            this.cards.push(9);
        }
        else if (deckType === 2) { // peloton

            this.cards.push(3);
            this.cards.push(3);
            this.cards.push(3);
            this.cards.push(4);
            this.cards.push(4);
            this.cards.push(4);
            this.cards.push(5);
            this.cards.push(5);
            this.cards.push(5);
            this.cards.push(6);
            this.cards.push(6);
            this.cards.push(6);
            this.cards.push(7);
            this.cards.push(7);
            this.cards.push(7);
            this.cards.push(99); // attack card
            this.cards.push(99); // attack card
        }
        else if (deckType === 3) {  // muscle sprinter
            this.cards.push(2);
            this.cards.push(2);
            this.cards.push(2);
            this.cards.push(3);
            this.cards.push(3);
            this.cards.push(3);
            this.cards.push(4);
            this.cards.push(4);
            this.cards.push(4);
            this.cards.push(5);
            this.cards.push(5);
            this.cards.push(5);
            this.cards.push(55); // muscle card
            this.cards.push(9);
            this.cards.push(9);
            this.cards.push(9);
        }
             
        this.shuffle(this.cards);
    }

    addExhaustion() {
        this.recycle.push(22);
    }

    selectCard(bikeIndex: number) {
        for (var i = 0; i < this.four.length; i++) {
            if (bikeIndex !== i) {
                this.recycle.push(this.four[i]);
            } else {
                this.removed.push(this.four[i]);
            }
        }
    }

    takeTopCard(): number {
        var card = this.cards[0];

        this.removed.push(card);

        this.cards = this.cards.splice(1, this.cards.length);

        return card;
    }

    takeCards(amountOfCards : number = 4): Array<number> {
        this.four = new Array();

        if (this.cards.length > amountOfCards) {
            for (var i = 0; i < amountOfCards; i++) {
                this.four.push(this.cards[i]);
            }
            this.cards = this.cards.slice(amountOfCards, this.cards.length);
        } else {
            var amount = amountOfCards - this.cards.length;

            for (var j = 0; j < this.cards.length; j++) {
                this.four.push(this.cards[j]);
            }

            this.cards = new Array();
            this.cards = this.cards.concat(this.recycle);
            this.shuffle(this.cards);

            this.recycle = new Array();

            for (var k = 0; k < amount; k++) {
                this.four.push(this.cards[k]);
            }
            this.cards = this.cards.slice(amount, this.cards.length);
        }

        console.log(this);

        return this.four;
    }

    shuffle(array : Array<number>) {
        var i = 0, j = 0, temp = 0;

        for (i = array.length - 1; i > 0; i -= 1) {
            j = Math.floor(Math.random() * (i + 1));
            temp = array[i];
            array[i] = array[j];
            array[j] = temp;
        }
    }
}