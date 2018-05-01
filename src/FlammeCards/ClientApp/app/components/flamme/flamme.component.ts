import { Component } from '@angular/core';
import { FlammeBike } from './FlammeBike';
import { FlammeCardManager } from './FlammeCardManager';


@Component({
    selector: 'flamme',
    templateUrl: './flamme.component.html'
})
export class FlammeComponent {
    roundCount: number = 1;

    bikes: Array<FlammeBike> = new Array<FlammeBike>();

    phase: number = 10;

    chosenTeamType: string = "human";
    chosenTeamColour: string = "pink";
    teamTypes: Array<string> = new Array();
    teamColours: Array<string> = new Array();

    constructor() {

        this.teamTypes.push("human");
        this.teamTypes.push("peloton");
        this.teamTypes.push("muscle");

        this.teamColours.push("pink");
        this.teamColours.push("black");
        this.teamColours.push("green");
        this.teamColours.push("white");
        this.teamColours.push("red");
        this.teamColours.push("blue");

        this.bikes = new Array<FlammeBike>();
    }
   
    endMovement() {
        this.phase = 20;

        for (let i = 0; i < this.bikes.length; i++) {
            if (this.bikes[i].teamType === "peloton") {
                let topCard = this.bikes[i].cardManager.takeTopCard();
                this.bikes[i].selectedCard = topCard;
            } else if (this.bikes[i].teamType === "muscle") {
                let topCard = this.bikes[i].cardManager.takeTopCard();
                this.bikes[i].selectedCard = topCard;
            }
        }
    }

    endRound() {
        for (var i = 0; i < this.bikes.length; i++) {
            if (this.bikes[i].teamType === 'human') {

                this.bikes[i].cardManager.selectCard(this.bikes[i].selectedCardIndex);

                // Add exhaustion if required
                if (this.bikes[i].exhaustionAdded) {
                    this.bikes[i].cardManager.addExhaustion();
                }

                // Reset the state
                this.bikes[i].cardsState = 0;
                this.bikes[i].selectedCard = 0;
                this.bikes[i].selectedCardIndex = 0;
                this.bikes[i].cardManager.takeCards();
                this.bikes[i].exhaustionAdded = false;
            } else {
                this.bikes[i].selectedCard = 0;
            }
        }

        this.roundCount++;

        this.phase = 0;
    }

    addTeam() {
        console.log(this.chosenTeamColour);

        if (this.chosenTeamType === "peloton") {
            var peloBike = new FlammeBike();
            peloBike.name = "peloton";
            peloBike.colour = this.chosenTeamColour;
            peloBike.cardManager = new FlammeCardManager(2);
            peloBike.teamType = "peloton";

            this.bikes.push(peloBike);
        }
        else if (this.chosenTeamType === "muscle") {
            var muscleRouler = new FlammeBike();
            muscleRouler.name = "rouler";
            muscleRouler.colour = this.chosenTeamColour;
            muscleRouler.cardManager = new FlammeCardManager(0);
            muscleRouler.teamType = "muscle";

            this.bikes.push(muscleRouler);

            var muscleSprinter = new FlammeBike();
            muscleSprinter.name = "sprinter";
            muscleSprinter.colour = this.chosenTeamColour;
            muscleSprinter.cardManager = new FlammeCardManager(3);
            muscleSprinter.teamType = "muscle";

            this.bikes.push(muscleSprinter);

        } else {
            var bike1 = new FlammeBike();
            bike1.name = "rouler";
            bike1.colour = this.chosenTeamColour;
            bike1.cardManager = new FlammeCardManager(0);
            bike1.cardManager.takeCards();
            bike1.teamType = "human";

            this.bikes.push(bike1);

            var bike2 = new FlammeBike();
            bike2.name = "sprinter";
            bike2.colour = this.chosenTeamColour;
            bike2.cardManager = new FlammeCardManager(1);
            bike2.cardManager.takeCards();
            bike2.teamType = "human";

            this.bikes.push(bike2);
        }
    }

    addExhaustion(bikeIndex: number) {
        console.log("add exhaustion to " + this.bikes[bikeIndex].name);
        
        this.bikes[bikeIndex].exhaustionAdded = true;
    }

    selectCard(bikeIndex: number, cardIndex: number) {
        console.log("bike index: " + bikeIndex + " card index: " + cardIndex);

        this.bikes[bikeIndex].cardsState = 2;
        this.bikes[bikeIndex].selectedCardIndex = cardIndex;
        this.bikes[bikeIndex].selectedCard = this.bikes[bikeIndex].cardManager.hand[cardIndex];

        for (var i = 0; i < this.bikes.length; i++) {
            if (i !== bikeIndex && this.bikes[i].cardsState !== 2) {
                this.bikes[i].cardsState = 0;
            }
        }
    }

    startSelect(index: number) {
        this.bikes[index].cardsState = 1;

        for (var i = 0; i < this.bikes.length; i++) {
            if (i !== index && this.bikes[i].cardsState !== 2) {
                this.bikes[i].cardsState = 3;
            }
        }
    }
}
