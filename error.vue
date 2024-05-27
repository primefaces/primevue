<template>
    <div class="flex min-h-screen items-center justify-center">
        <div class="flex card flex-col items-center gap-8 sm:p-20">
            <div class="flex flex-col sm:flex-row items-center justify-center gap-4 text-primary">
                <span class="font-bold text-9xl"> 4 </span>
                <div class="flex items-center justify-center bg-primary text-primary-contrast rounded-full w-28 h-28">
                    <i class="pi pi-prime text-6xl"></i>
                </div>
                <span class="font-bold text-9xl"> 4 </span>
            </div>
            <div class="font-bold text-center text-4xl border-t border-surface pt-8">Page Not Found.</div>
            <NuxtLink to="/"><Button label="GO TO HOMEPAGE" /></NuxtLink>
        </div>
    </div>
</template>
