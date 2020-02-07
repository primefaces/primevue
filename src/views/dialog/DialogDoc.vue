<template>
	<div class="content-section documentation">
		<TabView>
			<TabPanel header="Documentation">
				<h3>Import</h3>
<CodeHighlight lang="javascript">
import Dialog from 'primevue/dialog';
</CodeHighlight>

				<h3>Getting Started</h3>
				<p>Dialog is used as a container and visibility is managed with <i>visible</i> property that requires the sync operator for two-way binding.</p>
<CodeHighlight>
&lt;Dialog header="Godfather I" :visible.sync="display" &gt;
	The story begins as Don Vito Corleone, the head of a New York Mafia family, oversees his daughter's wedding.
	His beloved son Michael has just come home from the war, but does not intend to become part of his father's business.
	Through Michael's life the nature of the family business becomes clear. The business of the family is just like the head of the family,
	kind and benevolent to those who give respect, but given to ruthless violence whenever anything stands against the good of the family.
&lt;/Dialog&gt;
</CodeHighlight>

<CodeHighlight lang="js">
export default {
	data() {
		return {
			display: false
		}
	}
}
</CodeHighlight>

				<h3>Header and Footer</h3>
				<p>Header and Footer sections are defined using properties with the same name that accept simple strings or with the <i>header</i> and <i>footer</i> templates for custom content.</p>
<CodeHighlight>
&lt;Dialog header="Header Text" footer="Footer Text" :visible.sync="display"&gt;
	Content
&lt;/Dialog&gt;
</CodeHighlight>

<CodeHighlight>
&lt;Dialog :visible.sync="display"&gt;
    &lt;template #header&gt;
		&lt;h3&gt;Header&lt;/h3&gt;
	&lt;/template&gt;

	Content
	&lt;template #footer&gt;
		&lt;Button label="Yes" icon="pi pi-check" /&gt;
		&lt;Button label="No" icon="pi pi-times" class="p-button-secondary"/&gt;
	&lt;/template&gt;
&lt;/Dialog&gt;
</CodeHighlight>

                <h3>Positioning</h3>
                <p>Dialog location is controlled with the <i>position</i> property whose default value is center. Other valid values are top", "bottom", "left", "right", "topleft", "topright", "bottomleft" and "bottomright"<div class=""></div>
<CodeHighlight>
&lt;Dialog position="top" :visible.sync="display"&gt;
	Content
