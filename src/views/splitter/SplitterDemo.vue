<template>
    <div>
        <div class="content-section introduction">
            <div class="feature-intro">
                <h1>Splitter</h1>
                <p>Splitter is utilized to separate and resize panels.</p>
            </div>
            <AppDemoActions />
        </div>

        <div class="content-section implementation">
            <div class="card">
                <h5>Horizontal</h5>
                <Splitter style="height: 300px" class="mb-5">
                    <SplitterPanel class="flex align-items-center justify-content-center">
                        Panel 1
                    </SplitterPanel>
                    <SplitterPanel class="flex align-items-center justify-content-center">
                        Panel 2
                    </SplitterPanel>
                </Splitter>
            </div>

            <div class="card">
                <h5>Vertical</h5>
                <Splitter style="height: 300px" layout="vertical">
                    <SplitterPanel class="flex align-items-center justify-content-center">
                        Panel 1
                    </SplitterPanel>
                    <SplitterPanel class="flex align-items-center justify-content-center">
                        Panel 2
                    </SplitterPanel>
                </Splitter>
            </div>

            <div class="card">
                <h5>Nested</h5>
                <Splitter style="height: 300px">
                    <SplitterPanel class="flex align-items-center justify-content-center" :size="20" :minSize="10">
                        Panel 1
                    </SplitterPanel>
                    <SplitterPanel :size="80">
                        <Splitter layout="vertical">
                            <SplitterPanel class="flex align-items-center justify-content-center" :size="15">
                                Panel 2
                            </SplitterPanel>
                            <SplitterPanel :size="85">
                                <Splitter>
                                    <SplitterPanel class="flex align-items-center justify-content-center" :size="20">
                                        Panel 3
                                    </SplitterPanel>
                                    <SplitterPanel class="flex align-items-center justify-content-center" :size="80">
                                        Panel 4
                                    </SplitterPanel>
                                </Splitter>
                            </SplitterPanel>
                        </Splitter>
                    </SplitterPanel>
                </Splitter>
            </div>
        </div>

        <SplitterDoc />
    </div>
</template>

<script>
import SplitterDoc from './SplitterDoc';

export default {
    components: {
        'SplitterDoc': SplitterDoc
    }
}
</script>