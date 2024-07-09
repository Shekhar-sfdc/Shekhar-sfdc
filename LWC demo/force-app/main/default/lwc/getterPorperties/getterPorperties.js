import { LightningElement } from 'lwc';

export default class GetterPorperties extends LightningElement {
    value1=0;
    value2=0;
    getValue(event){
       const inputvalue = event.target.name;
       if(inputvalue ==='val1'){
        this.value1 = event.target.value;
       }else if(inputvalue ==='val2'){
        this.value2 = event.target.value;
       }
    }
    get sumOfValues(){
        
        return this.value1 * this.value2
    }
}