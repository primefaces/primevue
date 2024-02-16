/* const { AtRule, Rule } = require('postcss');

const addAnimation = (anim, root, opts) => {
    const _important = opts.important;
    const prefix = opts.prefix.className;
    const keyframeName = 'pf-' + anim.name;

    let keyframe = new AtRule({ name: 'keyframes', params: keyframeName });
    let ruleFrom = new Rule({ selector: 'from' });

    for (let p in anim.from) {
        ruleFrom.append({ prop: p, value: anim.from[p], important: _important });
    }

    let ruleTo = new Rule({ selector: anim.toValue || 'to' });

    for (let p in anim.to) {
        ruleTo.append({ prop: p, value: anim.to[p], important: _important });
    }

    keyframe.append(ruleFrom);
    keyframe.append(ruleTo);
    root.before(keyframe);

    let animClass = new Rule({ selector: `.${prefix}${anim.name}` });

    animClass.append({ prop: 'animation-name', value: keyframeName, important: _important });
    animClass.append({ prop: 'animation-duration', value: anim.duration, important: _important });
    animClass.append({ prop: 'animation-timing-function', value: anim.timing, important: _important });

    if (anim.backfaceVisibility) {
        animClass.append({ prop: 'backface-visibility', value: anim.backfaceVisibility, important: _important });
    }

    root.before(animClass);
};

module.exports = {
    addAnimation
};
 */
