<template>
    <div>
        <div class="content-section introduction">
            <div class="feature-intro">
                <h1>Dialog</h1>
                <p>Dialog is a container to display content in an overlay window.</p>
            </div>
        </div>

        <div class="content-section implementation">
            <h3>Basic</h3>
            <Button label="Show" icon="pi pi-external-link" @click="openBasic" />
            <Dialog header="Godfather I" :visible.sync="displayBasic" :style="{width: '50vw'}">
                The story begins as Don Vito Corleone, the head of a New York Mafia family, oversees his daughter's wedding.
                    His beloved son Michael has just come home from the war, but does not intend to become part of his father's business.
                    Through Michael's life the nature of the family business becomes clear. The business of the family is just like the head of the family,
                    kind and benevolent to those who give respect, but given to ruthless violence whenever anything stands against the good of the family.
                <template #footer>
                    <Button label="Yes" icon="pi pi-check" @click="closeBasic" />
                    <Button label="No" icon="pi pi-times" @click="closeBasic" class="p-button-secondary"/>
                </template>
            </Dialog>

            <Button label="Long Content" icon="pi pi-external-link" @click="openBasic2" />
            <Dialog header="Godfather Casting" :visible.sync="displayBasic2" :style="{width: '50vw'}">
                Puzo was first to show interest in having Marlon Brando portray Don Vito Corleone by sending a letter to Brando in which he stated Brando was the "only actor who can play the Godfather." Despite Puzo's wishes, the executives at Paramount were against having Brando, partly due to the poor performance of his recent films and also his short temper. Coppola favored Brando or Laurence Olivier for the role, but Olivier's agent refused the role claiming Olivier was sick; however, Olivier went on to star in Sleuth later that year. The studio mainly pushed for Ernest Borgnine to receive the part. Other considerations were George C. Scott, Richard Conte, Anthony Quinn, and Orson Welles.
                <br><br>
                After months of debate between Coppola and Paramount over Brando, the two finalists for the role were Borgnine and Brando, the latter of whom Paramount president Stanley Jaffe required to perform a screen test. Coppola did not want to offend Brando and stated that he needed to test equipment in order to set up the screen test at Brando's California residence. For make-up, Brando stuck cotton balls in his cheeks, put shoe polish in his hair to darken it, and rolled his collar. Coppola placed Brando's audition tape in the middle of the videos of the audition tapes as the Paramount executives watched them. The executives were impressed with Brando's efforts and allowed Coppola to cast Brando for the role if Brando accepted a lower salary and put up a bond to ensure he would not cause any delays in production. Brando earned $1.6 million from a net participation deal.
                <br><br>
                From the start of production, Coppola wanted Robert Duvall to play the part of Tom Hagen. After screen testing several other actors, Coppola eventually got his wish and Duvall was awarded the part of Tom Hagen. Al Martino, a then famed singer in nightclubs, was notified of the character Johnny Fontane by a friend who read the eponymous novel and felt Martino represented the character of Johnny Fontane. Martino then contacted producer Albert S. Ruddy, who gave him the part. However, Martino was stripped of the part after Coppola became director and then awarded the role to singer Vic Damone. According to Martino, after being stripped of the role, he went to Russell Bufalino, his godfather and a crime boss, who then orchestrated the publication of various news articles that claimed Coppola was unaware of Ruddy giving Martino the part. Damone eventually dropped the role because he did not want to provoke the mob, in addition to being paid too little. Ultimately, the part of Johnny Fontane was given to Martino.
                <br><br>
                Robert De Niro originally was given the part of Paulie Gatto. A spot in The Gang That Couldn't Shoot Straight opened up after Al Pacino quit the project in favor of The Godfather, which led De Niro to audition for the role and leave The Godfather after receiving the part. After De Niro quit, Johnny Martino was given the role of Gatto. Coppola cast Diane Keaton for the role of Kay Adams due to her reputation for being eccentric. John Cazale was given the part of Fredo Corleone after Coppola saw him perform in an Off Broadway production. Gianni Russo was given the role of Carlo Rizzi after he was asked to perform a screen test in which he acted out the fight between Rizzi and Connie.
                <br><br>
                Nearing the start of filming on March 29, Michael Corleone had yet to be cast. Paramount executives wanted a popular actor, either Warren Beatty or Robert Redford. Producer Robert Evans wanted Ryan O'Neal to receive the role in part due to his recent success in Love Story. Pacino was Coppola's favorite for the role as he could picture him roaming the Sicilian countryside, and wanted an unknown actor who looked like an Italian-American. However, Paramount executives found Pacino to be too short to play Michael. Dustin Hoffman, Martin Sheen, and James Caan also auditioned. Caan was well received by the Paramount executives and was given the part of Michael initially, while the role of Sonny Corleone was awarded to Carmine Caridi. Coppola still pushed for Pacino to play Michael after the fact and Evans eventually conceded, allowing Pacino to have the role of Michael as long as Caan played Sonny. Evans preferred Caan over Caridi because Caan was seven inches shorter than Caridi, which was much closer to Pacino's height. Despite agreeing to play Michael Corleone, Pacino was contracted to star in MGM's The Gang That Couldn't Shoot Straight, but the two studios agreed on a settlement and Pacino was signed by Paramount three weeks before shooting began.
                <br><br>
                Coppola gave several roles in the film to family members. He gave his sister, Talia Shire, the role of Connie Corleone. His daughter Sofia played Michael Francis Rizzi, Connie's and Carlo's newborn son. Carmine Coppola, his father, appeared in the film as an extra playing a piano during a scene. Coppola's wife, mother, and two sons all appeared as extras in the picture. Several smaller roles, like Luca Brasi, were cast after the filming had started.
                <br><br>
                <template #footer>
                    <Button label="Yes" icon="pi pi-check" @click="closeBasic2" />
                    <Button label="No" icon="pi pi-times" @click="closeBasic2" class="p-button-secondary"/>
                </template>
            </Dialog>

            <h3>Modal</h3>
            <Button label="Show" icon="pi pi-external-link" @click="openModal" />
            <Dialog header="Godfather I" :visible.sync="displayModal" :style="{width: '50vw'}" :modal="true">
                The story begins as Don Vito Corleone, the head of a New York Mafia family, oversees his daughter's wedding.
                    His beloved son Michael has just come home from the war, but does not intend to become part of his father's business.
                    Through Michael's life the nature of the family business becomes clear. The business of the family is just like the head of the family,
                    kind and benevolent to those who give respect, but given to ruthless violence whenever anything stands against the good of the family.
                <template #footer>
                    <Button label="Yes" icon="pi pi-check" @click="closeModal" />
                    <Button label="No" icon="pi pi-times" @click="closeModal" class="p-button-secondary"/>
                </template>
            </Dialog>

            <h3>Maximizable</h3>
            <Button label="Show" icon="pi pi-external-link" @click="openMaximizable" />
            <Dialog header="Godfather I" :visible.sync="displayMaximizable" :style="{width: '50vw'}" :maximizable="true" :modal="true">
                The story begins as Don Vito Corleone, the head of a New York Mafia family, oversees his daughter's wedding.
                    His beloved son Michael has just come home from the war, but does not intend to become part of his father's business.
                    Through Michael's life the nature of the family business becomes clear. The business of the family is just like the head of the family,
                    kind and benevolent to those who give respect, but given to ruthless violence whenever anything stands against the good of the family.
                <template #footer>
                    <Button label="Yes" icon="pi pi-check" @click="closeMaximizable" />
                    <Button label="No" icon="pi pi-times" @click="closeMaximizable" class="p-button-secondary"/>
                </template>
            </Dialog>

            <h3>Position</h3>
            <div class="p-grid p-dir-col">
                <div class="p-col">
                    <Button label="Left" icon="pi pi-arrow-right" @click="openPosition('left')" class="p-button-warning" />
                    <Button label="Right" icon="pi pi-arrow-left" @click="openPosition('right')" class="p-button-warning" />
                </div>
                <div class="p-col">
                    <Button label="Top" icon="pi pi-arrow-down" @click="openPosition('top')" class="p-button-warning" />
                    <Button label="TopLeft" icon="pi pi-arrow-down" @click="openPosition('topLeft')" class="p-button-warning" />
                    <Button label="TopRight" icon="pi pi-arrow-down" @click="openPosition('topRight')" class="p-button-warning" />
                </div>
                <div class="p-col">
                    <Button label="Bottom" icon="pi pi-arrow-up" @click="openPosition('bottom')" class="p-button-warning" />
                    <Button label="BottomLeft" icon="pi pi-arrow-up" @click="openPosition('bottomLeft')" class="p-button-warning" />
                    <Button label="BottomRight" icon="pi pi-arrow-up" @click="openPosition('bottomRight')" class="p-button-warning" />
                </div>
            </div>

            <Dialog header="Godfather I" :visible.sync="displayPosition" :style="{width: '50vw'}" :position="position" :modal="true">
                The story begins as Don Vito Corleone, the head of a New York Mafia family, oversees his daughter's wedding.
                    His beloved son Michael has just come home from the war, but does not intend to become part of his father's business.
                    Through Michael's life the nature of the family business becomes clear. The business of the family is just like the head of the family,
                    kind and benevolent to those who give respect, but given to ruthless violence whenever anything stands against the good of the family.
                <template #footer>
                    <Button label="Yes" icon="pi pi-check" @click="closePosition" />
                    <Button label="No" icon="pi pi-times" @click="closePosition" class="p-button-secondary"/>
                </template>
            </Dialog>
        </div>

        <DialogDoc/>
    </div>
</template>

<script>
import DialogDoc from './DialogDoc';

export default {
    data() {
        return {
            displayBasic: false,
            displayBasic2: false,
            displayModal: false,
            displayMaximizable: false,
            displayPosition: false,
            position: 'center'
        }
    },
    methods: {
        openBasic() {
            this.displayBasic = true;
        },
        closeBasic() {
            this.displayBasic = false;
        },
        openBasic2() {
            this.displayBasic2 = true;
        },
        closeBasic2() {
            this.displayBasic2 = false;
        },
        openModal() {
            this.displayModal = true;
        },
        closeModal() {
            this.displayModal = false;
        },
        openMaximizable() {
            this.displayMaximizable = true;
        },
        closeMaximizable() {
            this.displayMaximizable = false;
        },
        openPosition(position) {
            this.position = position;
            this.displayPosition = true;
        },
        closePosition() {
            this.displayPosition = false;
        }
    },
    components: {
        'DialogDoc': DialogDoc
    }
}
</script>

<style scoped lang="scss">
.p-button {
    margin: .5em .5em .5em 0;
    width: 140px;
}
.p-dialog .p-dialog-content {
    line-height: 1.5;
}
</style>