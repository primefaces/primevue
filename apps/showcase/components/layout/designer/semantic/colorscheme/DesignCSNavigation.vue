<template>
    <Fieldset legend="Navigation" :toggleable="true" class="mb-3">
        <div class="text-sm mb-1 font-semibold text-surface-950 dark:text-surface-0">Item</div>
        <section class="grid grid-cols-4 mb-3 gap-2">
            <div class="flex flex-col gap-1">
                <span class="text-sm">Focus Background</span>
                <input v-model="$colorScheme.navigation.item.focusBackground" type="text" class="border border-surface-300 dark:border-surface-600 rounded-lg p-2 w-full" />
            </div>
            <div class="flex flex-col gap-1">
                <span class="text-sm">Acitve Background</span>
                <input v-model="$colorScheme.navigation.item.focusBackground" type="text" class="border border-surface-300 dark:border-surface-600 rounded-lg p-2 w-full" />
            </div>
            <div class="flex flex-col gap-1"></div>
            <div class="flex flex-col gap-1"></div>

            <div class="flex flex-col gap-1">
                <span class="text-sm">Color</span>
                <input v-model="$colorScheme.navigation.item.color" type="text" class="border border-surface-300 dark:border-surface-600 rounded-lg p-2 w-full" />
            </div>
            <div class="flex flex-col gap-1">
                <span class="text-sm">Focus Color</span>
                <input v-model="$colorScheme.navigation.item.focusColor" type="text" class="border border-surface-300 dark:border-surface-600 rounded-lg p-2 w-full" />
            </div>
            <div class="flex flex-col gap-1">
                <span class="text-sm">Active Color</span>
                <input v-model="$colorScheme.navigation.item.activeColor" type="text" class="border border-surface-300 dark:border-surface-600 rounded-lg p-2 w-full" />
            </div>
            <div class="flex flex-col gap-1"></div>
        </section>

        <div class="text-sm mb-1 font-semibold text-surface-950 dark:text-surface-0">Item Icon</div>
        <section class="grid grid-cols-4 mb-3 gap-2">
            <div class="flex flex-col gap-1">
                <span class="text-sm">Color</span>
                <input v-model="$colorScheme.navigation.item.icon.color" type="text" class="border border-surface-300 dark:border-surface-600 rounded-lg p-2 w-full" />
            </div>
            <div class="flex flex-col gap-1">
                <span class="text-sm">Focus Color</span>
                <input v-model="$colorScheme.navigation.item.icon.focusColor" type="text" class="border border-surface-300 dark:border-surface-600 rounded-lg p-2 w-full" />
            </div>
            <div class="flex flex-col gap-1">
                <span class="text-sm">Active Color</span>
                <input v-model="$colorScheme.navigation.item.icon.activeColor" type="text" class="border border-surface-300 dark:border-surface-600 rounded-lg p-2 w-full" />
            </div>
            <div class="flex flex-col gap-1"></div>
        </section>

        <div class="text-sm mb-1 font-semibold text-surface-950 dark:text-surface-0">Submenu Label</div>
        <section class="grid grid-cols-4 mb-3 gap-2">
            <div class="flex flex-col gap-1">
                <span class="text-sm">Background</span>
                <input v-model="$colorScheme.navigation.submenuLabel.background" type="text" class="border border-surface-300 dark:border-surface-600 rounded-lg p-2 w-full" />
            </div>
            <div class="flex flex-col gap-1">
                <span class="text-sm">Color</span>
                <input v-model="$colorScheme.navigation.submenuLabel.color" type="text" class="border border-surface-300 dark:border-surface-600 rounded-lg p-2 w-full" />
            </div>
            <div class="flex flex-col gap-1"></div>
            <div class="flex flex-col gap-1"></div>
        </section>

        <div class="text-sm mb-1 font-semibold text-surface-950 dark:text-surface-0">Submenu Icon</div>
        <section class="grid grid-cols-4 mb-3 gap-2">
            <div class="flex flex-col gap-1">
                <span class="text-sm">Color</span>
                <input v-model="$colorScheme.navigation.submenuIcon.color" type="text" class="border border-surface-300 dark:border-surface-600 rounded-lg p-2 w-full" />
            </div>
            <div class="flex flex-col gap-1">
                <span class="text-sm">Focus Color</span>
                <input v-model="$colorScheme.navigation.submenuIcon.focusColor" type="text" class="border border-surface-300 dark:border-surface-600 rounded-lg p-2 w-full" />
            </div>
            <div class="flex flex-col gap-1">
                <span class="text-sm">Active Color</span>
                <input v-model="$colorScheme.navigation.submenuIcon.activeColor" type="text" class="border border-surface-300 dark:border-surface-600 rounded-lg p-2 w-full" />
            </div>
            <div class="flex flex-col gap-1"></div>
        </section>
    </Fieldset>
</template>

<script>
export default {
    inject: ['$colorScheme']
};
</script>
