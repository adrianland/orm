<cfscript>
    
    adrianFunction = Variables[URL.method];
    adrianFunction();

    any function list(){
        writeOutput( serializeJSON(EntityLoad( "musician" )) );
    } 
    
    any function delete(){
        var id = URL.id;
        
        var musician = EntityLoad( "musician", { id = id}, true);
        entityDelete( musician );
    } 
    
</cfscript>