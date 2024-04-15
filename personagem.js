function consultarPersonagem() {
    var nomePersonagem = document.getElementById('nome-personagem').value;
    var url = `https://api.tibiadata.com/v4/character/${nomePersonagem}.json`;

    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error('Personagem não encontrado');
            }
            return response.json();
        })
        .then(data => {
            console.log(data); 
            var personagem = data.characters.data;
            var resultadoHTML = `
                <h2>${personagem.name}</h2>
                <p>Vocação: ${personagem.vocation}</p>
                <p>Nível: ${personagem.level}</p>
                <p>Mundo: ${personagem.world}</p>
                <p>Guilda: ${personagem.guild.name}</p>
            `;
            document.getElementById('resultado').innerHTML = resultadoHTML;
        })
        .catch(error => {
            document.getElementById('resultado').innerHTML = error.message;
        });
}
