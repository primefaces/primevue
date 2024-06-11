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
        if (!data || !field) {
            // short circuit if there is nothing to resolve
            return null;
        }

        try {
            const value = data[field];

            if (this.isNotEmpty(value)) return value;
        } catch {
            // Performance optimization: https://github.com/primefaces/primereact/issues/4797
            // do nothing and continue to other methods to resolve field data
        }

        if (Object.keys(data).length) {
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
        }

        return null;
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
        // Regular expression to check for any accented characters 'Latin-1 Supplement' and 'Latin Extended-A'
        const accentCheckRegex = /[\xC0-\xFF\u0100-\u017E]/;
    
        if (str && accentCheckRegex.test(str)) {
            const accentsMap = {
                'A': /[\xC0-\xC5\u0100\u0102\u0104]/g,
                'AE': /[\xC6]/g,
                'C': /[\xC7\u0106\u0108\u010A\u010C]/g,
                'D': /[\xD0\u010E\u0110]/g,
                'E': /[\xC8-\xCB\u0112\u0114\u0116\u0118\u011A]/g,
                'G': /[\u011C\u011E\u0120\u0122]/g,
                'H': /[\u0124\u0126]/g,
                'I': /[\xCC-\xCF\u0128\u012A\u012C\u012E\u0130]/g,
                'IJ': /[\u0132]/g,
                'J': /[\u0134]/g,
                'K': /[\u0136]/g,
                'L': /[\u0139\u013B\u013D\u013F\u0141]/g,
                'N': /[\xD1\u0143\u0145\u0147\u014A]/g,
                'O': /[\xD2-\xD6\xD8\u014C\u014E\u0150]/g,
                'OE': /[\u0152]/g,
                'R': /[\u0154\u0156\u0158]/g,
                'S': /[\u015A\u015C\u015E\u0160]/g,
                'T': /[\u0162\u0164\u0166]/g,
                'U': /[\xD9-\xDC\u0168\u016A\u016C\u016E\u0170\u0172]/g,
                'W': /[\u0174]/g,
                'Y': /[\xDD\u0176\u0178]/g,
                'Z': /[\u0179\u017B\u017D]/g,

                'a': /[\xE0-\xE5\u0101\u0103\u0105]/g,
                'ae': /[\xE6]/g,
                'c': /[\xE7\u0107\u0109\u010B\u010D]/g,
                'd': /[\u010F\u0111]/g,
                'e': /[\xE8-\xEB\u0113\u0115\u0117\u0119\u011B]/g,
                'g': /[\u011D\u011F\u0121\u0123]/g,
                'i': /[\xEC-\xEF\u0129\u012B\u012D\u012F\u0131]/g,
                'ij': /[\u0133]/g,
                'j': /[\u0135]/g,
                'k': /[\u0137,\u0138]/g,
                'l': /[\u013A\u013C\u013E\u0140\u0142]/g,
                'n': /[\xF1\u0144\u0146\u0148\u014B]/g,
                'p': /[\xFE]/g,
                'o': /[\xF2-\xF6\xF8\u014D\u014F\u0151]/g,
                'oe': /[\u0153]/g,
                'r': /[\u0155\u0157\u0159]/g,
                's': /[\u015B\u015D\u015F\u0161]/g,
                't': /[\u0163\u0165\u0167]/g,
                'u': /[\xF9-\xFC\u0169\u016B\u016D\u016F\u0171\u0173]/g,
                'w': /[\u0175]/g,
                'y': /[\xFD\xFF\u0177]/g,
                'z': /[\u017A\u017C\u017E]/g
            };
    
            for (let key in accentsMap) {
                str = str.replace(accentsMap[key], key);
            }
        }
    
        return str;
    },
    

    getVNodeProp(vnode, prop) {
        if (vnode) {
            let props = vnode.props;

            if (props) {
                let kebabProp = prop.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
                let propName = Object.prototype.hasOwnProperty.call(props, kebabProp) ? kebabProp : prop;

                return vnode.type.extends.props[prop].type === Boolean && props[propName] === '' ? true : props[propName];
            }
        }

        return null;
    },

    toFlatCase(str) {
        // convert snake, kebab, camel and pascal cases to flat case
        return this.isString(str) ? str.replace(/(-|_)/g, '').toLowerCase() : str;
    },

    toKebabCase(str) {
        // convert snake, camel and pascal cases to kebab case
        return this.isString(str)
            ? str
                  .replace(/(_)/g, '-')
                  .replace(/[A-Z]/g, (c, i) => (i === 0 ? c : '-' + c.toLowerCase()))
                  .toLowerCase()
            : str;
    },

    toCapitalCase(str) {
        return this.isString(str, { empty: false }) ? str[0].toUpperCase() + str.slice(1) : str;
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

    isObject(value, empty = true) {
        return value instanceof Object && value.constructor === Object && (empty || Object.keys(value).length !== 0);
    },

    isDate(value) {
        return value instanceof Date && value.constructor === Date;
    },

    isArray(value, empty = true) {
        return Array.isArray(value) && (empty || value.length !== 0);
    },

    isString(value, empty = true) {
        return typeof value === 'string' && (empty || value !== '');
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
    },

    sort(value1, value2, order = 1, comparator, nullSortOrder = 1) {
        const result = this.compare(value1, value2, comparator, order);
        let finalSortOrder = order;

        // nullSortOrder == 1 means Excel like sort nulls at bottom
        if (this.isEmpty(value1) || this.isEmpty(value2)) {
            finalSortOrder = nullSortOrder === 1 ? order : nullSortOrder;
        }

        return finalSortOrder * result;
    },

    compare(value1, value2, comparator, order = 1) {
        let result = -1;
        const emptyValue1 = this.isEmpty(value1);
        const emptyValue2 = this.isEmpty(value2);

        if (emptyValue1 && emptyValue2) result = 0;
        else if (emptyValue1) result = order;
        else if (emptyValue2) result = -order;
        else if (typeof value1 === 'string' && typeof value2 === 'string') result = comparator(value1, value2);
        else result = value1 < value2 ? -1 : value1 > value2 ? 1 : 0;

        return result;
    },

    localeComparator() {
        //performance gain using Int.Collator. It is not recommended to use localeCompare against large arrays.
        return new Intl.Collator(undefined, { numeric: true }).compare;
    },

    nestedKeys(obj = {}, parentKey = '') {
        return Object.entries(obj).reduce((o, [key, value]) => {
            const currentKey = parentKey ? `${parentKey}.${key}` : key;

            this.isObject(value) ? (o = o.concat(this.nestedKeys(value, currentKey))) : o.push(currentKey);

            return o;
        }, []);
    },

    stringify(value, indent = 2, currentIndent = 0) {
        const currentIndentStr = ' '.repeat(currentIndent);
        const nextIndentStr = ' '.repeat(currentIndent + indent);

        if (this.isArray(value)) {
            return '[' + value.map((v) => this.stringify(v, indent, currentIndent + indent)).join(', ') + ']';
        } else if (this.isDate(value)) {
            return value.toISOString();
        } else if (this.isFunction(value)) {
            return value.toString();
        } else if (this.isObject(value)) {
            return (
                '{\n' +
                Object.entries(value)
                    .map(([k, v]) => `${nextIndentStr}${k}: ${this.stringify(v, indent, currentIndent + indent)}`)
                    .join(',\n') +
                `\n${currentIndentStr}` +
                '}'
            );
        } else {
            return JSON.stringify(value);
        }
    }
};
