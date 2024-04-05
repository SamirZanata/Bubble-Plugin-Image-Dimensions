function(instance, properties, context) {
    var input = document.createElement("input");
    input.setAttribute('type', 'file');
    
    input.click();
    
    input.addEventListener('change', function(ev) {
        if (!ev) return; // Verifica se 'ev' está definido

        var arquivo = ev.target.files[0];
        var tipo = arquivo.type.match(/([^\/]*)$/)[0];

        const reader = new FileReader();
        
        reader.onload = function() {
            var imagem = new Image();
            imagem.src = reader.result;

            imagem.onload = function() {
                var largura = this.naturalWidth;
                var altura = this.naturalHeight;

                // Publica as dimensões da imagem
                instance.publishState('largura', largura);
                instance.publishState('altura', altura);
                // ^^ Aqui estamos publicando a largura e a altura da imagem

                // Restante do código permanece o mesmo...
                
                instance.publishState('preview', reader.result);
                instance.data.base64 = reader.result;
                instance.publishState('nome', arquivo.name);
                
                // Define o tipo do arquivo
                instance.data.tipo = tipo;

                // Define o sinalizador para salvar como verdadeiro
                instance.data.salvar = true;
            };
        };
        reader.readAsDataURL(arquivo);
    });
}
