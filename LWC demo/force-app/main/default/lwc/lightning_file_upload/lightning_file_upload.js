import { LightningElement, api} from 'lwc';
import{ShowToastEvent} from 'lightning/platformShowToastEvent';
import { createRecord } from 'lightning/uiRecordApi';

export default class Lightning_file_upload extends LightningElement {
    @api recordId;
 
    get encryptedToken (){

    }
    
    get acceptedformats(){
        return ['.pdf', '.exe', '.jpg', '.jpeg']
    }
    UploadFinished(event){
        const filesuploaded = event.detail.file;
        const minfilesize = 5 * 1024 * 1024; // 5Mb in bytes
        const maxfilesize = 10 * 1024 * 1024; //  10Mb in bytes
        for (let file of filesuploaded) {
            if (file.size < minfilesize || file.size > maxfilesize ){
                console.error('File size should be between 5MB and 10MB');
            } else {
                const contentVersionRecord = {
                    FirstPublishLocationId: this.recordId,
                    Title: file.name,
                    PathOnClient: file.name,
                    VersionData: file
                };

                createRecord({ apiName: 'ContentVersion', fields: contentVersionRecord })
                    .then(result => {
                        // Create a ContentDocumentLink record to link the ContentVersion to the parent record
                        const contentDocumentLinkRecord = {
                            ContentDocumentId: result.id,
                            LinkedEntityId: this.recordId,
                            ShareType: 'V'
                        };
                        return createRecord({ apiName: 'ContentDocumentLink', fields: contentDocumentLinkRecord });
                    })
                    .then(result => {
                        const toastEvent = new ShowToastEvent({
                            variant: 'success',
                            message: filesuploaded.length + ' file(s) uploaded successfully',
                            title: 'Successful',
                        });
                        this.dispatchEvent(toastEvent);
                    })
                    
                  
                    .catch(error => {
                        console.error('Error creating ContentVersion or ContentDocumentLink:', error);
                    });
                    
            }
        }
    }
    
 }