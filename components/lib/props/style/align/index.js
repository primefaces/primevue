import content from './properties/content';
import items from './properties/items';
import self from './properties/self';

export default {
    // properties
    ...content,
    ...items,
    ...self
};

/* const content = require('./properties/content');
const items = require('./properties/items');
const self = require('./properties/self');

module.exports = (root, opts) => {
    // properties
    content(root, opts);
    items(root, opts);
    self(root, opts);
};
 */
