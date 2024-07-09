import { LightningElement, track } from 'lwc';

export default class DataBinding extends LightningElement {
    greetings = 'Shekhar';
    firstName 
    LastName

    handlechange(event){
        const inputs = event.target.name;
        if(inputs === 'fName'){
            this.firstName = event.target.value;
        }else if(inputs === 'lName'){
            this.LastName = event.target.value;
        }
    }
    get upperCaseText(){
       return `${this.firstName} ${this.LastName}`.toUpperCase()
       
    }

  


}