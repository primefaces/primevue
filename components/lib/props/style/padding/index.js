import { defineDeclarations, token } from '..';
import x from './modules/x';
import y from './modules/y';
import bottom from './properties/bottom';
import left from './properties/left';
import right from './properties/right';
import top from './properties/top';

export default {
    ...defineDeclarations({
        padding: token.spacing('padding'),
        p: token.spacing('padding')
    }),
    // properties
    ...bottom,
    ...left,
    ...right,
    ...top,

    // modules
    ...x,
    ...y
};
