import { LightningElement } from 'lwc';

export default class MyComponent extends LightningElement {

    handleClick() {

        console.log('handleClick');

        this.dispatchEvent(
            new CustomEvent('myevent', {
                detail: {
                    message: 'hello'
                }
            })
        );

    }
}