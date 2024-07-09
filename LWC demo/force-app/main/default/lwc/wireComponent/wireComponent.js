

//Some of functionalities are not working

import { LightningElement, api, wire } from 'lwc';
import { getRecord ,getFieldValue } from 'lightning/uiRecordApi';

//import ACCOUNT_NAME_FIELD from '@salesforce/schema/Account.Name';
//import ACCOUNT_PHONE_FIELD from '@salesforce/schema/Account.Phone';

export default class WireComponent extends LightningElement {
@api recordId;
@wire (getRecord,{recordId: '$recordId', fields: ['Account.Name', 'Account.Phone']}) //[ACCOUNT_NAME_FIELD, ACCOUNT_PHONE_FIELD]
record;

get name(){
    //return this.record.data ? getFieldValue(this.record.data, ACCOUNT_NAME_FIELD) : ''; // one type to assign
return this.record.data.fields.Name.value; //one more type to assign values
}

get phone(){
    // return this.record.data ? getFieldValue(this.record.data, ACCOUNT_PHONE_FIELD) : ''; 
    return this.record.data.fields.Phone.value;
}

}