const BadgeDirectiveModifiers = [
    {
        name: 'success',
        description: 'Overrides default severity color'
    },
    {
        name: 'info',
        description: 'Default color for severity levels'
    },
    {
        name: 'warn',
        description: 'Overrides default severity color'
    },
    {
        name: 'danger',
        description: 'Overrides default severity color'
    }
];

module.exports = {
    badgedirective: {
        name: 'BadgeDirective',
        description: 'When Badge used as a directive, badge needs to be configured at the application with a name of your choice.',
        'vue-modifiers': BadgeDirectiveModifiers
    }
};
