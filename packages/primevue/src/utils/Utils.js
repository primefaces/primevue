import * as utils from '@primeuix/utils';

export function blockBodyScroll($dt) {
    utils.blockBodyScroll({ variableName: $dt('scrollbar.width').name });
}

export function unblockBodyScroll($dt) {
    utils.unblockBodyScroll({ variableName: $dt('scrollbar.width').name });
}
