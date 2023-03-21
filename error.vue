<template>
    <div>
        <NuxtLayout name="default">
            <div class="flex card flex-column align-items-center gap-5 sm:p-8">
                <div class="flex flex-column sm:flex-row align-items-center justify-content-center gap-3 text-primary">
                    <span class="font-bold" :style="{ fontSize: '144px' }"> 4 </span>
                    <div class="flex align-items-center justify-content-center bg-primary border-circle w-8rem h-8rem">
                        <i class="pi pi-prime text-7xl"></i>
                    </div>
                    <span class="font-bold" :style="{ fontSize: '144px' }"> 4 </span>
                </div>
                <div class="font-bold text-900 text-center text-6xl border-top-1 surface-border pt-5">PAGE NOT FOUND</div>
            </div>
        </NuxtLayout>
    </div>
</template>
