import { LightningElement } from 'lwc';

export default class ConditionalRendering extends LightningElement {
    name;

    nameChange(event){
 this.name = event.target.value;
    }
get showname(){
    return this.name ==='shekhar'
}
}
