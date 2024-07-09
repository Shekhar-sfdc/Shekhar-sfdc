import { LightningElement, api } from 'lwc';

export default class P2cChildComp extends LightningElement {
    message = "This is child Component";
    @api hurray;
    @api succesful;

    
}