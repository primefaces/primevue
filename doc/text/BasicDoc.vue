<template>
    <DocSectionText v-bind="$attrs">
        <p>
            Commands are processed using an EventBus implementation called <i>TerminalService</i>. Import this service into your component and subscribe to the <i>command</i> event to process the commands by sending replies with the
            <i>response</i> event.
        </p>
    </DocSectionText>
    <div class="card"></div>
    <DocSectionCode :code="{}" />
</template>

<script>
export default {};
</script>
