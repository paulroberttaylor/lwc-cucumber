import { createElement } from 'lwc';

import { defineFeature, loadFeature } from 'jest-cucumber';
import MyComponent from '../../myComponent';

const feature = loadFeature('force-app/main/default/lwc/myComponent/__tests__/features/myComponent.feature');

defineFeature(feature, it => {

    let element;
    let myHandler;
    let myButton;

    beforeEach(() => {

        element = createElement('c-my-component', {
            is: MyComponent
        })

        document.body.appendChild(element);

        myHandler = jest.fn();
        element.addEventListener('myevent', myHandler);
    })

    it('should fire an event with a payload', ({ given, and, when, then }) => {

        given('I have a button with an id of myButton', () => {

            myButton = element.shadowRoot.querySelector('[data-test-id="myButton"]');
            const myButtonIsVisible = myButton !== null;
            expect(myButtonIsVisible).toBe(true);
        });

        when('I click the button with an id of myButton', () => {

            myButton = element.shadowRoot.querySelector('[data-test-id="myButton"]');
            myButton.click();
        });

        then("a custom event is called", () => {

            expect(myHandler).toHaveBeenCalled();
        });

        and(/^the event has a message property of "(.*)"$/, (messageText) => {

            expect(myHandler.mock.calls[0][0].detail.message).toBe(messageText);
        });
    });
});
