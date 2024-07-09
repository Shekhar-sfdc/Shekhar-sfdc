import { LightningElement, api, wire} from 'lwc';
import { getRecord } from 'lightning/uiRecordApi';
import getContacts from '@salesforce/apex/apexGetRecords.getContacts';
export default class WireAsFunction extends LightningElement {
    @api recordId;
   contacts;
   error;
    @wire(getRecord,{recordId : '$recordId', fields:'Account.Name'})
    account;

    get name(){
        return this.account.data.fields.Name.value; //this.Account.data ? getFieldValue(this.record.data, Name) : ' ';
    }
    @wire(getContacts,{accId:'$recordId'})
    wiredContacts({error, data}){
        if(data){
            this.contacts = data;
            this.error = undefined;
        }else if(error){
                   this.error = error;
                 this.contacts = undefined;
        }
    }
        
}