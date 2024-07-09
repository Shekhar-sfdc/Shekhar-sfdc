import { LightningElement } from 'lwc';

export default class C2pModal extends LightningElement {
    clickhandler(){
 const event = new CustomEvent('close')
 this.dispatchEvent(event)
    }
}