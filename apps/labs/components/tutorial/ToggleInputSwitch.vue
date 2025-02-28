<template>
    <div class="flex items-center gap-4">
        <label :for="$attrs.inputId">{{ label }}</label>
        <ToggleSwitch v-bind="$attrs" :pt="preset" :ptOptions="{ mergeSections: false, mergeProps: false }" />
    </div>
</template>

<script setup>
defineOptions({
    inheritAttrs: false
});

defineProps(['label']);

const preset = {
    root: ({ props }) => ({
        class: [
            'inline-block relative',
            'w-10 h-6',
            'rounded-2xl',
            {
                'opacity-60 select-none pointer-events-none cursor-default': props.disabled
            }
        ]
    }),
    slider: ({ props, attrs }) => ({
        class: [
            // Position
            'absolute top-0 left-0 right-0 bottom-0 before:transform',
            { 'before:transform before:translate-x-4': props.modelValue == props.trueValue },

            // Shape
            'rounded-2xl',

            // Before:
            'before:absolute before:top-1/2 before:left-1',
            'before:-mt-2',
            'before:h-4 before:w-4',
            'before:rounded-full',
            'before:duration-200',
            {
                'before:bg-surface-0 before:dark:bg-surface-500': !props.modelValue,
                'before:bg-violet-500 before:ring-violet-300': !attrs.type & props.modelValue,
                'before:bg-amber-500 before:ring-amber-300': attrs.type === 'accent' && props.modelValue
            },

            // Colors
            'border border-transparent',
            {
                'bg-surface-300 dark:bg-surface-800': !props.modelValue,
                'bg-violet-300': !attrs.type & props.modelValue,
                'bg-amber-300': attrs.type === 'accent' && props.modelValue
            },

            // States
            {
                'peer-hover:before:bg-surface-400 peer-hover:dark:before:bg-surface-700': !props.modelValue,
                'peer-hover:before:bg-violet-600': !attrs.type & props.modelValue,
                'peer-hover:before:bg-amber-600': attrs.type === 'accent' && props.modelValue
            },

            // Transition
            'transition-colors duration-200',

            // Misc
            'cursor-pointer'
        ]
    }),
    input: {
        class: [
            'peer',

            // Size
            'w-full ',
            'h-full',

            // Position
            'absolute',
            'top-0 left-0',
            'z-10',

            // Spacing
            'p-0',
            'm-0',

            // Shape
            'opacity-0',
            'rounded-2xl',
            'outline-none',

            // Misc
            'appearance-none',
            'cursor-pointer'
        ]
    }
};
</script>
