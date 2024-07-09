public with sharing class apexGetRecords {


    @AuraEnabled (cacheable = true)
    public static List<Contact> getContacts(string accId){
        try {
 List<Contact>newList = [Select FirstName, LastName, AccountId from Contact WHERE AccountId =: accId];
    
 return newList;
            
        } catch (Exception e) {
            throw new AuraHandledException(e.getMessage());
        }
    }
}