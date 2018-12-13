<template>
    <div>
        <div class="content-section introduction">
            <div class="feature-intro">
                <h1>AccordionPanel</h1>
                <p>AccordionPanel groups a collection of contents in tabs.</p>
            </div>
        </div>

        <div class="content-section implementation">
            <h3 class="first">Default</h3>
            <p-accordion>
                <p-accordionTab header="Godfather I">
                    The story begins as Don Vito Corleone, the head of a New York Mafia family, overseeshis daughter's wedding. His beloved son ichael has just come home from the war, 
                    but does not intend to become part of his father's business. Through Michael's life the nature of the family business becomes clear. The business of the family is 
                    just like the head of the family, kind and benevolent to those who give respect, but given to ruthless violence whenever anything stands against the good of the family.
                </p-accordionTab>
                <p-accordionTab header="Godfather II">
                    Francis Ford Coppola's legendary continuation and sequel to his landmark 1972 film, TheGodfather parallels the young Vito Corleone's rise with his son Michael's spiritual fall, 
                    deepening The Godfather's depiction of the dark side of the American dream. In the early 1900s, the child Vito flees his Sicilian village for America after the local Mafia kills 
                    his family. Vito struggles to make a living, legally or illegally, for his wife and growing brood in Little Italy.
                </p-accordionTab>
                <p-accordionTab header="Godfather III">
                    The Godfather Part III is set in 1979 and 1980. Michael has moved back to New York and taken great strides to remove the family from crime. He turns over his New York criminal 
                    interests to longtime enforcer Joey Zasa. He uses his wealth in an attempt to rehabilitate his reputation through numerous philanthropic acts, administered by a foundation named after his father. 
                    A decade earlier, he gave custody of his two children to Kay, who has since remarried.
                </p-accordionTab>
            </p-accordion>

            <h3>Multiple</h3>
            <p-accordion :multiple="true">
                <p-accordionTab header="Godfather I">
                    The story begins as Don Vito Corleone, the head of a New York Mafia family, overseeshis daughter's wedding. His beloved son ichael has just come home from the war, 
                    but does not intend to become part of his father's business. Through Michael's life the nature of the family business becomes clear. The business of the family is 
                    just like the head of the family, kind and benevolent to those who give respect, but given to ruthless violence whenever anything stands against the good of the family.
                </p-accordionTab>
                <p-accordionTab header="Godfather II">
                    Francis Ford Coppola's legendary continuation and sequel to his landmark 1972 film, TheGodfather parallels the young Vito Corleone's rise with his son Michael's spiritual fall, 
                    deepening The Godfather's depiction of the dark side of the American dream. In the early 1900s, the child Vito flees his Sicilian village for America after the local Mafia kills 
                    his family. Vito struggles to make a living, legally or illegally, for his wife and growing brood in Little Italy.
                </p-accordionTab>
                <p-accordionTab header="Godfather III">
                    The Godfather Part III is set in 1979 and 1980. Michael has moved back to New York and taken great strides to remove the family from crime. He turns over his New York criminal 
                    interests to longtime enforcer Joey Zasa. He uses his wealth in an attempt to rehabilitate his reputation through numerous philanthropic acts, administered by a foundation named after his father. 
                    A decade earlier, he gave custody of his two children to Kay, who has since remarried.
                </p-accordionTab>
                <p-accordionTab header="Godfather IV" :disabled="true">
                </p-accordionTab>
            </p-accordion>

            <h3>Programmatic</h3>
            <div style="padding: .5em 0">
                 <p-button :icon="active1 ? 'pi pi-minus' : 'pi pi-plus'" label="Toggle 1st" @click="active1 = !active1" class="p-button-secondary" />
                 <p-button :icon="active2 ? 'pi pi-minus' : 'pi pi-plus'" label="Toggle 2nd" @click="active2 = !active2" class="p-button-secondary" style="margin-left: .5em" />
                 <p-button :icon="active3 ? 'pi pi-minus' : 'pi pi-plus'" label="Toggle 3rd" @click="active3 = !active3" class="p-button-secondary" style="margin-left: .5em" />
            </div>
    
            <p-accordion :multiple="true">
                <p-accordionTab header="Godfather I" :active="active1">
                    The story begins as Don Vito Corleone, the head of a New York Mafia family, overseeshis daughter's wedding. His beloved son ichael has just come home from the war, 
                    but does not intend to become part of his father's business. Through Michael's life the nature of the family business becomes clear. The business of the family is 
                    just like the head of the family, kind and benevolent to those who give respect, but given to ruthless violence whenever anything stands against the good of the family.
                </p-accordionTab>
                <p-accordionTab header="Godfather II" :active="active2">
                    Francis Ford Coppola's legendary continuation and sequel to his landmark 1972 film, TheGodfather parallels the young Vito Corleone's rise with his son Michael's spiritual fall, 
                    deepening The Godfather's depiction of the dark side of the American dream. In the early 1900s, the child Vito flees his Sicilian village for America after the local Mafia kills 
                    his family. Vito struggles to make a living, legally or illegally, for his wife and growing brood in Little Italy.
                </p-accordionTab>
                <p-accordionTab header="Godfather III" :active="active3">
                    The Godfather Part III is set in 1979 and 1980. Michael has moved back to New York and taken great strides to remove the family from crime. He turns over his New York criminal 
                    interests to longtime enforcer Joey Zasa. He uses his wealth in an attempt to rehabilitate his reputation through numerous philanthropic acts, administered by a foundation named after his father. 
                    A decade earlier, he gave custody of his two children to Kay, who has since remarried.
                </p-accordionTab>
            </p-accordion>

            <h3>Custom Headers</h3>
            <p-accordion class="accordion-custom">
                <p-accordionTab>
                    <template slot="header">
                        <i class="pi pi-calendar"></i>
                        <span>Godfather I</span>
                    </template>
                    The story begins as Don Vito Corleone, the head of a New York Mafia family, overseeshis daughter's wedding. His beloved son ichael has just come home from the war, 
                    but does not intend to become part of his father's business. Through Michael's life the nature of the family business becomes clear. The business of the family is 
                    just like the head of the family, kind and benevolent to those who give respect, but given to ruthless violence whenever anything stands against the good of the family.
                </p-accordionTab>
                <p-accordionTab>
                    <template slot="header">
                        <i class="pi pi-user"></i>
                        <span>Godfather II</span>
                    </template>
                    Francis Ford Coppola's legendary continuation and sequel to his landmark 1972 film, TheGodfather parallels the young Vito Corleone's rise with his son Michael's spiritual fall, 
                    deepening The Godfather's depiction of the dark side of the American dream. In the early 1900s, the child Vito flees his Sicilian village for America after the local Mafia kills 
                    his family. Vito struggles to make a living, legally or illegally, for his wife and growing brood in Little Italy.
                </p-accordionTab>
                <p-accordionTab>
                    <template slot="header">
                        <i class="pi pi-search"></i>
                        <span>Godfather III</span>
                        <i class="pi pi-cog"></i>
                    </template> 
                    The Godfather Part III is set in 1979 and 1980. Michael has moved back to New York and taken great strides to remove the family from crime. He turns over his New York criminal 
                    interests to longtime enforcer Joey Zasa. He uses his wealth in an attempt to rehabilitate his reputation through numerous philanthropic acts, administered by a foundation named after his father. 
                    A decade earlier, he gave custody of his two children to Kay, who has since remarried.
                </p-accordionTab>
            </p-accordion>

        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            active1: true,
            active2: false,
            active3: false
        }
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
</style>