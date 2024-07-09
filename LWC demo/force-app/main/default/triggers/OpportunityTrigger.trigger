trigger OpportunityTrigger on Opportunity (after insert, after update) { 
List<Opportunity> newList = trigger.new;
    Map<Id,Opportunity> newmap = trigger.newmap;
    return;
    if(trigger.isAfter){
        if(trigger.isInsert){
            
        }
        if(trigger.isUpdate){
            OpportunityTriggerHelper.updatingRenewaldateOpp(newList, newmap);
        }
    }
}