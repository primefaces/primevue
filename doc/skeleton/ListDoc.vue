<template>
    <DocSectionText v-bind="$attrs">
        <p>Sample List implementation using different Skeleton components and PrimeFlex CSS utilities.</p>
    </DocSectionText>
    <div class="card">
        <div class="border-round border-1 surface-border p-4 surface-card">
            <ul class="m-0 p-0 list-none">
                <li class="mb-3">
                    <div class="flex">
                        <Skeleton shape="circle" size="4rem" class="mr-2"></Skeleton>
                        <div class="align-self-center" style="flex: 1">
                            <Skeleton width="100%" class="mb-2"></Skeleton>
                            <Skeleton width="75%"></Skeleton>
                        </div>
                    </div>
                </li>
                <li class="mb-3">
                    <div class="flex">
                        <Skeleton shape="circle" size="4rem" class="mr-2"></Skeleton>
                        <div class="align-self-center" style="flex: 1">
                            <Skeleton width="100%" class="mb-2"></Skeleton>
                            <Skeleton width="75%"></Skeleton>
                        </div>
                    </div>
                </li>
                <li class="mb-3">
                    <div class="flex">
                        <Skeleton shape="circle" size="4rem" class="mr-2"></Skeleton>
                        <div class="align-self-center" style="flex: 1">
                            <Skeleton width="100%" class="mb-2"></Skeleton>
                            <Skeleton width="75%"></Skeleton>
                        </div>
                    </div>
                </li>
                <li>
                    <div class="flex">
                        <Skeleton shape="circle" size="4rem" class="mr-2"></Skeleton>
                        <div class="align-self-center" style="flex: 1">
                            <Skeleton width="100%" class="mb-2"></Skeleton>
                            <Skeleton width="75%"></Skeleton>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    </div>
    <DocSectionCode :code="code" />
</template>

<script>
export default {
    data() {
        return {
            code: {
                basic: `
<div class="border-round border-1 surface-border p-4 surface-card">
    <ul class="m-0 p-0 list-none">
        <li class="mb-3">
            <div class="flex">
                <Skeleton shape="circle" size="4rem" class="mr-2"></Skeleton>
                <div class="align-self-center" style="flex: 1">
                    <Skeleton width="100%" class="mb-2"></Skeleton>
                    <Skeleton width="75%"></Skeleton>
                </div>
            </div>
        </li>
        <li class="mb-3">
            <div class="flex">
                <Skeleton shape="circle" size="4rem" class="mr-2"></Skeleton>
                <div class="align-self-center" style="flex: 1">
                    <Skeleton width="100%" class="mb-2"></Skeleton>
                    <Skeleton width="75%"></Skeleton>
                </div>
            </div>
        </li>
        <li class="mb-3">
            <div class="flex">
                <Skeleton shape="circle" size="4rem" class="mr-2"></Skeleton>
                <div class="align-self-center" style="flex: 1">
                    <Skeleton width="100%" class="mb-2"></Skeleton>
                    <Skeleton width="75%"></Skeleton>
                </div>
            </div>
        </li>
        <li>
            <div class="flex">
                <Skeleton shape="circle" size="4rem" class="mr-2"></Skeleton>
                <div class="align-self-center" style="flex: 1">
                    <Skeleton width="100%" class="mb-2"></Skeleton>
                    <Skeleton width="75%"></Skeleton>
                </div>
            </div>
        </li>
    </ul>
</div>
`,
                options: `
<template>
    <div class="border-round border-1 surface-border p-4 surface-card">
        <ul class="m-0 p-0 list-none">
            <li class="mb-3">
                <div class="flex">
                    <Skeleton shape="circle" size="4rem" class="mr-2"></Skeleton>
                    <div class="align-self-center" style="flex: 1">
                        <Skeleton width="100%" class="mb-2"></Skeleton>
                        <Skeleton width="75%"></Skeleton>
                    </div>
                </div>
            </li>
            <li class="mb-3">
                <div class="flex">
                    <Skeleton shape="circle" size="4rem" class="mr-2"></Skeleton>
                    <div class="align-self-center" style="flex: 1">
                        <Skeleton width="100%" class="mb-2"></Skeleton>
                        <Skeleton width="75%"></Skeleton>
                    </div>
                </div>
            </li>
            <li class="mb-3">
                <div class="flex">
                    <Skeleton shape="circle" size="4rem" class="mr-2"></Skeleton>
                    <div class="align-self-center" style="flex: 1">
                        <Skeleton width="100%" class="mb-2"></Skeleton>
                        <Skeleton width="75%"></Skeleton>
                    </div>
                </div>
            </li>
            <li>
                <div class="flex">
                    <Skeleton shape="circle" size="4rem" class="mr-2"></Skeleton>
                    <div class="align-self-center" style="flex: 1">
                        <Skeleton width="100%" class="mb-2"></Skeleton>
                        <Skeleton width="75%"></Skeleton>
                    </div>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
<\/script>
`,
                composition: `
<template>
    <div class="border-round border-1 surface-border p-4 surface-card">
        <ul class="m-0 p-0 list-none">
            <li class="mb-3">
                <div class="flex">
                    <Skeleton shape="circle" size="4rem" class="mr-2"></Skeleton>
                    <div class="align-self-center" style="flex: 1">
                        <Skeleton width="100%" class="mb-2"></Skeleton>
                        <Skeleton width="75%"></Skeleton>
                    </div>
                </div>
            </li>
            <li class="mb-3">
                <div class="flex">
                    <Skeleton shape="circle" size="4rem" class="mr-2"></Skeleton>
                    <div class="align-self-center" style="flex: 1">
                        <Skeleton width="100%" class="mb-2"></Skeleton>
                        <Skeleton width="75%"></Skeleton>
                    </div>
                </div>
            </li>
            <li class="mb-3">
                <div class="flex">
                    <Skeleton shape="circle" size="4rem" class="mr-2"></Skeleton>
                    <div class="align-self-center" style="flex: 1">
                        <Skeleton width="100%" class="mb-2"></Skeleton>
                        <Skeleton width="75%"></Skeleton>
                    </div>
                </div>
            </li>
            <li>
                <div class="flex">
                    <Skeleton shape="circle" size="4rem" class="mr-2"></Skeleton>
                    <div class="align-self-center" style="flex: 1">
                        <Skeleton width="100%" class="mb-2"></Skeleton>
                        <Skeleton width="75%"></Skeleton>
                    </div>
                </div>
            </li>
        </ul>
    </div>
</template>

<script setup>
<\/script>
`
            }
        };
    }
};
</script>
