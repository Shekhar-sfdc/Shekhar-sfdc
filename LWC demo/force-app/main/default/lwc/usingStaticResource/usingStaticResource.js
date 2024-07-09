import { LightningElement } from 'lwc';
import DONE from '@salesforce/resourceUrl/done';
import UNNamed from '@salesforce/resourceUrl/unamed'
export default class UsingStaticResource extends LightningElement {
    bingo = DONE;
    chino = UNNamed;
}