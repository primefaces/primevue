import { isNotEmpty } from '@primeuix/utils/object';

export default class {
    helpers: Set<any>;
    type: any;
    constructor({ init, type }: { init?: any; type?: string }) {
        this.helpers = new Set(init);
        this.type = type;
    }
    add(instance: any) {
        this.helpers.add(instance);
    }
    update() {
        // @todo
    }
    delete(instance: any) {
        this.helpers.delete(instance);
    }
    clear() {
        this.helpers.clear();
    }
    get(parentInstance?: any, slots?: any) {
        const children = this._get(parentInstance, slots);
        const computed = children ? this._recursive([...this.helpers], children) : null;

        return isNotEmpty(computed) ? computed : null;
    }
    _isMatched(instance: any, key: string): any {
        const parent = instance?.parent;

        return parent?.vnode?.key === key || (parent && this._isMatched(parent, key)) || false;
    }
    _get(parentInstance: any, slots: any) {
        return (slots || parentInstance?.$slots)?.default?.() || null;
    }
    _recursive(helpers: any[] = [], children: any[] = []) {
        let components: any[] = [];

        children.forEach((child) => {
            if (child.children instanceof Array) {
                components = components.concat(this._recursive(components, child.children));
            } else if (child.type.name === this.type) {
                components.push(child);
            } else if (isNotEmpty(child.key)) {
                components = components.concat(helpers.filter((c) => this._isMatched(c, child.key)).map((c) => c.vnode));
            }
        });

        return components;
    }
}
