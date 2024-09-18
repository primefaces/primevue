export default {
    root: {
        color: '{form.field.float.label.color}',
        focusColor: '{form.field.float.label.focus.color}',
        activeColor: '{form.field.float.label.active.color}',
        invalidColor: '{form.field.float.label.invalid.color}',
        transitionDuration: '0.2s',
        positionX: '{form.field.padding.x}',
        fontWeight: '500',
        focus: {
            top: '-1.25rem',
            fontSize: '0.875rem',
            fontWeight: '400'
        }
    },
    in: {
        input: {
            paddingTop: '1.875rem'
        },
        focus: {
            top: '{form.field.padding.y}'
        }
    },
    on: {
        input: {
            paddingTop: '1.25rem',
            paddingBottom: '1.25rem'
        },
        focus: {
            background: '{form.field.background}',
            padding: '0 0.125rem'
        }
    }
};
