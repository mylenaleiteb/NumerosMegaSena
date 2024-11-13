//O objetivo desse trabalho é buscar uma solução mais eficiente (em termos de recursos computacionais) para geração de 6 números aleatórios utilizando Javascript.

  //Função original:
        function gerarAleatorios() {
            var vetor = [ ] 
             while(vetor.length < 6){
              var aleatorio = Math.floor(Math.random() * 60 + 1)
               if(vetor.includes(aleatorio)){
                continue
            }{
              vetor.push(aleatorio)
            }
            }
            return vetor
            }

//Função otimizada utilizando Set
function gerarNumerosMegaSena() {
    const colecaoMegaSenaSet = new Set();
    while (colecaoMegaSena.size < 6) {
      const numeroAleatorios = Math.floor(Math.random() * 60) + 1;
      colecaoMegaSena.add(numeroAleatorio);
    }
    const colecaoMegaSenaArray = Array.from(numeros);
    console.log("Seu jogo da Mega Sena tem os seguintes números", resultado);
    return colecaoMegaSenaArray;
  }
  gerarNumerosMegaSena();

//Teste de performance:
function testePerformance() {
console.time(“Função Original”);
gerarAleatorios();
console.timeEnd(“Função Original”);

  console.time("Função Otimizada");
  gerarNumerosMegaSena();
  console.timeEnd("Função Otimizada");
}
function gerarAleatorios() {
    var vetor = [ ] 
     while(vetor.length < 6){
      var aleatorio = Math.floor(Math.random() * 60 + 1)
       if(vetor.includes(aleatorio)){
        continue
    }{
      vetor.push(aleatorio)
    }
    }
    return vetor
    }
function gerarNumerosMegaSena() {
    const colecaoMegaSenaSet = new Set();
    while (colecaoMegaSenaSet.size < 6) {
      const numeroAleatorio = Math.floor(Math.random() * 60) + 1;
      colecaoMegaSenaSet.add(numeroAleatorio);
    }
    const colecaoMegaSenaArray = Array.from(colecaoMegaSenaSet);
    return colecaoMegaSenaArray;
  }
  testePerformance();