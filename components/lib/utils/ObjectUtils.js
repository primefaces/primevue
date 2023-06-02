export default {
    equals(obj1, obj2, field) {
        if (field) return this.resolveFieldData(obj1, field) === this.resolveFieldData(obj2, field);
        else return this.deepEquals(obj1, obj2);
    },

    deepEquals(a, b) {
        if (a === b) return true;

        if (a && b && typeof a == 'object' && typeof b == 'object') {
            var arrA = Array.isArray(a),
                arrB = Array.isArray(b),
                i,
                length,
                key;

            if (arrA && arrB) {
                length = a.length;
                if (length != b.length) return false;
                for (i = length; i-- !== 0; ) if (!this.deepEquals(a[i], b[i])) return false;

                return true;
            }

            if (arrA != arrB) return false;

            var dateA = a instanceof Date,
                dateB = b instanceof Date;

            if (dateA != dateB) return false;
            if (dateA && dateB) return a.getTime() == b.getTime();

            var regexpA = a instanceof RegExp,
                regexpB = b instanceof RegExp;

            if (regexpA != regexpB) return false;
            if (regexpA && regexpB) return a.toString() == b.toString();

            var keys = Object.keys(a);

            length = keys.length;

            if (length !== Object.keys(b).length) return false;

            for (i = length; i-- !== 0; ) if (!Object.prototype.hasOwnProperty.call(b, keys[i])) return false;

            for (i = length; i-- !== 0; ) {
                key = keys[i];
                if (!this.deepEquals(a[key], b[key])) return false;
            }

            return true;
        }

        return a !== a && b !== b;
    },

    resolveFieldData(data, field) {
        if (data && Object.keys(data).length && field) {
            if (this.isFunction(field)) {
                return field(data);
            } else if (field.indexOf('.') === -1) {
                return data[field];
            } else {
                let fields = field.split('.');
                let value = data;

                for (var i = 0, len = fields.length; i < len; ++i) {
                    if (value == null) {
                        return null;
                    }

                    value = value[fields[i]];
                }

                return value;
            }
        } else {
            return null;
        }
    },

    getItemValue(obj, ...params) {
        return this.isFunction(obj) ? obj(...params) : obj;
    },

    filter(value, fields, filterValue) {
        var filteredItems = [];

        if (value) {
            for (let item of value) {
                for (let field of fields) {
                    if (String(this.resolveFieldData(item, field)).toLowerCase().indexOf(filterValue.toLowerCase()) > -1) {
                        filteredItems.push(item);
                        break;
                    }
                }
            }
        }

        return filteredItems;
    },

    reorderArray(value, from, to) {
        if (value && from !== to) {
            if (to >= value.length) {
                to %= value.length;
                from %= value.length;
            }

            value.splice(to, 0, value.splice(from, 1)[0]);
        }
    },

    findIndexInList(value, list) {
        let index = -1;

        if (list) {
            for (let i = 0; i < list.length; i++) {
                if (list[i] === value) {
                    index = i;
                    break;
                }
            }
        }

        return index;
    },

    contains(value, list) {
        if (value != null && list && list.length) {
            for (let val of list) {
                if (this.equals(value, val)) return true;
            }
        }

        return false;
    },

    insertIntoOrderedArray(item, index, arr, sourceArr) {
        if (arr.length > 0) {
            let injected = false;

            for (let i = 0; i < arr.length; i++) {
                let currentItemIndex = this.findIndexInList(arr[i], sourceArr);

                if (currentItemIndex > index) {
                    arr.splice(i, 0, item);
                    injected = true;
                    break;
                }
            }

            if (!injected) {
                arr.push(item);
            }
        } else {
            arr.push(item);
        }
    },

    removeAccents(str) {
        if (str && str.search(/[\xC0-\xFF]/g) > -1) {
            str = str
                .replace(/[\xC0-\xC5]/g, 'A')
                .replace(/[\xC6]/g, 'AE')
                .replace(/[\xC7]/g, 'C')
                .replace(/[\xC8-\xCB]/g, 'E')
                .replace(/[\xCC-\xCF]/g, 'I')
                .replace(/[\xD0]/g, 'D')
                .replace(/[\xD1]/g, 'N')
                .replace(/[\xD2-\xD6\xD8]/g, 'O')
                .replace(/[\xD9-\xDC]/g, 'U')
                .replace(/[\xDD]/g, 'Y')
                .replace(/[\xDE]/g, 'P')
                .replace(/[\xE0-\xE5]/g, 'a')
                .replace(/[\xE6]/g, 'ae')
                .replace(/[\xE7]/g, 'c')
                .replace(/[\xE8-\xEB]/g, 'e')
                .replace(/[\xEC-\xEF]/g, 'i')
                .replace(/[\xF1]/g, 'n')
                .replace(/[\xF2-\xF6\xF8]/g, 'o')
                .replace(/[\xF9-\xFC]/g, 'u')
                .replace(/[\xFE]/g, 'p')
                .replace(/[\xFD\xFF]/g, 'y');
        }

        return str;
    },

    getVNodeProp(vnode, prop) {
        let props = vnode.props;

        if (props) {
            let kebapProp = prop.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
            let propName = Object.prototype.hasOwnProperty.call(props, kebapProp) ? kebapProp : prop;

            return vnode.type.extends.props[prop].type === Boolean && props[propName] === '' ? true : props[propName];
        }

        return null;
    },

    convertToFlatCase(str) {
        // convert snake, kebab, camel and pascal cases to flat case
        return this.isNotEmpty(str) ? str.replace(/(-|_)/g, '').toLowerCase() : str;
    },

    isEmpty(value) {
        return value === null || value === undefined || value === '' || (Array.isArray(value) && value.length === 0) || (!(value instanceof Date) && typeof value === 'object' && Object.keys(value).length === 0);
    },

    isNotEmpty(value) {
        return !this.isEmpty(value);
    },

    isFunction(value) {
        return !!(value && value.constructor && value.call && value.apply);
    },

    isObject(value) {
        return value !== null && value instanceof Object && value.constructor === Object;
    },

    isDate(value) {
        return value !== null && value instanceof Date && value.constructor === Date;
    },

    isArray(value) {
        return value !== null && Array.isArray(value);
    },

    isPrintableCharacter(char = '') {
        return this.isNotEmpty(char) && char.length === 1 && char.match(/\S| /);
    },

    /**
     * Firefox-v103 does not currently support the "findLast" method. It is stated that this method will be supported with Firefox-v104.
     * https://caniuse.com/mdn-javascript_builtins_array_findlast
     */
    findLast(arr, callback) {
        let item;

        if (this.isNotEmpty(arr)) {
            try {
                item = arr.findLast(callback);
            } catch {
                item = [...arr].reverse().find(callback);
            }
        }

        return item;
    },

    /**
     * Firefox-v103 does not currently support the "findLastIndex" method. It is stated that this method will be supported with Firefox-v104.
     * https://caniuse.com/mdn-javascript_builtins_array_findlastindex
     */
    findLastIndex(arr, callback) {
        let index = -1;

        if (this.isNotEmpty(arr)) {
            try {
                index = arr.findLastIndex(callback);
            } catch {
                index = arr.lastIndexOf([...arr].reverse().find(callback));
            }
        }

        return index;
    }
};
