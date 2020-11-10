import { LightningElement } from 'lwc';

export default class MyComponent extends LightningElement {

    handleClick() {
        
        this.dispatchEvent(
            new CustomEvent('myevent', {
                detail: {
                    message: 'hello'
                }
            })
        );

    }
}