&lt;/Dialog&gt;
</CodeHighlight>

				<h3>Properties</h3>
				<div class="doc-tablewrapper">
					<table class="doc-table">
						<thead>
                            <tr>
                                <th>Name</th>
                                <th>Type</th>
                                <th>Default</th>
                                <th>Description</th>
                            </tr>
						</thead>
						<tbody>
                            <tr>
                                <td>header</td>
                                <td>any</td>
                                <td>null</td>
                                <td>Title content of the dialog.</td>
                            </tr>
                            <tr>
                                <td>footer</td>
                                <td>any</td>
                                <td>null</td>
                                <td>Footer content of the dialog.</td>
                            </tr>
                            <tr>
                                <td>visible</td>
                                <td>boolean</td>
                                <td>false</td>
                                <td>Specifies the visibility of the dialog.</td>
                            </tr>
                            <tr>
                                <td>modal</td>
                                <td>boolean</td>
                                <td>null</td>
                                <td>Defines if background should be blocked when dialog is displayed.</td>
                            </tr>
                            <tr>
                                <td>position</td>
                                <td>string</td>
                                <td>center</td>
                                <td>Position of the dialog, options are "center", "top", "bottom", "left", "right", "topleft", "topright", "bottomleft" or "bottomright".</td>
                            </tr>
                            <tr>
                                <td>contentStyle</td>
                                <td>object</td>
                                <td>null</td>
                                <td>Style of the content section.</td>
                            </tr>
                            <tr>
                                <td>rtl</td>
                                <td>boolean</td>
                                <td>null</td>
                                <td>When enabled dialog is displayed in RTL direction.</td>
                            </tr>
                            <tr>
                                <td>closable</td>
                                <td>boolean</td>
                                <td>true</td>
                                <td>Adds a close icon to the header to hide the dialog.</td>
                            </tr>
                            <tr>
                                <td>showHeader</td>
                                <td>boolean</td>
                                <td>true</td>
                                <td>Whether to show the header or not.</td>
                            </tr>
                            <tr>
                                <td>baseZIndex</td>
                                <td>number</td>
                                <td>0</td>
                                <td>Base zIndex value to use in layering.</td>
                            </tr>
                            <tr>
                                <td>autoZIndex</td>
                                <td>boolean</td>
                                <td>true</td>
                                <td>Whether to automatically manage layering.</td>
                            </tr>
                            <tr>
                                <td>ariaCloseLabel</td>
                                <td>string</td>
                                <td>close</td>
                                <td>Aria label of the close icon.</td>
                            </tr>
                            <tr>
                                <td>maximizable</td>
                                <td>boolean</td>
                                <td>false</td>
                                <td>Whether the dialog can be displayed full screen.</td>
                            </tr>
						</tbody>
					</table>
				</div>

				<h3>Events</h3>
				<div class="doc-tablewrapper">
					<table class="doc-table">
						<thead>
						<tr>
							<th>Name</th>
							<th>Parameters</th>
							<th>Description</th>
						</tr>
						</thead>
						<tbody>
						<tr>
							<td>hide</td>
							<td>event: Event object</td>
							<td>Callback to invoke when dialog is hidden.</td>
						</tr>
						<tr>
							<td>show</td>
							<td>event: Event object</td>
							<td>Callback to invoke when dialog is showed.</td>
						</tr>
						</tbody>
					</table>
				</div>

				<h3>Styling</h3>
				<p>Following is the list of structural style classes, for theming classes visit <router-link to="/theming">theming</router-link> page.</p>
				<div class="doc-tablewrapper">
					<table class="doc-table">
						<thead>
						<tr>
							<th>Name</th>
							<th>Element</th>
						</tr>
						</thead>
						<tbody>
						<tr>
							<td>p-dialog</td>
							<td>Container element.</td>
						</tr>
						<tr>
							<td>p-dialog-titlebar</td>
							<td>Container of header.</td>
						</tr>
						<tr>
							<td>p-dialog-title</td>
							<td>Header element.</td>
						</tr>
						<tr>
							<td>p-dialog-titlebar-icon</td>
							<td>Icon container inside header.</td>
						</tr>
						<tr>
							<td>p-dialog-titlebar-close</td>
							<td>Close icon element.</td>
						</tr>
						<tr>
							<td>p-dialog-content</td>
							<td>Content element</td>
						</tr>
						</tbody>
					</table>
				</div>

				<h3>Dependencies</h3>
				<p>None.</p>
			</TabPanel>

			<TabPanel header="Source">
				<a href="https://github.com/primefaces/primevue/tree/master/src/views/dialog" class="btn-viewsource" target="_blank" rel="noopener noreferrer">
					<span>View on GitHub</span>
				</a>
<CodeHighlight>
<template v-pre>
&lt;h3&gt;Basic&lt;/h3&gt;
&lt;Button label="Show" icon="pi pi-external-link" @click="openBasic" /&gt;
&lt;Dialog header="Godfather I" :visible.sync="displayBasic" :style="{width: '50vw'}"&gt;
    The story begins as Don Vito Corleone, the head of a New York Mafia family, oversees his daughter's wedding.
        His beloved son Michael has just come home from the war, but does not intend to become part of his father's business.
        Through Michael's life the nature of the family business becomes clear. The business of the family is just like the head of the family,
        kind and benevolent to those who give respect, but given to ruthless violence whenever anything stands against the good of the family.
    &lt;template #footer&gt;
        &lt;Button label="Yes" icon="pi pi-check" @click="closeBasic" /&gt;
        &lt;Button label="No" icon="pi pi-times" @click="closeBasic" class="p-button-secondary"/&gt;
    &lt;/template&gt;
&lt;/Dialog&gt;

