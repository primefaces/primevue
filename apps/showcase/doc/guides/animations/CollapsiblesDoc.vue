<template>
    <DocSectionText v-bind="$attrs">
        <p>
            Collapsible components have a content that is toggleable including Accordion, Panel, Fieldset, Stepper and PanelMenu. The enter and leave animations are defined with the <i>.p-collapsible-enter-active</i> and
            <i>.p-collapsible-leave-active</i>
            classes.
        </p>
    </DocSectionText>
    <div class="card">
        <Accordion value="0">
            <AccordionPanel value="0">
                <AccordionHeader>Header I</AccordionHeader>
                <AccordionContent class="demo-accordion">
                    <p class="m-0">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                </AccordionContent>
            </AccordionPanel>
            <AccordionPanel value="1">
                <AccordionHeader>Header II</AccordionHeader>
                <AccordionContent class="demo-accordion">
                    <p class="m-0">
                        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim
                        ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Consectetur, adipisci velit, sed quia non numquam eius modi.
                    </p>
                </AccordionContent>
            </AccordionPanel>
            <AccordionPanel value="2">
                <AccordionHeader>Header III</AccordionHeader>
                <AccordionContent class="demo-accordion">
                    <p class="m-0">
                        At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa
                        qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus.
                    </p>
                </AccordionContent>
            </AccordionPanel>
        </Accordion>
    </div>
    <DocSectionCode :code="code" hideToggleCode hideStackBlitz format="css" />
</template>

<script>
export default {
    data() {
        return {
            code: {
                basic: `
.p-collapsible-enter-active {
    animation: demo-collapsible-expand 500ms cubic-bezier(0.65, 0, 0.35, 1);
}

.p-collapsible-leave-active {
    animation: demo-collapsible-collapse 500ms cubic-bezier(0.65, 0, 0.35, 1);
}

@keyframes demo-collapsible-expand {
    from {
        opacity: 0;
        grid-template-rows: 0fr;
        transform: scale(0.93);
    }
    to {
        opacity: 1;
        grid-template-rows: 1fr;
    }
}

@keyframes demo-collapsible-collapse {
    from {
        opacity: 1;
        grid-template-rows: 1fr;
    }
    to {
        opacity: 0;
        grid-template-rows: 0fr;
        transform: scale(0.93);
    }
}
`
            }
        };
    }
};
</script>

<style>
.demo-accordion.p-collapsible-enter-active {
    animation: demo-accordion-expand 500ms cubic-bezier(0.65, 0, 0.35, 1);
}

.demo-accordion.p-collapsible-leave-active {
    animation: demo-accordion-collapse 500ms cubic-bezier(0.65, 0, 0.35, 1);
}

@keyframes demo-accordion-expand {
    from {
        opacity: 0;
        grid-template-rows: 0fr;
        transform: scale(0.93);
    }
    to {
        opacity: 1;
        grid-template-rows: 1fr;
    }
}

@keyframes demo-accordion-collapse {
    from {
        opacity: 1;
        grid-template-rows: 1fr;
    }
    to {
        opacity: 0;
        grid-template-rows: 0fr;
        transform: scale(0.93);
    }
}
</style>
