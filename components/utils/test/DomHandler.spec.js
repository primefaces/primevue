import { afterEach } from 'vitest';
import DomHandler from '../DomHandler';

let mockHtmlElement;

global.navigator = {
    userAgent: 'testUserAgent'
};
beforeEach(() => {
    let testId = 'dummy-testId';

    mockHtmlElement = document.createElement('div');
    mockHtmlElement.setAttribute('id', testId);
    document.body.appendChild(mockHtmlElement);
});

afterEach(() => {
    mockHtmlElement = null;
    vi.clearAllMocks();
});
describe('DomHandler', () => {
    describe('innerWidth', () => {
        it('When el parameter is null, offsetWidth should be 0', () => {
            const innerWidth = DomHandler.innerWidth(null);

            expect(innerWidth).toBe(0);
        });

        it('When el parameter is html element, offsetWidth should be calculated', () => {
            mockHtmlElement.style.padding = '30px';

            const innerWidth = DomHandler.innerWidth(mockHtmlElement);

            expect(innerWidth).toBe(60);
        });
    });

    describe('width', () => {
        it('When el parameter is null, innerwidth should be 0', () => {
            const width = DomHandler.width(null);

            expect(width).toBe(0);
        });

        it('When el parameter is html element, innerwidth should be calculated', () => {
            mockHtmlElement.style.padding = '30px';

            const width = DomHandler.width(mockHtmlElement);

            expect(width).toBe(-60);
        });
    });

    describe('getOuterWidth', () => {
        it('When el parameter is null, outerWidth should be 0', () => {
            const getOuterWidth = DomHandler.getOuterWidth(null, null);

            expect(getOuterWidth).toBe(0);
        });

        it('When el parameter is html element, outerWidth should be calculated', () => {
            mockHtmlElement.style['padding-left'] = '30px';

            const getOuterWidth = DomHandler.getOuterWidth(mockHtmlElement, null);

            expect(getOuterWidth).toBe(0);
        });

        it('When el parameter is html element and margin parameter is not null, outerWidth should be calculated', () => {
            mockHtmlElement.style['margin-right'] = '30px';
            mockHtmlElement.style['margin-left'] = '30px';

            const getOuterWidth = DomHandler.getOuterWidth(mockHtmlElement, '30px');

            expect(getOuterWidth).toBe(60);
        });
    });

    describe('getOuterHeight', () => {
        it('When el parameter is null, outerHeight should be 0', () => {
            const getOuterHeight = DomHandler.getOuterHeight(null, null);

            expect(getOuterHeight).toBe(0);
        });

        it('When el parameter is html element, outerHeight should be calculated', () => {
            mockHtmlElement.style.margin = '30px';

            const getOuterHeight = DomHandler.getOuterHeight(mockHtmlElement, null);

            expect(getOuterHeight).toBe(0);
        });

        it('When el parameter is html element and margin parameter is not null, outerHeight should be calculated', () => {
            mockHtmlElement.style.margin = '30px';

            const getOuterHeight = DomHandler.getOuterHeight(mockHtmlElement, '30px');

            expect(getOuterHeight).toBe(60);
        });
    });

    describe('getClientHeight', () => {
        it('When el parameter is null, clientHeight should be 0', () => {
            const getClientHeight = DomHandler.getClientHeight(null, null);

            expect(getClientHeight).toBe(0);
        });

        it('When el parameter is html element, clientHeight should be calculated', () => {
            mockHtmlElement.style.margin = '30px';

            const clientHeight = DomHandler.getClientHeight(mockHtmlElement, null);

            expect(clientHeight).toBe(0);
        });

        it('When el parameter is html element and margin parameter is not null, clientHeight should be calculated', () => {
            mockHtmlElement.style.margin = '30px';

            const clientHeight = DomHandler.getClientHeight(mockHtmlElement, '30px');

            expect(clientHeight).toBe(60);
        });
    });

    describe('getViewport', () => {
        it('When innerWidth parameter is not null, width and height should be equal', () => {
            global.innerWidth = 500;
            global.innerHeight = 500;

            const result = {
                height: 500,
                width: 500
            };

            expect(DomHandler.getViewport()).toStrictEqual(result);
        });
    });

    describe('getOffset', () => {
        it('When el parameter is null, clientHeight should be equal to result', () => {
            const result = {
                top: 'auto',
                left: 'auto'
            };

            expect(DomHandler.getOffset()).toStrictEqual(result);
        });

        it('When el parameter is not null, offset should be calculated', () => {
            mockHtmlElement.getBoundingClientRect = vi.fn(() => ({
                top: 30,
                left: 30
            }));

            const result = {
                top: 30,
                left: 30
            };

            expect(DomHandler.getOffset(mockHtmlElement)).toStrictEqual(result);
        });
    });

    describe('index', () => {
        it('When el parameter is null, index should be equal to -1', () => {
            expect(DomHandler.index()).toBe(-1);
        });

        it('When el parameter is not null and mockHtmlElement is a child', () => {
            const mockParentElement = document.createElement('div');

            mockParentElement.appendChild(mockHtmlElement);

            expect(DomHandler.index(mockHtmlElement)).toBe(0);
        });

        it('When el parameter is not null and mockHtmlElements parent has a nodetype 1 child', () => {
            const mockParentElement = document.createElement('div');
            const mockChild = document.createElement('p');

            mockParentElement.appendChild(mockChild);
            mockParentElement.appendChild(mockHtmlElement);

            expect(DomHandler.index(mockHtmlElement)).toBe(1);
        });
    });

    describe('addMultipleClasses', () => {
        it('When classname parameter is not null, class should be added to element', () => {
            DomHandler.addMultipleClasses(mockHtmlElement, 'test');

            expect(mockHtmlElement.classList.contains('test')).toBeTruthy();
        });

        it('When classList is null, class should be added to element with className', () => {
            mockHtmlElement.classList = '';

            DomHandler.addMultipleClasses(mockHtmlElement, 'test');

            expect(mockHtmlElement.className).toBe('test');
        });
    });

    describe('addMultipleClasses', () => {
        it('When classname parameter is not null, class should be added to element', () => {
            DomHandler.addMultipleClasses(mockHtmlElement, 'test');

            expect(mockHtmlElement.classList.contains('test')).toBeTruthy();
        });

        it('When classList is null, class should be added to element with className', () => {
            const div = {
                className: 'default'
            };

            DomHandler.addMultipleClasses(div, 'test');

            expect(div.className).toBe('default test');
        });
    });

    describe('addClass', () => {
        it('When classname parameter is not null, class should be added to element', () => {
            DomHandler.addClass(mockHtmlElement, 'test');

            expect(mockHtmlElement.classList.contains('test')).toBeTruthy();
        });

        it('When classList is null, class should be added to element with className', () => {
            const div = {
                className: 'default'
            };

            DomHandler.addClass(div, 'test');

            expect(div.className).toBe('default test');
        });
    });

    describe('removeClass', () => {
        it('When classname parameter is not null, class should be added to element', () => {
            DomHandler.addClass(mockHtmlElement, 'test');
            DomHandler.removeClass(mockHtmlElement, 'test');

            expect(mockHtmlElement.classList.contains('test')).toBeFalsy();
        });

        it('When classList is null, class should be added to element with className', () => {
            const div = {
                className: 'test default'
            };

            DomHandler.removeClass(div, 'test');

            expect(div.className.includes('test')).toBeFalsy();
        });
    });

    describe('hasClass', () => {
        it('When element parameter is null, should be return false', () => {
            expect(DomHandler.hasClass(null, 'test')).toBeFalsy();
        });

        it('When element is not null and element has a class, should be return true', () => {
            DomHandler.addClass(mockHtmlElement, 'test');

            expect(DomHandler.hasClass(mockHtmlElement, 'test')).toBeTruthy();
        });

        it('When element is not null and element has not a class, should be return false', () => {
            const div = {};

            expect(DomHandler.hasClass(div, 'test')).toBeFalsy();
        });
    });

    describe('find', () => {
        it('When element parameter is not a html element, should be return empty array', () => {
            expect(DomHandler.find('test', null)).toStrictEqual([]);
        });

        it('When element parameter is a html element, should be return empty array', () => {
            const mockChild = document.createElement('p');

            mockHtmlElement.appendChild(mockChild);

            expect(DomHandler.find(mockHtmlElement, 'p')).not.toBe([]);
        });
    });

    describe('findSingle', () => {
        it('When element parameter is not a html element, should be return null', () => {
            expect(DomHandler.findSingle('test', null)).toBe(null);
        });

        it('When element parameter is a html element, should be return empty array', () => {
            const mockChild = document.createElement('p');

            mockHtmlElement.appendChild(mockChild);

            expect(DomHandler.findSingle(mockHtmlElement, 'p')).not.toBe(null);
        });
    });

    describe('getHeight', () => {
        it('When element parameter is not a html element, should be return 0', () => {
            expect(DomHandler.getHeight(null)).toBe(0);
        });

        it('When element parameter is a html element, should be return calculated value', () => {
            mockHtmlElement.style.paddingTop = '10px';
            mockHtmlElement.style.paddingBottom = '10px';
            mockHtmlElement.style.borderTopWidth = '10px';
            mockHtmlElement.style.borderBottomWidth = '10px';
            mockHtmlElement.style.height = '100px';

            expect(DomHandler.getHeight(mockHtmlElement)).toBe(-40);
        });
    });

    describe('getWidth', () => {
        it('When element parameter is not a html element, should be return 0', () => {
            expect(DomHandler.getWidth(null)).toBe(0);
        });

        it('When element parameter is a html element, should be return calculated value', () => {
            mockHtmlElement.style.paddingRight = '10px';
            mockHtmlElement.style.paddingLeft = '10px';
            mockHtmlElement.style.borderLeftWidth = '10px';
            mockHtmlElement.style.borderRightWidth = '10px';
            mockHtmlElement.style.width = '100px';

            expect(DomHandler.getWidth(mockHtmlElement)).toBe(-40);
        });
    });

    describe('absolutePosition', () => {
        it('When element position bigger than viewport.height', () => {
            let element = document.createElement('div');

            document.body.appendChild(element);
            let target = document.createElement('div');

            target.getBoundingClientRect = () => {
                return {
                    top: 300,
                    height: 600
                };
            };

            document.body.appendChild(target);
            DomHandler.absolutePosition(element, target);
            expect(element.style['transform-origin']).toBe('top');
            expect(element.style.top).toBe('300px');
        });

        it('When element position smaller than viewport.height', () => {
            let element = document.createElement('div');

            document.body.appendChild(element);
            let target = document.createElement('div');

            target.getBoundingClientRect = () => {
                return {
                    top: 600,
                    height: 600
                };
            };

            document.body.appendChild(target);
            DomHandler.absolutePosition(element, target);
            expect(element.style['transform-origin']).toBe('bottom');
            expect(element.style.top).toBe('600px');
        });
    });

    describe('relativePosition', () => {
        it('When element position bigger than viewport.height', () => {
            let element = document.createElement('div');

            document.body.appendChild(element);

            let target = document.createElement('div');

            target.getBoundingClientRect = () => {
                return {
                    top: 300,
                    height: 600
                };
            };

            document.body.appendChild(target);

            DomHandler.relativePosition(element, target);

            expect(element.style['transform-origin']).toBe('top');
        });

        it('When element position smaller than viewport.height', () => {
            let element = document.createElement('div');

            document.body.appendChild(element);

            let target = document.createElement('div');

            target.getBoundingClientRect = () => {
                return {
                    top: 600,
                    height: 600
                };
            };

            document.body.appendChild(target);

            DomHandler.relativePosition(element, target);

            expect(element.style['transform-origin']).toBe('bottom');
        });
    });

    describe('getParents', () => {
        it('When element has not any parent element', () => {
            const element = document.createElement('div');

            expect(DomHandler.getParents(element)).toStrictEqual([]);
        });

        it('When element has parent elements', () => {
            expect(DomHandler.getParents(mockHtmlElement).length).toBe(3);
        });
    });

    describe('getScrollableParents', () => {
        it('When element has not any scrollable parent element', () => {
            const element = document.createElement('div');

            expect(DomHandler.getScrollableParents(element)).toStrictEqual([]);
        });

        it('When element has scrollable parent elements', () => {
            const element = document.createElement('p');

            mockHtmlElement.style.overflow = 'scroll';
            mockHtmlElement.style.height = '100px';
            mockHtmlElement.appendChild(element);
            expect(DomHandler.getScrollableParents(element).length).toBe(1);
        });
    });

    describe('getHiddenElementOuterHeight', () => {
        it('When element is null or not html element', () => {
            expect(DomHandler.getHiddenElementOuterHeight(null)).toBe(0);
        });

        it('When element is a html element, handler should be return a calculated offsetHeight', () => {
            expect(DomHandler.getHiddenElementOuterHeight(mockHtmlElement)).toBe(0);
        });
    });

    describe('getHiddenElementOuterWidth', () => {
        it('When element is null or not html element', () => {
            expect(DomHandler.getHiddenElementOuterWidth(null)).toBe(0);
        });

        it('When element is a html element, handler should be return a calculated offsetWidth', () => {
            expect(DomHandler.getHiddenElementOuterWidth(mockHtmlElement)).toBe(0);
        });
    });

    describe('getHiddenElementDimensions', () => {
        it('When element is null or not html element', () => {
            expect(DomHandler.getHiddenElementDimensions(null)).toBe(0);
        });

        it('When element is a html element, handler should be return a calculated offsetWidth and offsetHeight', () => {
            expect(DomHandler.getHiddenElementDimensions(mockHtmlElement)).toStrictEqual({ width: 0, height: 0 });
        });
    });

    describe('getUserAgent', () => {
        it('When element is null or not html element', () => {
            expect(DomHandler.getUserAgent()).toBe('testUserAgent');
        });
    });

    describe('appendChild', () => {
        it('When target is a html element', () => {
            const element = document.createElement('p');
            const target = document.createElement('div');

            vi.spyOn(DomHandler, 'isElement').mockReturnValue(true);

            DomHandler.appendChild(element, target);
            expect(target.children.length).toBe(1);
        });

        it('When target is a not a html element and has el and elElement', () => {
            const element = document.createElement('p');
            const target = {
                el: document.createElement('div'),
                elElement: document.createElement('div')
            };

            vi.spyOn(DomHandler, 'isElement').mockReturnValue(false);

            DomHandler.appendChild(element, target);
            expect(target.elElement.children.length).toBe(1);
        });

        it('When target is a not a html element and has not el and elElement', () => {
            const element = 'Test Element';
            const target = 'Test Target';

            vi.spyOn(DomHandler, 'isElement').mockReturnValue(false);

            expect(() => DomHandler.appendChild(element, target)).toThrowError();
        });
    });

    describe('clearSelection', () => {
        it('When getSelection has empty variable', () => {
            global.window.getSelection = vi.fn().mockReturnValue({
                removeAllRanges: vi.fn(),
                empty: vi.fn()
            });

            DomHandler.clearSelection();
            expect(global.window.getSelection().empty).toHaveBeenCalled();
        });
    });

    describe('getSelection', () => {
        it('When getSelection is not empty', () => {
            global.window.getSelection = vi.fn().mockReturnValue('testSelection');

            expect(DomHandler.getSelection()).toBe('testSelection');
        });
    });

    describe('isVisible', () => {
        it('When getSelection is not empty', () => {
            mockHtmlElement.style.display = 'none';

            expect(DomHandler.isVisible(mockHtmlElement)).toBe(false);
        });
    });
});