&lt;Button label="Long Content" icon="pi pi-external-link" @click="openBasic2" /&gt;
&lt;Dialog header="Godfather Casting" :visible.sync="displayBasic2" :style="{width: '50vw'}"&gt;
    Puzo was first to show interest in having Marlon Brando portray Don Vito Corleone by sending a letter to Brando in which he stated Brando was the "only actor who can play the Godfather." Despite Puzo's wishes, the executives at Paramount were against having Brando, partly due to the poor performance of his recent films and also his short temper. Coppola favored Brando or Laurence Olivier for the role, but Olivier's agent refused the role claiming Olivier was sick; however, Olivier went on to star in Sleuth later that year. The studio mainly pushed for Ernest Borgnine to receive the part. Other considerations were George C. Scott, Richard Conte, Anthony Quinn, and Orson Welles.
    &lt;br&gt;&lt;br&gt;
    After months of debate between Coppola and Paramount over Brando, the two finalists for the role were Borgnine and Brando, the latter of whom Paramount president Stanley Jaffe required to perform a screen test. Coppola did not want to offend Brando and stated that he needed to test equipment in order to set up the screen test at Brando's California residence. For make-up, Brando stuck cotton balls in his cheeks, put shoe polish in his hair to darken it, and rolled his collar. Coppola placed Brando's audition tape in the middle of the videos of the audition tapes as the Paramount executives watched them. The executives were impressed with Brando's efforts and allowed Coppola to cast Brando for the role if Brando accepted a lower salary and put up a bond to ensure he would not cause any delays in production. Brando earned $1.6 million from a net participation deal.
    &lt;br&gt;&lt;br&gt;
    From the start of production, Coppola wanted Robert Duvall to play the part of Tom Hagen. After screen testing several other actors, Coppola eventually got his wish and Duvall was awarded the part of Tom Hagen. Al Martino, a then famed singer in nightclubs, was notified of the character Johnny Fontane by a friend who read the eponymous novel and felt Martino represented the character of Johnny Fontane. Martino then contacted producer Albert S. Ruddy, who gave him the part. However, Martino was stripped of the part after Coppola became director and then awarded the role to singer Vic Damone. According to Martino, after being stripped of the role, he went to Russell Bufalino, his godfather and a crime boss, who then orchestrated the publication of various news articles that claimed Coppola was unaware of Ruddy giving Martino the part. Damone eventually dropped the role because he did not want to provoke the mob, in addition to being paid too little. Ultimately, the part of Johnny Fontane was given to Martino.
    &lt;br&gt;&lt;br&gt;
    Robert De Niro originally was given the part of Paulie Gatto. A spot in The Gang That Couldn't Shoot Straight opened up after Al Pacino quit the project in favor of The Godfather, which led De Niro to audition for the role and leave The Godfather after receiving the part. After De Niro quit, Johnny Martino was given the role of Gatto. Coppola cast Diane Keaton for the role of Kay Adams due to her reputation for being eccentric. John Cazale was given the part of Fredo Corleone after Coppola saw him perform in an Off Broadway production. Gianni Russo was given the role of Carlo Rizzi after he was asked to perform a screen test in which he acted out the fight between Rizzi and Connie.
    &lt;br&gt;&lt;br&gt;
    Nearing the start of filming on March 29, Michael Corleone had yet to be cast. Paramount executives wanted a popular actor, either Warren Beatty or Robert Redford. Producer Robert Evans wanted Ryan O'Neal to receive the role in part due to his recent success in Love Story. Pacino was Coppola's favorite for the role as he could picture him roaming the Sicilian countryside, and wanted an unknown actor who looked like an Italian-American. However, Paramount executives found Pacino to be too short to play Michael. Dustin Hoffman, Martin Sheen, and James Caan also auditioned. Caan was well received by the Paramount executives and was given the part of Michael initially, while the role of Sonny Corleone was awarded to Carmine Caridi. Coppola still pushed for Pacino to play Michael after the fact and Evans eventually conceded, allowing Pacino to have the role of Michael as long as Caan played Sonny. Evans preferred Caan over Caridi because Caan was seven inches shorter than Caridi, which was much closer to Pacino's height. Despite agreeing to play Michael Corleone, Pacino was contracted to star in MGM's The Gang That Couldn't Shoot Straight, but the two studios agreed on a settlement and Pacino was signed by Paramount three weeks before shooting began.
    &lt;br&gt;&lt;br&gt;
    Coppola gave several roles in the film to family members. He gave his sister, Talia Shire, the role of Connie Corleone. His daughter Sofia played Michael Francis Rizzi, Connie's and Carlo's newborn son. Carmine Coppola, his father, appeared in the film as an extra playing a piano during a scene. Coppola's wife, mother, and two sons all appeared as extras in the picture. Several smaller roles, like Luca Brasi, were cast after the filming had started.
    &lt;br&gt;&lt;br&gt;
    &lt;template #footer&gt;
        &lt;Button label="Yes" icon="pi pi-check" @click="closeBasic2" /&gt;
        &lt;Button label="No" icon="pi pi-times" @click="closeBasic2" class="p-button-secondary"/&gt;
    &lt;/template&gt;
&lt;/Dialog&gt;

