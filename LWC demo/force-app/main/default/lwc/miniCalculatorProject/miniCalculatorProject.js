import { LightningElement } from 'lwc';

export default class MiniCalculatorProject extends LightningElement {
    message = false;
    firstNumber;
    secondNumber;
    returnvalue;

    onSelectHandler(event){
this.message = event.target.checked;
    }
   listOfNames = ['Shekhar', 'from', 'yemmiganur', 'to', 'Hyderabad'];


   handleChangeEvent(event){
       const names = event.target.name;
    if(names === 'firstNumbers'){
        this.firstnumber = event.target.value;
    }else if(names === 'secondNumbers'){
            this.secondNumber = event.target.value;
        }
   }
   addNumbers(){
    let firstN = parseInt(this.firstNumber);
    let secondN = parseInt(this.secondNumber);
 this.returnvalue = 'returning sum of' +firstN+ '+' +secondN+ 'is'+ (firstN+secondN)
}

   subNumbers(){
    const firstN = parseInt(this.firstNumber);
    const secondN = parseInt(this.secondNumber);
    this.returnvalue = 'returning remaining of' +firstN+ '-' +secondN+ 'is'+(firstN-secondN)}
   
   multiNumbers(){
    const firstN = parseInt(this.firstNumber);
    const secondN = parseInt(this.secondNumber);
    this.returnvalue = 'returning multiplication of'+firstN+ '*' +secondN+ 'is'+(firstN*secondN)}
   
   divNumbers(){
    const firstN = parseInt(this.firstNumber);
    const secondN = parseInt(this.secondNumber);
    this.returnvalue = 'returning divison of'+firstN+ '%' +secondN+ 'is'+(firstN%secondN)}
   
}