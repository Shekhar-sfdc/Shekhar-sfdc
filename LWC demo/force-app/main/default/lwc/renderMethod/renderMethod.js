import { LightningElement } from 'lwc';
import signupTemplate from './signup.html'
import signinTemplate from './signin.html'
import RenderMethodhtml from './renderMethod.html'
export default class RenderMethod extends LightningElement {
    clickedButton = '';
    render(){
        return this.clickedButton === 'signup' ? signupTemplate : this.clickedButton === 'signin' ? signinTemplate : RenderMethodhtml
    }
handleClick(event){
    this.clickedButton = event.target.label

    
}
}