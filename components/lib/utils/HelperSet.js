import ObjectUtils from './ObjectUtils';

export default class {
    helpers;
    type;
    constructor({ init, type }) {
        this.helpers = new Set(init);
        this.type = type;
    }
    add(instance) {
        this.helpers.add(instance);
    }
    update() {
        // @todo
    }
    delete(instance) {
        this.helpers.delete(instance);
    }
    clear() {
        this.helpers.clear();
    }
    get(parentInstance, slots) {
        const children = this._get(parentInstance, slots);
        const computed = children ? this._recursive([...this.helpers], children) : null;

        return ObjectUtils.isNotEmpty(computed) ? computed : null;
    }
    _isMatched(instance, key) {
        const parent = instance?.parent;

        return parent?.vnode?.key === key || (parent && this._isMatched(parent, key)) || false;
    }
    _get(parentInstance, slots) {
        return (slots || parentInstance?.$slots)?.default?.() || null;
    }
    _recursive(helpers = [], children = []) {
        let components = [];

        children.forEach((child) => {
            if (child.children instanceof Array) {
                components = components.concat(this._recursive(components, child.children));
            } else if (child.type.name === this.type) {
                components.push(child);
            } else if (ObjectUtils.isNotEmpty(child.key)) {
                components = components.concat(helpers.filter((c) => this._isMatched(c, child.key)).map((c) => c.vnode));
            }
        });

        return components;
    }
}
