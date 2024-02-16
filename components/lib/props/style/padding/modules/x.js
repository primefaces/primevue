import { defineDeclarations, token } from '../..';

export default defineDeclarations({
    paddingX: token.spacing(['paddingLeft', 'paddingRight']),
    px: token.spacing(['paddingLeft', 'paddingRight'])
});
