<template>
    <DocSectionText v-bind="$attrs">
        <ul class="leading-normal px-10 mb-2 list-disc">
            <li>
                <div class="font-bold">How to change base font size?</div>
                <p>The base font size used in PrimeOne is 14px. Similar to how rem works in CSS, this is controlled by the scale/* variables located under the "Primitive" collection in Variables.</p>
                <p>When you change the values of these variables, all size calculations will adjust accordingly.</p>
                <p>Note that not all variables in the library may be linked to scale/* variables. So it's essential to check components individually.</p>
            </li>
        </ul>
    </DocSectionText>
</template>
