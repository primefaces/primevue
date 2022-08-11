<template>
    <div>
        <div class="content-section introduction">
            <div class="feature-intro">
                <h1>Timeline</h1>
                <p>Timeline visualizes a series of chained events.</p>
            </div>
            <AppDemoActions />
        </div>

        <div class="content-section implementation">
            <div class="card">
                <h5>Left Align</h5>
                <Timeline :value="events1">
                    <template #content="slotProps">
                        {{slotProps.item.status}}
                    </template>
                </Timeline>
            </div>

            <div class="card">
                <h5>Right Align</h5>
                <Timeline :value="events1" align="right">
                    <template #content="slotProps">
                        {{slotProps.item.status}}
                    </template>
                </Timeline>
            </div>

            <div class="card">
                <h5>Alternate Align</h5>
                <Timeline :value="events1" align="alternate">
                    <template #content="slotProps">
                        {{slotProps.item.status}}
                    </template>
                </Timeline>
            </div>

            <div class="card">
                <h5>Opposite Content</h5>
                <Timeline :value="events1">
                    <template #opposite="slotProps">
                        <small class="p-text-secondary">{{slotProps.item.date}}</small>
                    </template>
                    <template #content="slotProps">
                        {{slotProps.item.status}}
                    </template>
                </Timeline>
            </div>

            <div class="card">
                <h5>Customized</h5>
                <Timeline :value="events1" align="alternate" class="customized-timeline">
                    <template #marker="slotProps">
                        <span class="custom-marker shadow-2" :style="{backgroundColor: slotProps.item.color}">
                            <i :class="slotProps.item.icon"></i>
                        </span>
                    </template>
                    <template #content="slotProps">
                        <Card>
                            <template #title>
                                {{slotProps.item.status}}
                            </template>
                            <template #subtitle>
                                {{slotProps.item.date}}
                            </template>
                            <template #content>
                                <img v-if="slotProps.item.image" :src="'demo/images/product/' + slotProps.item.image" :alt="slotProps.item.name" width="200" class="shadow-2" />
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt
                                    quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque quas!</p>
                                <Button label="Read more" class="p-button-text"></Button>
                            </template>
                        </Card>
                    </template>
                </Timeline>
            </div>

            <div class="card">
                <h5>Horizontal</h5>
                <h6>Top Align</h6>
                <Timeline :value="events2" layout="horizontal" align="top">
                    <template #content="slotProps">
                        {{slotProps.item}}
                    </template>
                </Timeline>

                <h6>Bottom Align</h6>
                <Timeline :value="events2" layout="horizontal" align="bottom">
                    <template #content="slotProps">
                        {{slotProps.item}}
                    </template>
                </Timeline>

                <h6>Alternate Align</h6>
                <Timeline :value="events2" layout="horizontal" align="alternate">
                    <template #opposite>
                        &nbsp;
                    </template>
                    <template #content="slotProps">
                        {{slotProps.item}}
                    </template>
                </Timeline>
            </div>
        </div>

        <TimelineDoc />
    </div>
</template>

<script>
import TimelineDoc from './TimelineDoc';

export default {
    data() {
        return {
            events1: [
                {status: 'Ordered', date: '15/10/2020 10:30', icon: 'pi pi-shopping-cart', color: '#9C27B0', image: 'game-controller.jpg'},
                {status: 'Processing', date: '15/10/2020 14:00', icon: 'pi pi-cog', color: '#673AB7'},
                {status: 'Shipped', date: '15/10/2020 16:15', icon: 'pi pi-shopping-cart', color: '#FF9800'},
                {status: 'Delivered', date: '16/10/2020 10:00', icon: 'pi pi-check', color: '#607D8B'}
            ],
            events2: [
                "2020", "2021", "2022", "2023"
            ]
        }
    },
    components: {
        'TimelineDoc': TimelineDoc
    }
}
</script>

<style lang="scss" scoped>
.custom-marker {
    display: flex;
    width: 2rem;
    height: 2rem;
    align-items: center;
    justify-content: center;
    color: #ffffff;
    border-radius: 50%;
    z-index: 1;
}

::v-deep(.p-timeline-event-content),
::v-deep(.p-timeline-event-opposite) {
    line-height: 1;
}

@media screen and (max-width: 960px) {
    ::v-deep(.customized-timeline) {
            .p-timeline-event:nth-child(even) {
                flex-direction: row !important;
                
                .p-timeline-event-content {
                    text-align: left !important;
                }
            }

            .p-timeline-event-opposite {
                flex: 0;
            }

            .p-card {
                margin-top: 1rem;
            }
        }
}
</style>