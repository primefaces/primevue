const PortalProps = [
    {
        name: 'appendTo',
        type: 'string',
        default: 'body',
        description: 'A valid query selector or an HTMLElement to specify where the dialog gets attached. Special keywords are "body" for document body and "self" for the element itself.'
    },
    {
        name: 'disabled',
        type: 'boolean',
        default: 'false',
        description: 'If disabled, the Portal feature is eliminated and the content is displayed directly.'
    }
];

const PortalEvents = [];

const PortalSlots = [];

module.exports = {
    portal: {
        name: 'Portal',
        description: 'Portal moves its container to a specific location based on target elements. Basically it uses <Teleport> in the background.',
        props: PortalProps,
        events: PortalEvents,
        slots: PortalSlots
    }
};
