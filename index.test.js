import classes from './index.js';

const IS_WRAPPER_VISIBLE_FALSE = false;
const IS_WRAPPER_VISIBLE_TRUE = true;
const STYLE = {wrapper: 'wrapper'};
const STYLE_MODAL = {modal: 'modal'};

describe("Test react-style-classes function", () => {
    test('Test with boolean value FALSE', () => {
        const styles = classes('container', IS_WRAPPER_VISIBLE_FALSE && STYLE.wrapper);

        expect(styles === 'container').toBeTruthy();
    });

    test('Test with boolean value TRUE', () => {
        const styles = classes('container', IS_WRAPPER_VISIBLE_TRUE && STYLE.wrapper);

        expect(styles === 'container wrapper').toBeTruthy();
    });

    test('Combinated values test', () => {
        const styles = classes('container', IS_WRAPPER_VISIBLE_TRUE && STYLE.wrapper, STYLE_MODAL.modal);

        expect(styles === 'container wrapper modal').toBeTruthy();
    });
});