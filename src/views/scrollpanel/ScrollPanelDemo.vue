<template>
    <div>
        <div class="content-section introduction">
            <div class="feature-intro">
                <h1>ScrollPanel</h1>
                <p>ScrollPanel is a cross browser, lightweight and themable alternative to native browser scrollbar.</p>
            </div>
            <AppDemoActions />
        </div>

        <div class="content-section implementation">
            <div class="card">
                <div class="grid">
                    <div class="col-12 md:col-4 p-5">
                        <ScrollPanel style="width: 100%; height: 200px">
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                Vitae et leo duis ut diam.
                                Ultricies mi quis hendrerit dolor magna eget est lorem. Amet consectetur adipiscing elit ut.
                                Nam libero justo laoreet sit amet. Pharetra massa massa ultricies mi quis hendrerit dolor magna.
                                Est ultricies integer quis auctor elit sed vulputate. Consequat ac felis donec et. Tellus orci ac auctor augue mauris.
                                Semper feugiat nibh sed pulvinar proin gravida hendrerit lectus a. Tincidunt arcu non sodales neque sodales.
                                Metus aliquam eleifend mi in nulla posuere sollicitudin aliquam ultrices. Sodales ut etiam sit amet nisl purus.
                                Cursus sit amet dictum sit amet. Tristique senectus et netus et malesuada fames ac turpis egestas.
                                Et tortor consequat id porta nibh venenatis cras sed. Diam maecenas ultricies mi eget mauris.
                                Eget egestas purus viverra accumsan in nisl nisi. Suscipit adipiscing bibendum est ultricies integer.
                                Mattis aliquam faucibus purus in massa tempor nec.
                            </p>
                        </ScrollPanel>
                    </div>
                    <div class="col-12 md:col-4 p-5">
                        <ScrollPanel style="width: 100%; height: 200px" class="custombar1">
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                Vitae et leo duis ut diam.
                                Ultricies mi quis hendrerit dolor magna eget est lorem. Amet consectetur adipiscing elit ut.
                                Nam libero justo laoreet sit amet. Pharetra massa massa ultricies mi quis hendrerit dolor magna.
                                Est ultricies integer quis auctor elit sed vulputate. Consequat ac felis donec et. Tellus orci ac auctor augue mauris.
                                Semper feugiat nibh sed pulvinar proin gravida hendrerit lectus a. Tincidunt arcu non sodales neque sodales.
                                Metus aliquam eleifend mi in nulla posuere sollicitudin aliquam ultrices. Sodales ut etiam sit amet nisl purus.
                                Cursus sit amet dictum sit amet. Tristique senectus et netus et malesuada fames ac turpis egestas.
                                Et tortor consequat id porta nibh venenatis cras sed. Diam maecenas ultricies mi eget mauris.
                                Eget egestas purus viverra accumsan in nisl nisi. Suscipit adipiscing bibendum est ultricies integer.
                                Mattis aliquam faucibus purus in massa tempor nec.
                            </p>
                        </ScrollPanel>
                    </div>
                    <div class="col-12 md:col-4 p-5">
                        <ScrollPanel style="width: 100%; height: 200px" class="custombar2">
                            <p style="width: 600px">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                Vitae et leo duis ut diam.
                                Ultricies mi quis hendrerit dolor magna eget est lorem. Amet consectetur adipiscing elit ut.
                                Nam libero justo laoreet sit amet. Pharetra massa massa ultricies mi quis hendrerit dolor magna.
                                Est ultricies integer quis auctor elit sed vulputate. Consequat ac felis donec et. Tellus orci ac auctor augue mauris.
                                Semper feugiat nibh sed pulvinar proin gravida hendrerit lectus a. Tincidunt arcu non sodales neque sodales.
                                Metus aliquam eleifend mi in nulla posuere sollicitudin aliquam ultrices. Sodales ut etiam sit amet nisl purus.
                                Cursus sit amet dictum sit amet. Tristique senectus et netus et malesuada fames ac turpis egestas.
                                Et tortor consequat id porta nibh venenatis cras sed. Diam maecenas ultricies mi eget mauris.
                                Eget egestas purus viverra accumsan in nisl nisi. Suscipit adipiscing bibendum est ultricies integer.
                                Mattis aliquam faucibus purus in massa tempor nec.
                            </p>
                        </ScrollPanel>
                    </div>
                </div>
            </div>
        </div>

        <ScrollPanelDoc />
    </div>
</template>
<script>
import ScrollPanelDoc from './ScrollPanelDoc';

export default {
    components: {
        'ScrollPanelDoc': ScrollPanelDoc
    }
}
</script>

<style lang="scss" scoped>
::v-deep(.p-scrollpanel) {
    p {
        padding: .5rem;
        line-height: 1.5;
        margin: 0;
    }

    &.custombar1 {
        .p-scrollpanel-wrapper {
            border-right: 9px solid var(--surface-ground);
        }

        .p-scrollpanel-bar {
            background-color: var(--primary-color);
            opacity: 1;
            transition: background-color .2s;

            &:hover {
                background-color: #007ad9;
            }
        }
    }

    &.custombar2 {
        .p-scrollpanel-wrapper {
            border-right: 9px solid var(--surface-ground);
            border-bottom: 9px solid var(--surface-ground);
        }

        .p-scrollpanel-bar {
            background-color: var(--surface-border);
            border-radius: 0;
            opacity: 1;
            transition: background-color .2s;
        }
    }  
}
</style>