&lt;h3&gt;Modal&lt;/h3&gt;
&lt;Button label="Show" icon="pi pi-external-link" @click="openModal" /&gt;
&lt;Dialog header="Godfather I" :visible.sync="displayModal" :style="{width: '50vw'}" :modal="true"&gt;
    The story begins as Don Vito Corleone, the head of a New York Mafia family, oversees his daughter's wedding.
        His beloved son Michael has just come home from the war, but does not intend to become part of his father's business.
        Through Michael's life the nature of the family business becomes clear. The business of the family is just like the head of the family,
        kind and benevolent to those who give respect, but given to ruthless violence whenever anything stands against the good of the family.
    &lt;template #footer&gt;
        &lt;Button label="Yes" icon="pi pi-check" @click="closeModal" /&gt;
        &lt;Button label="No" icon="pi pi-times" @click="closeModal" class="p-button-secondary"/&gt;
    &lt;/template&gt;
&lt;/Dialog&gt;

&lt;h3&gt;Maximizable&lt;/h3&gt;
&lt;Button label="Show" icon="pi pi-external-link" @click="openMaximizable" /&gt;
&lt;Dialog header="Godfather I" :visible.sync="displayMaximizable" :style="{width: '50vw'}" :maximizable="true" :modal="true"&gt;
    The story begins as Don Vito Corleone, the head of a New York Mafia family, oversees his daughter's wedding.
        His beloved son Michael has just come home from the war, but does not intend to become part of his father's business.
        Through Michael's life the nature of the family business becomes clear. The business of the family is just like the head of the family,
        kind and benevolent to those who give respect, but given to ruthless violence whenever anything stands against the good of the family.
    &lt;template #footer&gt;
        &lt;Button label="Yes" icon="pi pi-check" @click="closeMaximizable" /&gt;
        &lt;Button label="No" icon="pi pi-times" @click="closeMaximizable" class="p-button-secondary"/&gt;
    &lt;/template&gt;
&lt;/Dialog&gt;

&lt;h3&gt;Position&lt;/h3&gt;
&lt;div class="p-grid p-dir-col"&gt;
    &lt;div class="p-col"&gt;
        &lt;Button label="Left" icon="pi pi-arrow-right" @click="openPosition('left')" class="p-button-warning"/&gt;
        &lt;Button label="Right" icon="pi pi-arrow-left" @click="openPosition('right')" class="p-button-warning"/&gt;
    &lt;/div&gt;
    &lt;div class="p-col"&gt;
        &lt;Button label="Top" icon="pi pi-arrow-down" @click="openPosition('top')" class="p-button-warning" /&gt;
        &lt;Button label="TopLeft" icon="pi pi-arrow-down" @click="openPosition('topLeft')" class="p-button-warning" /&gt;
        &lt;Button label="TopRight" icon="pi pi-arrow-down" @click="openPosition('topRight')" class="p-button-warning" /&gt;
    &lt;/div&gt;
    &lt;div class="p-col"&gt;
        &lt;Button label="Bottom" icon="pi pi-arrow-up" @click="openPosition('bottom')" class="p-button-warning" /&gt;
        &lt;Button label="BottomLeft" icon="pi pi-arrow-up" @click="openPosition('bottomLeft')" class="p-button-warning" /&gt;
        &lt;Button label="BottomRight" icon="pi pi-arrow-up" @click="openPosition('bottomRight')" class="p-button-warning" /&gt;
    &lt;/div&gt;
&lt;/div&gt;

&lt;Dialog header="Godfather I" :visible.sync="displayPosition" :style="{width: '50vw'}" :position="position" :modal="true"&gt;
    The story begins as Don Vito Corleone, the head of a New York Mafia family, oversees his daughter's wedding.
        His beloved son Michael has just come home from the war, but does not intend to become part of his father's business.
        Through Michael's life the nature of the family business becomes clear. The business of the family is just like the head of the family,
        kind and benevolent to those who give respect, but given to ruthless violence whenever anything stands against the good of the family.
    &lt;template #footer&gt;
        &lt;Button label="Yes" icon="pi pi-check" @click="closePosition" /&gt;
        &lt;Button label="No" icon="pi pi-times" @click="closePosition" class="p-button-secondary"/&gt;
    &lt;/template&gt;
&lt;/Dialog&gt;
</template>
</CodeHighlight>

<CodeHighlight lang="javascript">
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
</CodeHighlight>

<CodeHighlight lang="css">
//CSS
body .p-button-dark {
    background-color: #455b70;
    border-color: #455b70;
}
body .p-button-dark:enabled:hover {
    background-color: #364758;
}
body .p-button-dark:enabled:focus {
    box-shadow: 0 0 0 0.2em #95a9bd;
}
body .{
    margin: .5em .5em .5em 0;
    width: 140px;
}
body .p-dialog .p-dialog-content {
    line-height: 1.5;
}
</CodeHighlight>
			</TabPanel>
		</TabView>
	</div>
</template>
