<template>
    <div class="h-screen flex items-center justify-center">
        <div class="flex card flex-col items-center gap-8 sm:p-20">
            <div class="flex flex-col sm:flex-row items-center justify-center gap-4 text-primary">
                <span class="font-bold" style="font-size: 144px"> 4 </span>
                <div class="flex items-center justify-center bg-primary text-primary-contrast rounded-full w-32 h-32">
                    <i class="pi pi-prime" style="font-size: 4.5rem"></i>
                </div>
                <span class="font-bold" style="font-size: 144px"> 4 </span>
            </div>
            <div class="font-bold text-center text-4xl border-t border-surface-200 dark:border-surface-700 pt-8">PAGE NOT FOUND</div>
            <NuxtLink to="/" class="p-button"> <span class="p-button-label">GO TO HOMEPAGE </span> </NuxtLink>
        </div>
    </div>
</template>
