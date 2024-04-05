function(instance, properties, context) {
    
    if(instance.data.salvar){
    
    var base64 = instance.data.base64;
    var tipo = instance.data.tipo;

 function salvarNoBubble(err, url){
            
                if(url){
                    
                    instance.publishState('bubble',url);
                    instance.triggerEvent('saved');
                }
            }
            
            var data = base64.substring(base64.indexOf(',')+ 1);
    
            context.uploadContent(properties.nome + '.'+tipo,data,salvarNoBubble);

    }

}