<template>
    <Fieldset legend="Form Field" :toggleable="true" class="mb-3">
        <section class="grid grid-cols-4 mb-3 gap-2">
            <div class="flex flex-col gap-1">
                <DesignTokenField v-model="$colorScheme.formField.background" label="BG" type="color" />
            </div>
            <div class="flex flex-col gap-1">
                <DesignTokenField v-model="$colorScheme.formField.color" label="Color" type="color" />
            </div>
            <div class="flex flex-col gap-1">
                <DesignTokenField v-model="$colorScheme.formField.iconColor" label="Icon Color" type="color" />
            </div>
            <div class="flex flex-col gap-1">
                <DesignTokenField v-model="$colorScheme.formField.shadow" label="Shadow" />
            </div>
            <div class="flex flex-col gap-1">
                <DesignTokenField v-model="$colorScheme.formField.borderColor" label="Border Color" type="color" />
            </div>
            <div class="flex flex-col gap-1">
                <DesignTokenField v-model="$colorScheme.formField.hoverBorderColor" label="Hover Border Color" type="color" />
            </div>
            <div class="flex flex-col gap-1">
                <DesignTokenField v-model="$colorScheme.formField.focusBorderColor" label="Focus Border Color" type="color" />
            </div>
            <div class="flex flex-col gap-1">
                <DesignTokenField v-model="$colorScheme.formField.invalidBorderColor" label="Invalid Border Color" type="color" />
            </div>
            <div class="flex flex-col gap-1">
                <DesignTokenField v-model="$colorScheme.formField.disabledBackground" label="Disabled BG" type="color" />
            </div>
            <div class="flex flex-col gap-1">
                <DesignTokenField v-model="$colorScheme.formField.disabledColor" label="Disabled Color" type="color" />
            </div>
            <div class="flex flex-col gap-1">
                <DesignTokenField v-model="$colorScheme.formField.placeholderColor" label="Placeholder" type="color" />
            </div>
            <div class="flex flex-col gap-1">
                <DesignTokenField v-model="$colorScheme.formField.invalidPlaceholderColor" label="Invalid Placeholder" type="color" />
            </div>
            <div class="flex flex-col gap-1">
                <DesignTokenField v-model="$colorScheme.formField.filledBackground" label="Filled BG" type="color" />
            </div>
            <div class="flex flex-col gap-1">
                <DesignTokenField v-model="$colorScheme.formField.filledHoverBackground" label="Filled Hover BG" type="color" />
            </div>
            <div class="flex flex-col gap-1">
                <DesignTokenField v-model="$colorScheme.formField.filledFocusBackground" label="Filled Focus BG" type="color" />
            </div>
            <div class="flex flex-col gap-1"></div>
        </section>

        <div class="text-sm mb-1 font-semibold text-surface-950 dark:text-surface-0">Float Label</div>
        <section class="grid grid-cols-4 gap-2">
            <div class="flex flex-col gap-1">
                <DesignTokenField v-model="$colorScheme.formField.floatLabelColor" label="Color" type="color" />
            </div>
            <div class="flex flex-col gap-1">
                <DesignTokenField v-model="$colorScheme.formField.floatLabelFocusColor" label="Focus Color" type="color" />
            </div>
            <div class="flex flex-col gap-1">
                <DesignTokenField v-model="$colorScheme.formField.floatLabelActiveColor" label="Active Color" type="color" />
            </div>
            <div class="flex flex-col gap-1">
                <DesignTokenField v-model="$colorScheme.formField.floatLabelInvalidColor" label="Invalid Color" type="color" />
            </div>
        </section>
    </Fieldset>
</template>

<script>
export default {
    inject: ['$colorScheme']
};
</script>
