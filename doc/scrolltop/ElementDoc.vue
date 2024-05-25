<template>
    <DocSectionText v-bind="$attrs">
        <p>Setting the <i>target</i> property to <i>parent</i> binds ScrollTop to its parent element that has scrolling content.</p>
    </DocSectionText>
    <div class="card flex justify-center">
        <ScrollPanel style="width: 250px; height: 200px">
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae et leo duis ut diam. Ultricies mi quis hendrerit dolor magna eget est lorem. Amet consectetur adipiscing
                elit ut. Nam libero justo laoreet sit amet. Pharetra massa massa ultricies mi quis hendrerit dolor magna. Est ultricies integer quis auctor elit sed vulputate. Consequat ac felis donec et. Tellus orci ac auctor augue mauris. Semper
                feugiat nibh sed pulvinar proin gravida hendrerit lectus a. Tincidunt arcu non sodales neque sodales. Metus aliquam eleifend mi in nulla posuere sollicitudin aliquam ultrices. Sodales ut etiam sit amet nisl purus. Cursus sit amet
                dictum sit amet. Tristique senectus et netus et malesuada fames ac turpis egestas. Et tortor consequat id porta nibh venenatis cras sed. Diam maecenas ultricies mi eget mauris. Eget egestas purus viverra accumsan in nisl nisi.
                Suscipit adipiscing bibendum est ultricies integer. Mattis aliquam faucibus purus in massa tempor nec.
            </p>
            <ScrollTop target="parent" :threshold="100" icon="pi pi-arrow-up" :buttonProps="{ severity: 'contrast', raised: true, rounded: true }" />
        </ScrollPanel>
    </div>
    <DocSectionCode :code="code" />
</template>

<script>
export default {
    data() {
        return {
            code: {
                basic: `
<ScrollPanel style="width: 250px; height: 200px">
    <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae et leo duis ut diam. Ultricies mi quis hendrerit dolor magna eget est lorem. Amet consectetur adipiscing
        elit ut. Nam libero justo laoreet sit amet. Pharetra massa massa ultricies mi quis hendrerit dolor magna. Est ultricies integer quis auctor elit sed vulputate. Consequat ac felis donec et. Tellus orci ac auctor augue mauris. Semper
        feugiat nibh sed pulvinar proin gravida hendrerit lectus a. Tincidunt arcu non sodales neque sodales. Metus aliquam eleifend mi in nulla posuere sollicitudin aliquam ultrices. Sodales ut etiam sit amet nisl purus. Cursus sit amet
        dictum sit amet. Tristique senectus et netus et malesuada fames ac turpis egestas. Et tortor consequat id porta nibh venenatis cras sed. Diam maecenas ultricies mi eget mauris. Eget egestas purus viverra accumsan in nisl nisi.
        Suscipit adipiscing bibendum est ultricies integer. Mattis aliquam faucibus purus in massa tempor nec.
    </p>
    <ScrollTop target="parent" :threshold="100" icon="pi pi-arrow-up" :buttonProps="{ severity: 'contrast', raised: true, rounded: true }" />
</ScrollPanel>
`,
                options: `
<template>
    <div class="card flex justify-center">
        <ScrollPanel style="width: 250px; height: 200px">
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae et leo duis ut diam. Ultricies mi quis hendrerit dolor magna eget est lorem. Amet consectetur adipiscing
                elit ut. Nam libero justo laoreet sit amet. Pharetra massa massa ultricies mi quis hendrerit dolor magna. Est ultricies integer quis auctor elit sed vulputate. Consequat ac felis donec et. Tellus orci ac auctor augue mauris. Semper
                feugiat nibh sed pulvinar proin gravida hendrerit lectus a. Tincidunt arcu non sodales neque sodales. Metus aliquam eleifend mi in nulla posuere sollicitudin aliquam ultrices. Sodales ut etiam sit amet nisl purus. Cursus sit amet
                dictum sit amet. Tristique senectus et netus et malesuada fames ac turpis egestas. Et tortor consequat id porta nibh venenatis cras sed. Diam maecenas ultricies mi eget mauris. Eget egestas purus viverra accumsan in nisl nisi.
                Suscipit adipiscing bibendum est ultricies integer. Mattis aliquam faucibus purus in massa tempor nec.
            </p>
            <ScrollTop target="parent" :threshold="100" icon="pi pi-arrow-up" :buttonProps="{ severity: 'contrast', raised: true, rounded: true }" />
        </ScrollPanel>
    </div>
</template>
`,
                composition: `
<template>
    <div class="card flex justify-center">
        <ScrollPanel style="width: 250px; height: 200px">
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae et leo duis ut diam. Ultricies mi quis hendrerit dolor magna eget est lorem. Amet consectetur adipiscing
                elit ut. Nam libero justo laoreet sit amet. Pharetra massa massa ultricies mi quis hendrerit dolor magna. Est ultricies integer quis auctor elit sed vulputate. Consequat ac felis donec et. Tellus orci ac auctor augue mauris. Semper
                feugiat nibh sed pulvinar proin gravida hendrerit lectus a. Tincidunt arcu non sodales neque sodales. Metus aliquam eleifend mi in nulla posuere sollicitudin aliquam ultrices. Sodales ut etiam sit amet nisl purus. Cursus sit amet
                dictum sit amet. Tristique senectus et netus et malesuada fames ac turpis egestas. Et tortor consequat id porta nibh venenatis cras sed. Diam maecenas ultricies mi eget mauris. Eget egestas purus viverra accumsan in nisl nisi.
                Suscipit adipiscing bibendum est ultricies integer. Mattis aliquam faucibus purus in massa tempor nec.
            </p>
            <ScrollTop target="parent" :threshold="100" icon="pi pi-arrow-up" :buttonProps="{ severity: 'contrast', raised: true, rounded: true }" />
        </ScrollPanel>
    </div>
</template>
`
            }
        };
    }
};
</script>
