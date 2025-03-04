<template>
    <DocSectionText v-bind="$attrs">
        <p>Various shapes and sizes can be created using styling properties like <i>shape</i>, <i>width</i>, <i>height</i>, <i>borderRadius</i> and <i>class</i>.</p>
    </DocSectionText>
    <div class="card">
        <div class="flex flex-wrap">
            <div class="w-full xl:w-6/12 p-4">
                <h5>Rectangle</h5>
                <Skeleton class="mb-2"></Skeleton>
                <Skeleton width="10rem" class="mb-2"></Skeleton>
                <Skeleton width="5rem" class="mb-2"></Skeleton>
                <Skeleton height="2rem" class="mb-2"></Skeleton>
                <Skeleton width="10rem" height="4rem"></Skeleton>
            </div>
            <div class="w-full xl:w-6/12 p-4">
                <h5>Rounded</h5>
                <Skeleton class="mb-2" borderRadius="16px"></Skeleton>
                <Skeleton width="10rem" class="mb-2" borderRadius="16px"></Skeleton>
                <Skeleton width="5rem" borderRadius="16px" class="mb-2"></Skeleton>
                <Skeleton height="2rem" class="mb-2" borderRadius="16px"></Skeleton>
                <Skeleton width="10rem" height="4rem" borderRadius="16px"></Skeleton>
            </div>
            <div class="w-full xl:w-6/12 p-4">
                <h5 class="mt-4">Square</h5>
                <div class="flex items-end">
                    <Skeleton size="2rem" class="mr-2"></Skeleton>
                    <Skeleton size="3rem" class="mr-2"></Skeleton>
                    <Skeleton size="4rem" class="mr-2"></Skeleton>
                    <Skeleton size="5rem"></Skeleton>
                </div>
            </div>
            <div class="w-full xl:w-6/12 p-4">
                <h5 class="mt-4">Circle</h5>
                <div class="flex items-end">
                    <Skeleton shape="circle" size="2rem" class="mr-2"></Skeleton>
                    <Skeleton shape="circle" size="3rem" class="mr-2"></Skeleton>
                    <Skeleton shape="circle" size="4rem" class="mr-2"></Skeleton>
                    <Skeleton shape="circle" size="5rem"></Skeleton>
                </div>
            </div>
        </div>
    </div>
    <DocSectionCode :code="code" />
</template>

<script setup>
import Skeleton from '@/volt/skeleton';
import { ref } from 'vue';

const code = ref(`
<template>
    <div class="card">
        <div class="flex flex-wrap">
            <div class="w-full xl:w-6/12 p-4">
                <h5>Rectangle</h5>
                <Skeleton class="mb-2"></Skeleton>
                <Skeleton width="10rem" class="mb-2"></Skeleton>
                <Skeleton width="5rem" class="mb-2"></Skeleton>
                <Skeleton height="2rem" class="mb-2"></Skeleton>
                <Skeleton width="10rem" height="4rem"></Skeleton>
            </div>
            <div class="w-full xl:w-6/12 p-4">
                <h5>Rounded</h5>
                <Skeleton class="mb-2" borderRadius="16px"></Skeleton>
                <Skeleton width="10rem" class="mb-2" borderRadius="16px"></Skeleton>
                <Skeleton width="5rem" borderRadius="16px" class="mb-2"></Skeleton>
                <Skeleton height="2rem" class="mb-2" borderRadius="16px"></Skeleton>
                <Skeleton width="10rem" height="4rem" borderRadius="16px"></Skeleton>
            </div>
            <div class="w-full xl:w-6/12 p-4">
                <h5 class="mt-4">Square</h5>
                <div class="flex items-end">
                    <Skeleton size="2rem" class="mr-2"></Skeleton>
                    <Skeleton size="3rem" class="mr-2"></Skeleton>
                    <Skeleton size="4rem" class="mr-2"></Skeleton>
                    <Skeleton size="5rem"></Skeleton>
                </div>
            </div>
            <div class="w-full xl:w-6/12 p-4">
                <h5 class="mt-4">Circle</h5>
                <div class="flex items-end">
                    <Skeleton shape="circle" size="2rem" class="mr-2"></Skeleton>
                    <Skeleton shape="circle" size="3rem" class="mr-2"></Skeleton>
                    <Skeleton shape="circle" size="4rem" class="mr-2"></Skeleton>
                    <Skeleton shape="circle" size="5rem"></Skeleton>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import Skeleton from '@/volt/skeleton';
<\/script>
`);
</script>
