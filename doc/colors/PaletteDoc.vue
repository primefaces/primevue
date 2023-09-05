<template>
    <DocSectionText v-bind="$attrs">
        <p>Colors palette consists of 13 main colors where each color provides tints/shades from 50 to 900.</p>
    </DocSectionText>
    <div class="card">
        <div class="flex flex-wrap gap-6">
            <div v-for="color of colors" :key="color" class="flex flex-column">
                <template v-for="shade of shades" :key="shade">
                    <div class="w-18rem flex align-items-center p-3 font-bold" :style="{ backgroundColor: `var(--${color}-${shade})`, color: shade > 500 ? '#fff' : '#000' }">{{ color }}-{{ shade }}</div>
                </template>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            colors: ['primary', 'blue', 'green', 'yellow', 'cyan', 'pink', 'indigo', 'teal', 'orange', 'bluegray', 'purple', 'red', 'gray'],
            shades: [50, 100, 200, 300, 400, 500, 600, 700, 800, 900]
        };
    }
};
</script>
