import { LightningElement } from 'lwc';

export default class LifeCycleHooks extends LightningElement {
    constructor(){
        super()
        console.log('Inside the constructor')
    }
    connectedCallback(){
        console.log('Inside the ConnectedCallback')
    }
    renderedCallback(){
        console.log('Inside the rederCallback')
    }
}