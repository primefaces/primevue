import { afterEach, expect } from 'vitest';
import DomHandler from '../DomHandler';

let mockHtmlElement;
const { window } = global;

beforeEach(() => {
    vi.clearAllMocks();
    mockHtmlElement = null;
    global.navigator = {
        userAgent: 'testUserAgent'
    };

    const testId = 'dummy-testId';

    mockHtmlElement = document.createElement('div');
    mockHtmlElement.setAttribute('id', testId);
    document.body.appendChild(mockHtmlElement);
});

afterEach(() => {
    document.body.removeChild(mockHtmlElement);
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
            const mockChildElement = document.createElement('p');

            mockParentElement.appendChild(mockChildElement);

            expect(DomHandler.index(mockChildElement)).toBe(0);

            mockParentElement.removeChild(mockChildElement);
            document.body.appendChild(mockParentElement);
        });

        it('When el parameter is not null and mockHtmlElements parent has a nodetype 1 child', () => {
            const mockParentElement = document.createElement('div');
            const mockChild = document.createElement('p');
            const mockChild1 = document.createElement('p');

            mockParentElement.appendChild(mockChild);
            mockParentElement.appendChild(mockChild1);

            expect(DomHandler.index(mockChild1)).toBe(1);
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

            mockHtmlElement.removeChild(mockChild);
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

            mockHtmlElement.removeChild(mockChild);
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
            const element = document.createElement('div');

            document.body.appendChild(element);
            const target = document.createElement('div');

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

            document.body.removeChild(element);
            document.body.removeChild(target);
        });

        it('When element position smaller than viewport.height', () => {
            const element = document.createElement('div');

            document.body.appendChild(element);
            const target = document.createElement('div');

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

            document.body.removeChild(element);
            document.body.removeChild(target);
        });
    });

    describe('relativePosition', () => {
        it('When element position bigger than viewport.height', () => {
            const element = document.createElement('div');

            document.body.appendChild(element);

            const target = document.createElement('div');

            target.getBoundingClientRect = () => {
                return {
                    top: 300,
                    height: 600
                };
            };

            document.body.appendChild(target);

            DomHandler.relativePosition(element, target);

            expect(element.style['transform-origin']).toBe('top');

            document.body.removeChild(element);
            document.body.removeChild(target);
        });

        it('When element position smaller than viewport.height', () => {
            const element = document.createElement('div');

            document.body.appendChild(element);

            const target = document.createElement('div');

            target.getBoundingClientRect = () => {
                return {
                    top: 600,
                    height: 600
                };
            };

            document.body.appendChild(target);

            DomHandler.relativePosition(element, target);

            expect(element.style['transform-origin']).toBe('bottom');

            document.body.removeChild(element);
            document.body.removeChild(target);
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

            mockHtmlElement.removeChild(element);
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

    describe('getFirstFocusableElement', () => {
        it('When element has children, function should be return first child', () => {
            const element = document.createElement('div');
            const div1 = document.createElement('div');
            const div2 = document.createElement('div');

            div1.setAttribute('tabindex', '0');
            div2.setAttribute('tabindex', '1');

            element.appendChild(div1);
            element.appendChild(div2);

            expect(DomHandler.getFirstFocusableElement(element, 'div')).toBe(div1);
        });

        it('When element has not children, function should be return null', () => {
            const element = document.createElement('div');

            expect(DomHandler.getFirstFocusableElement(element, 'div')).toBe(null);
        });
    });

    describe('getLastFocusableElement', () => {
        it('When element has children, function should be return last child', () => {
            const element = document.createElement('div');
            const div1 = document.createElement('div');
            const div2 = document.createElement('div');

            div1.setAttribute('tabindex', '0');
            div2.setAttribute('tabindex', '1');

            element.appendChild(div1);
            element.appendChild(div2);

            expect(DomHandler.getLastFocusableElement(element, 'div')).toBe(div2);
        });

        it('When element has not children, function should be return null', () => {
            const element = document.createElement('div');

            expect(DomHandler.getLastFocusableElement(element, 'div')).toBe(null);
        });
    });

    describe('getNextFocusableElement', () => {
        it('When element has children, function should be return last child', () => {
            const element = document.createElement('div');
            const div1 = document.createElement('div');
            const div2 = document.createElement('div');

            div1.setAttribute('tabindex', '0');
            div2.setAttribute('tabindex', '1');

            element.appendChild(div1);
            element.appendChild(div2);

            expect(DomHandler.getNextFocusableElement(element, div1, 'div')).toBe(div2);
        });

        it('When element has not children, function should be return null', () => {
            const element = document.createElement('div');
            const div1 = document.createElement('div');

            div1.setAttribute('tabindex', '-1');

            element.appendChild(div1);

            expect(DomHandler.getNextFocusableElement(element, div1, 'div')).toBe(null);
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

            expect(DomHandler.isVisible(mockHtmlElement)).toBeFalsy();
        });
    });

    describe('resolveUserAgent', () => {
        it('When getSelection is not empty', () => {
            expect(DomHandler.resolveUserAgent()).toStrictEqual({ browser: '', version: '0' });
        });
    });

    describe('calculateScrollbarWidth', () => {
        it('When getSelection is not empty', () => {
            const scrollDiv = document.createElement('div');

            DomHandler.addStyles(scrollDiv, {
                width: '100px',
                height: '100px',
                overflow: 'scroll',
                position: 'absolute',
                top: '-9999px'
            });
            document.body.appendChild(scrollDiv);
            const scrollbarWidth = scrollDiv.offsetWidth - scrollDiv.clientWidth;

            document.body.removeChild(scrollDiv);

            expect(DomHandler.calculateScrollbarWidth()).toBe(scrollbarWidth);
        });
    });

    describe('isExist', () => {
        it('When element is null or undefined', () => {
            expect(DomHandler.isExist(null)).toBeFalsy();
            expect(DomHandler.isExist(undefined)).toBeFalsy();
        });

        it('When element is a html element and has a parent element', () => {
            const element = document.createElement('div');
            const parent = document.createElement('div');

            parent.appendChild(element);

            expect(DomHandler.isExist(element)).toBeTruthy();
        });
    });

    describe('isClient', () => {
        it('When window is undefined', () => {
            delete global.window;

            expect(DomHandler.isClient()).toBeFalsy();

            global.window = window;
        });
    });

    describe('focuse', () => {
        it('When element focused, document active element should be changed', () => {
            const element = document.createElement('input');

            mockHtmlElement.appendChild(element);

            DomHandler.focus(element);

            expect(document.activeElement.tagName).toBe('INPUT');

            mockHtmlElement.removeChild(element);
        });
    });

    describe('applyStyle', () => {
        it('When style parametre is an object', () => {
            mockHtmlElement.style.color = 'red';

            DomHandler.applyStyle(mockHtmlElement, { color: 'blue' });

            expect(mockHtmlElement.style.color).toBe('blue');
        });

        it('When style parametre is a string', () => {
            const style = 'color:red';

            DomHandler.applyStyle(mockHtmlElement, style);

            expect(mockHtmlElement.style.color).toBe('red');
        });
    });

    describe('isIOS', () => {
        it('When style parametre is an object', () => {
            global.window.navigator.userAgent = 'iPhone';

            expect(DomHandler.isIOS()).toBeTruthy();
        });
    });

    describe('isIOS', () => {
        it('When style parametre is an object', () => {
            global.window.navigator.userAgent = 'iPhone';

            expect(DomHandler.isIOS()).toBeTruthy();
        });
    });

    describe('isAndroid', () => {
        it('When style parametre is an object', () => {
            global.window.navigator.userAgent = 'android';

            expect(DomHandler.isAndroid()).toBeTruthy();
        });
    });

    describe('isTouchDevice', () => {
        it('When style parametre is an object', () => {
            global.window.navigator.userAgent = 'iPhone';

            expect(DomHandler.isTouchDevice()).toBeFalsy();
        });
    });
});
