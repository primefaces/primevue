<template>
    <DocSectionText v-bind="$attrs">
        <p>Setting the <i>target</i> property to <i>parent</i> binds ScrollTop to its parent element that has scrolling content.</p>
    </DocSectionText>
    <div class="card">
        <ScrollPanel style="width: 250px; height: 200px">
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae et leo duis ut diam. Ultricies mi quis hendrerit dolor magna eget est lorem. Amet consectetur adipiscing
                elit ut. Nam libero justo laoreet sit amet. Pharetra massa massa ultricies mi quis hendrerit dolor magna. Est ultricies integer quis auctor elit sed vulputate. Consequat ac felis donec et. Tellus orci ac auctor augue mauris. Semper
                feugiat nibh sed pulvinar proin gravida hendrerit lectus a. Tincidunt arcu non sodales neque sodales. Metus aliquam eleifend mi in nulla posuere sollicitudin aliquam ultrices. Sodales ut etiam sit amet nisl purus. Cursus sit amet
                dictum sit amet. Tristique senectus et netus et malesuada fames ac turpis egestas. Et tortor consequat id porta nibh venenatis cras sed. Diam maecenas ultricies mi eget mauris. Eget egestas purus viverra accumsan in nisl nisi.
                Suscipit adipiscing bibendum est ultricies integer. Mattis aliquam faucibus purus in massa tempor nec.
            </p>
            <ScrollTop target="parent" :threshold="100" class="custom-scrolltop" icon="pi pi-arrow-up" />
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
<ScrollTop target="parent" :threshold="100" class="custom-scrolltop" icon="pi pi-arrow-up" />`,
                options: `
<template>
    <div class="card">
        <ScrollPanel style="width: 250px; height: 200px">
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae et leo duis ut diam. Ultricies mi quis hendrerit dolor magna eget est lorem. Amet consectetur adipiscing
                elit ut. Nam libero justo laoreet sit amet. Pharetra massa massa ultricies mi quis hendrerit dolor magna. Est ultricies integer quis auctor elit sed vulputate. Consequat ac felis donec et. Tellus orci ac auctor augue mauris. Semper
                feugiat nibh sed pulvinar proin gravida hendrerit lectus a. Tincidunt arcu non sodales neque sodales. Metus aliquam eleifend mi in nulla posuere sollicitudin aliquam ultrices. Sodales ut etiam sit amet nisl purus. Cursus sit amet
                dictum sit amet. Tristique senectus et netus et malesuada fames ac turpis egestas. Et tortor consequat id porta nibh venenatis cras sed. Diam maecenas ultricies mi eget mauris. Eget egestas purus viverra accumsan in nisl nisi.
                Suscipit adipiscing bibendum est ultricies integer. Mattis aliquam faucibus purus in massa tempor nec.
            </p>
            <ScrollTop target="parent" :threshold="100" class="custom-scrolltop" icon="pi pi-arrow-up" />
        </ScrollPanel>
    </div>
</template>

<script>
<\/script>

<style scoped>
::v-deep(.custom-scrolltop) {
    width: 2rem;
    height: 2rem;
    border-radius: 4px;
    background-color: var(--primary-color);
}

::v-deep(.custom-scrolltop:hover) {
    background-color: var(--primary-color);
}

::v-deep(.custom-scrolltop .p-scrolltop-icon) {
    font-size: 1rem;
    color: var(--primary-color-text);
}
</style>`,
                composition: `
<template>
    <div class="card">
        <ScrollPanel style="width: 250px; height: 200px">
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae et leo duis ut diam. Ultricies mi quis hendrerit dolor magna eget est lorem. Amet consectetur adipiscing
                elit ut. Nam libero justo laoreet sit amet. Pharetra massa massa ultricies mi quis hendrerit dolor magna. Est ultricies integer quis auctor elit sed vulputate. Consequat ac felis donec et. Tellus orci ac auctor augue mauris. Semper
                feugiat nibh sed pulvinar proin gravida hendrerit lectus a. Tincidunt arcu non sodales neque sodales. Metus aliquam eleifend mi in nulla posuere sollicitudin aliquam ultrices. Sodales ut etiam sit amet nisl purus. Cursus sit amet
                dictum sit amet. Tristique senectus et netus et malesuada fames ac turpis egestas. Et tortor consequat id porta nibh venenatis cras sed. Diam maecenas ultricies mi eget mauris. Eget egestas purus viverra accumsan in nisl nisi.
                Suscipit adipiscing bibendum est ultricies integer. Mattis aliquam faucibus purus in massa tempor nec.
            </p>
            <ScrollTop target="parent" :threshold="100" class="custom-scrolltop" icon="pi pi-arrow-up" />
        </ScrollPanel>
    </div>
</template>

<script setup>
<\/script>

<style scoped>
::v-deep(.custom-scrolltop) {
    width: 2rem;
    height: 2rem;
    border-radius: 4px;
    background-color: var(--primary-color);
}

::v-deep(.custom-scrolltop:hover) {
    background-color: var(--primary-color);
}

::v-deep(.custom-scrolltop .p-scrolltop-icon) {
    font-size: 1rem;
    color: var(--primary-color-text);
}
</style>`
            }
        };
    }
};
</script>

<style scoped>
::v-deep(.custom-scrolltop) {
    width: 2rem;
    height: 2rem;
    border-radius: 4px;
    background-color: var(--primary-color);
}

::v-deep(.custom-scrolltop:hover) {
    background-color: var(--primary-color);
}

::v-deep(.custom-scrolltop .p-scrolltop-icon) {
    font-size: 1rem;
    color: var(--primary-color-text);
}
</style>
