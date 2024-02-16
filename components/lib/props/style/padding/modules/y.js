import { defineDeclarations, token } from '../..';

export default defineDeclarations({
    paddingX: token.spacing(['paddingTop', 'paddingBottom']),
    px: token.spacing(['paddingTop', 'paddingBottom'])
});
