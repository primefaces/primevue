<template>
    <div>
        <div class="content-section introduction">
            <div class="feature-intro">
                <h1>Skeleton</h1>
                <p>Skeleton is a placeholder to display instead of the actual content.</p>
            </div>
            <AppDemoActions />
        </div>

        <div class="content-section implementation">
            <div class="card">
                <div class="grid formgrid">
                    <div class="field col-12 md:col-6">
                        <h5>Rectangle</h5>
                        <Skeleton class="mb-2"></Skeleton>
                        <Skeleton width="10rem" class="mb-2"></Skeleton>
                        <Skeleton width="5rem" class="mb-2"></Skeleton>
                        <Skeleton height="2rem" class="mb-2"></Skeleton>
                        <Skeleton width="10rem" height="4rem"></Skeleton>
                    </div>
                    <div class="field col-12 md:col-6">
                        <h5>Rounded</h5>
                        <Skeleton class="mb-2" borderRadius="16px"></Skeleton>
                        <Skeleton width="10rem" class="mb-2" borderRadius="16px"></Skeleton>
                        <Skeleton width="5rem" borderRadius="16px" class="mb-2"></Skeleton>
                        <Skeleton height="2rem" class="mb-2" borderRadius="16px"></Skeleton>
                        <Skeleton width="10rem" height="4rem" borderRadius="16px"></Skeleton>
                    </div>
                    <div class="field col-12 md:col-6">
                        <h5 class="mt-3">Square</h5>
                        <div class="flex align-items-end">
                            <Skeleton size="2rem" class="mr-2"></Skeleton>
                            <Skeleton size="3rem" class="mr-2"></Skeleton>
                            <Skeleton size="4rem" class="mr-2"></Skeleton>
                            <Skeleton size="5rem"></Skeleton>
                        </div>
                    </div>
                    <div class="field col-12 md:col-6">
                        <h5 class="mt-3">Circle</h5>
                        <div class="flex align-items-end">
                            <Skeleton shape="circle" size="2rem" class="mr-2"></Skeleton>
                            <Skeleton shape="circle" size="3rem" class="mr-2"></Skeleton>
                            <Skeleton shape="circle" size="4rem" class="mr-2"></Skeleton>
                            <Skeleton shape="circle" size="5rem"></Skeleton>
                        </div>
                    </div>
                </div>
            </div>

            <div class="card">
                <div class="grid formgrid">
                    <div class="field col-12 md:col-6 md:pr-6 pr-0">
                        <h5>Card</h5>
                        <div class="custom-skeleton p-4">
                            <div class="flex mb-3">
                                <Skeleton shape="circle" size="4rem" class="mr-2"></Skeleton>
                                <div>
                                    <Skeleton width="10rem" class="mb-2"></Skeleton>
                                    <Skeleton width="5rem" class="mb-2"></Skeleton>
                                    <Skeleton height=".5rem"></Skeleton>
                                </div>
                            </div>
                            <Skeleton width="100%" height="150px"></Skeleton>
                            <div class="flex justify-content-center mt-3">
                                <Skeleton width="4rem" height="2rem"></Skeleton>
                                <Skeleton width="4rem" height="2rem"></Skeleton>
                            </div>
                        </div>
                    </div>

                    <div class="field col-12 md:col-6">
                        <h5>List</h5>
                        <div class="custom-skeleton p-4">
                            <ul class="m-0 p-0">
                                <li class="mb-3">
                                    <div class="flex">
                                        <Skeleton shape="circle" size="4rem" class="mr-2"></Skeleton>
                                        <div style="flex: 1">
                                            <Skeleton width="100%" class="mb-2"></Skeleton>
                                            <Skeleton width="75%"></Skeleton>
                                        </div>
                                    </div>
                                </li>
                                <li class="mb-3">
                                    <div class="flex">
                                        <Skeleton shape="circle" size="4rem" class="mr-2"></Skeleton>
                                        <div style="flex: 1">
                                            <Skeleton width="100%" class="mb-2"></Skeleton>
                                            <Skeleton width="75%"></Skeleton>
                                        </div>
                                    </div>
                                </li>
                                <li class="mb-3">
                                    <div class="flex">
                                        <Skeleton shape="circle" size="4rem" class="mr-2"></Skeleton>
                                        <div style="flex: 1">
                                            <Skeleton width="100%" class="mb-2"></Skeleton>
                                            <Skeleton width="75%"></Skeleton>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div class="flex">
                                        <Skeleton shape="circle" size="4rem" class="mr-2"></Skeleton>
                                        <div style="flex: 1">
                                            <Skeleton width="100%" class="mb-2"></Skeleton>
                                            <Skeleton width="75%"></Skeleton>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <h5>DataTable</h5>
                <DataTable :value="products" responsiveLayout="scroll">
                    <Column field="code" header="Code">
                        <template #body>
                            <Skeleton></Skeleton>
                        </template>
                    </Column>
                    <Column field="name" header="Name">
                        <template #body>
                            <Skeleton></Skeleton>
                        </template>
                    </Column>
                    <Column field="category" header="Category">
                        <template #body>
                            <Skeleton></Skeleton>
                        </template>
                    </Column>
                    <Column field="quantity" header="Quantity">
                        <template #body>
                            <Skeleton></Skeleton>
                        </template>
                    </Column>
                </DataTable>
            </div>

        </div>

        <SkeletonDoc />
    </div>
</template>

<script>
import SkeletonDoc from './SkeletonDoc';

export default {
    data() {
        return {
            products: new Array(4)
        }
    },
    components: {
        'SkeletonDoc': SkeletonDoc
    }
}
</script>

<style lang="scss" scoped>
.custom-skeleton {
    border: 1px solid var(--surface-border);
    border-radius: 4px;

    ul {
        list-style: none;
    }
}
</style>