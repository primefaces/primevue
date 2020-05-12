<template>
    <div>
        <div class="content-section introduction">
            <div class="feature-intro">
                <h1>Accordion</h1>
                <p>Accordion groups a collection of contents in tabs.</p>
            </div>
        </div>

        <div class="content-section implementation">
            <h3 class="first">Default</h3>
            <Accordion>
                <AccordionTab header="Godfather I">
                    <p>The story begins as Don Vito Corleone, the head of a New York Mafia family, overseeshis daughter's wedding. His beloved son ichael has just come home from the war,
                    but does not intend to become part of his father's business. Through Michael's life the nature of the family business becomes clear. The business of the family is
                    just like the head of the family, kind and benevolent to those who give respect, but given to ruthless violence whenever anything stands against the good of the family.</p>
                </AccordionTab>
                <AccordionTab header="Godfather II">
                    <p>Francis Ford Coppola's legendary continuation and sequel to his landmark 1972 film, TheGodfather parallels the young Vito Corleone's rise with his son Michael's spiritual fall,
                    deepening The Godfather's depiction of the dark side of the American dream. In the early 1900s, the child Vito flees his Sicilian village for America after the local Mafia kills
                    his family. Vito struggles to make a living, legally or illegally, for his wife and growing brood in Little Italy.</p>
                </AccordionTab>
                <AccordionTab header="Godfather III">
                    <p>The Godfather Part III is set in 1979 and 1980. Michael has moved back to New York and taken great strides to remove the family from crime. He turns over his New York criminal
                    interests to longtime enforcer Joey Zasa. He uses his wealth in an attempt to rehabilitate his reputation through numerous philanthropic acts, administered by a foundation named after his father.
                    A decade earlier, he gave custody of his two children to Kay, who has since remarried.</p>
                </AccordionTab>
            </Accordion>

            <h3>Multiple</h3>
            <Accordion :multiple="true">
                <AccordionTab header="Godfather I">
                    <p>The story begins as Don Vito Corleone, the head of a New York Mafia family, overseeshis daughter's wedding. His beloved son ichael has just come home from the war,
                    but does not intend to become part of his father's business. Through Michael's life the nature of the family business becomes clear. The business of the family is
                    just like the head of the family, kind and benevolent to those who give respect, but given to ruthless violence whenever anything stands against the good of the family.</p>
                </AccordionTab>
                <AccordionTab header="Godfather II">
                    <p>Francis Ford Coppola's legendary continuation and sequel to his landmark 1972 film, TheGodfather parallels the young Vito Corleone's rise with his son Michael's spiritual fall,
                    deepening The Godfather's depiction of the dark side of the American dream. In the early 1900s, the child Vito flees his Sicilian village for America after the local Mafia kills
                    his family. Vito struggles to make a living, legally or illegally, for his wife and growing brood in Little Italy.</p>
                </AccordionTab>
                <AccordionTab header="Godfather III">
                    <p>The Godfather Part III is set in 1979 and 1980. Michael has moved back to New York and taken great strides to remove the family from crime. He turns over his New York criminal
                    interests to longtime enforcer Joey Zasa. He uses his wealth in an attempt to rehabilitate his reputation through numerous philanthropic acts, administered by a foundation named after his father.
                    A decade earlier, he gave custody of his two children to Kay, who has since remarried.</p>
                </AccordionTab>
                <AccordionTab header="Godfather IV" :disabled="true">
                </AccordionTab>
            </Accordion>

            <h3>Programmatic</h3>
            <div style="padding: .5em 0 1em 0">
                 <Button :icon="active1 ? 'pi pi-minus' : 'pi pi-plus'" label="Toggle 1st" @click="active1 = !active1" class="p-button-secondary" />
                 <Button :icon="active2 ? 'pi pi-minus' : 'pi pi-plus'" label="Toggle 2nd" @click="active2 = !active2" class="p-button-secondary" style="margin-left: .5em" />
                 <Button :icon="active3 ? 'pi pi-minus' : 'pi pi-plus'" label="Toggle 3rd" @click="active3 = !active3" class="p-button-secondary" style="margin-left: .5em" />
            </div>

            <Accordion :multiple="true">
                <AccordionTab header="Godfather I" :active="active1">
                    <p>The story begins as Don Vito Corleone, the head of a New York Mafia family, overseeshis daughter's wedding. His beloved son ichael has just come home from the war,
                    but does not intend to become part of his father's business. Through Michael's life the nature of the family business becomes clear. The business of the family is
                    just like the head of the family, kind and benevolent to those who give respect, but given to ruthless violence whenever anything stands against the good of the family.</p>
                </AccordionTab>
                <AccordionTab header="Godfather II" :active="active2">
                    <p>Francis Ford Coppola's legendary continuation and sequel to his landmark 1972 film, TheGodfather parallels the young Vito Corleone's rise with his son Michael's spiritual fall,
                    deepening The Godfather's depiction of the dark side of the American dream. In the early 1900s, the child Vito flees his Sicilian village for America after the local Mafia kills
                    his family. Vito struggles to make a living, legally or illegally, for his wife and growing brood in Little Italy.</p>
                </AccordionTab>
                <AccordionTab header="Godfather III" :active="active3">
                    <p>The Godfather Part III is set in 1979 and 1980. Michael has moved back to New York and taken great strides to remove the family from crime. He turns over his New York criminal
                    interests to longtime enforcer Joey Zasa. He uses his wealth in an attempt to rehabilitate his reputation through numerous philanthropic acts, administered by a foundation named after his father.
                    A decade earlier, he gave custody of his two children to Kay, who has since remarried.</p>
                </AccordionTab>
            </Accordion>

            <h3>Custom Headers</h3>
            <Accordion class="accordion-custom">
                <AccordionTab>
                    <template slot="header">
                        <i class="pi pi-calendar"></i>
                        <span>Godfather I</span>
                    </template>
                    <p>The story begins as Don Vito Corleone, the head of a New York Mafia family, overseeshis daughter's wedding. His beloved son ichael has just come home from the war,
                    but does not intend to become part of his father's business. Through Michael's life the nature of the family business becomes clear. The business of the family is
                    just like the head of the family, kind and benevolent to those who give respect, but given to ruthless violence whenever anything stands against the good of the family.</p>
                </AccordionTab>
                <AccordionTab>
                    <template slot="header">
                        <i class="pi pi-user"></i>
                        <span>Godfather II</span>
                    </template>
                    <p>Francis Ford Coppola's legendary continuation and sequel to his landmark 1972 film, TheGodfather parallels the young Vito Corleone's rise with his son Michael's spiritual fall,
                    deepening The Godfather's depiction of the dark side of the American dream. In the early 1900s, the child Vito flees his Sicilian village for America after the local Mafia kills
                    his family. Vito struggles to make a living, legally or illegally, for his wife and growing brood in Little Italy.</p>
                </AccordionTab>
                <AccordionTab>
                    <template slot="header">
                        <i class="pi pi-search"></i>
                        <span>Godfather III</span>
                        <i class="pi pi-cog"></i>
                    </template>
                    <p>The Godfather Part III is set in 1979 and 1980. Michael has moved back to New York and taken great strides to remove the family from crime. He turns over his New York criminal
                    interests to longtime enforcer Joey Zasa. He uses his wealth in an attempt to rehabilitate his reputation through numerous philanthropic acts, administered by a foundation named after his father.
                    A decade earlier, he gave custody of his two children to Kay, who has since remarried.</p>
                </AccordionTab>
            </Accordion>
        </div>

        <AccordionDoc/>
    </div>
</template>

<script>
import AccordionDoc from './AccordionDoc';

export default {
    data() {
        return {
            active1: true,
            active2: false,
            active3: false
        }
    },
    components: {
        'AccordionDoc': AccordionDoc
    }
}
</script>

<style lang="scss" scoped>
.accordion-custom {
    i, span {
        vertical-align: middle;
    }

    span {
        margin: 0 .5em;
    }
}

.p-accordion p {
    line-height: 1.5;
    margin: 0;
}
</style>