<template>
    <div>
        <div class="content-section introduction">
            <div class="feature-intro">
                <h1>Splitter</h1>
                <p>Splitter is utilized to separate and resize panels.</p>
            </div>
        </div>

        <div class="content-section implementation">
            <div class="card">
                <h5>Horizontal</h5>
                <Splitter style="height: 300px" class="p-mb-5">
                    <SplitterPanel class="p-d-flex p-ai-center p-jc-center">
                        Panel 1
                    </SplitterPanel>
                    <SplitterPanel class="p-d-flex p-ai-center p-jc-center">
                        Panel 2
                    </SplitterPanel>
                </Splitter>

                <Splitter style="height: 300px">
                    <SplitterPanel class="p-d-flex p-ai-center p-jc-center">
                        Panel 1
                    </SplitterPanel>
                    <SplitterPanel class="p-d-flex p-ai-center p-jc-center">
                        Panel 2
                    </SplitterPanel>
                    <SplitterPanel class="p-d-flex p-ai-center p-jc-center">
                        Panel 3
                    </SplitterPanel>
                </Splitter>
            </div>

            <div class="card">
                <h5>Vertical</h5>
                <Splitter style="height: 300px" layout="vertical">
                    <SplitterPanel class="p-d-flex p-ai-center p-jc-center">
                        Panel 1
                    </SplitterPanel>
                    <SplitterPanel class="p-d-flex p-ai-center p-jc-center">
                        Panel 2
                    </SplitterPanel>
                </Splitter>
            </div>

            <div class="card">
                <h5>Nested</h5>
                <Splitter style="height: 300px">
                    <SplitterPanel class="p-d-flex p-ai-center p-jc-center" :size="20" :minSize="10">
                        Panel 1
                    </SplitterPanel>
                    <SplitterPanel :size="80">
                        <Splitter layout="vertical">
                            <SplitterPanel class="p-d-flex p-ai-center p-jc-center" :size="15">
                                Panel 2
                            </SplitterPanel>
                            <SplitterPanel :size="85">
                                <Splitter>
                                    <SplitterPanel class="p-d-flex p-ai-center p-jc-center" :size="20">
                                        Panel 3
                                    </SplitterPanel>
                                    <SplitterPanel class="p-d-flex p-ai-center p-jc-center" :size="80">
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