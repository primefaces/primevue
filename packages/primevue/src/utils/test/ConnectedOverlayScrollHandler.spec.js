import { expect } from 'vitest';
import ConnectedOverlayScrollHandler from '../ConnectedOverlayScrollHandler';
import DomHandler from '../DomHandler';

describe('ConnectedOverlayScrollHandler', () => {
    it('When bindScrollListener triggered,getScrollableParents should be called', () => {
        const element = 'element';
        const listener = 'listener';

        const connectedOverlayScrollHandler = new ConnectedOverlayScrollHandler(element, listener);

        vi.spyOn(DomHandler, 'getScrollableParents').mockReturnValue([{ addEventListener: vi.fn() }, { addEventListener: vi.fn() }]);

        connectedOverlayScrollHandler.bindScrollListener();

        expect(DomHandler.getScrollableParents).toHaveBeenCalledWith(element);
    });

    it('When destroy method triggered, unbindScrollListener should be called ', () => {
        const element = 'element';
        const listener = 'listener';

        const connectedOverlayScrollHandler = new ConnectedOverlayScrollHandler(element, listener);

        vi.spyOn(connectedOverlayScrollHandler, 'unbindScrollListener');

        connectedOverlayScrollHandler.destroy();

        expect(connectedOverlayScrollHandler.unbindScrollListener).toHaveBeenCalled();
        expect(connectedOverlayScrollHandler.element).toBeNull();
        expect(connectedOverlayScrollHandler.listener).toBeNull();
    });
});
