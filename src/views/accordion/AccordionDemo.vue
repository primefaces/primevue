<template>
    <div>
        <div class="content-section introduction">
            <div class="feature-intro">
                <h1>Accordion</h1>
                <p>Accordion groups a collection of contents in tabs.</p>
            </div>
        </div>

        <div class="content-section implementation">
            <h5>Default</h5>
            <Accordion>
                <AccordionTab header="Header I" :active="true">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                        ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </AccordionTab>
                <AccordionTab header="Header II">
                    <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi
                        architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione
                        voluptatem sequi nesciunt. Consectetur, adipisci velit, sed quia non numquam eius modi.</p>
                </AccordionTab>
                <AccordionTab header="Header III">
                    <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati
                        cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio.
                        Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus.</p>
                </AccordionTab>
            </Accordion>

            <h5>Multiple</h5>
            <Accordion :multiple="true">
                <AccordionTab header="Header I" :active="true">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                        ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </AccordionTab>
                <AccordionTab header="Header II">
                    <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi
                        architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione
                        voluptatem sequi nesciunt. Consectetur, adipisci velit, sed quia non numquam eius modi.</p>
                </AccordionTab>
                <AccordionTab header="Header III">
                    <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati
                        cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio.
                        Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus.</p>
                </AccordionTab>
                <AccordionTab header="Header IV" :disabled="true">
                </AccordionTab>
            </Accordion>

            <h5>Programmatic</h5>
            <div style="padding: .5em 0 1em 0">
                <Button :icon="active1 ? 'pi pi-minus' : 'pi pi-plus'" label="Toggle 1st" @click="active1 = !active1" class="p-button-text" />
                <Button :icon="active2 ? 'pi pi-minus' : 'pi pi-plus'" label="Toggle 2nd" @click="active2 = !active2" class="p-button-text" style="margin-left: .5em" />
                <Button :icon="active3 ? 'pi pi-minus' : 'pi pi-plus'" label="Toggle 3rd" @click="active3 = !active3" class="p-button-text" style="margin-left: .5em" />
            </div>

            <Accordion :multiple="true">
                <AccordionTab header="Header I" :active="active1">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                        ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </AccordionTab>
                <AccordionTab header="Header II" :active="active2">
                    <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi
                        architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione
                        voluptatem sequi nesciunt. Consectetur, adipisci velit, sed quia non numquam eius modi.</p>
                </AccordionTab>
                <AccordionTab header="Header III" :active="active3">
                    <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati
                        cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio.
                        Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus.</p>
                </AccordionTab>
            </Accordion>

            <h5>Custom Headers</h5>
            <Accordion class="accordion-custom">
                <AccordionTab :active="true">
                    <template slot="header">
                        <i class="pi pi-calendar"></i>
                        <span>Header I</span>
                    </template>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                        ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </AccordionTab>
                <AccordionTab>
                    <template slot="header">
                        <i class="pi pi-user"></i>
                        <span>Header II</span>
                    </template>
                    <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi
                        architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione
                        voluptatem sequi nesciunt. Consectetur, adipisci velit, sed quia non numquam eius modi.</p>
                </AccordionTab>
                <AccordionTab>
                    <template slot="header">
                        <i class="pi pi-search"></i>
                        <span>Header III</span>
                        <i class="pi pi-cog"></i>
                    </template>
                    <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati
                        cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio.
                        Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus.</p>
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
        margin: 0 .5rem;
    }
}

.p-accordion p {
    line-height: 1.5;
    margin: 0;
}
</style>