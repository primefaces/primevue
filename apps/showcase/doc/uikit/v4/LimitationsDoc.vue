<template>
    <DocSectionText v-bind="$attrs">
        <p>Current known technical limitations are listed at this section.</p>
        <ul class="leading-normal px-10 m-0 list-disc">
            <li class="p-2">
                <b>Multiple-value variables</b> - Figma currently supports only a single value per variable. For this reason, multi-value tokens defined in PrimeUIX—such as padding or margin, which can contain multiple values—are represented in Figma
                as separate variables for each side (top/right/bottom/left) or axis (x/y), unlike the combined multi-value CSS definitions in PrimeUIX.
            </li>
            <li class="p-2">
                <b>Calculations</b> - Since Figma does not yet allow calculations within variable definitions, values that rely on expressions like calc() cannot function dynamically. In these cases, any adjustments you make may require manual
                updates.
            </li>
            <li class="p-2">
                <b>Focus Rings</b> - In Tokens Studio, focus rings could be positioned by calculating the outer stroke distance using expressions such as focus.ring.width + focus.ring.offset. Since Figma Variables do not support arithmetic
                operations, these calculations cannot be reproduced. As a result, focus ring width values are no longer dynamically linked and must be handled as static values.
            </li>
            <li class="p-2"><b>Color Mix</b> - Figma Variables do not currently support color mix modifiers. Values in PrimeUIX that rely on color mixing have therefore been converted into raw hex values when brought into Figma Variables.</li>
        </ul>
    </DocSectionText>
</template>
