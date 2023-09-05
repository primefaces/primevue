import EventBus from '../EventBus';

describe('EventBus', () => {
    it('When eventbus is on, callback should be emitted', () => {
        const eventBus = new EventBus();
        const callback = vi.fn();

        eventBus.on('test', callback);
        eventBus.emit('test');

        expect(callback).toHaveBeenCalled();
    });

    it('When eventbus is off, callback should be emitted', () => {
        const eventBus = new EventBus();
        const callback = vi.fn();

        eventBus.on('test', callback);
        eventBus.off('test', callback);
        eventBus.emit('test');

        expect(callback).not.toHaveBeenCalled();
    });
});
