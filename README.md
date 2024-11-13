# Numeros Mega Sena

Atividade proposta para avaliação C2 da disciplina de Desenvolvimento de Aplicações Web I.
O objetivo desse trabalho é buscar uma solução mais eficiente (em termos de recursos computacionais) para geração de 6 números aleatórios utilizando Javascript.

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

Problemática encontrada: a função atual gera 6 números aleatórios entre 1 e 60, verificando a cada loop se eles são distintos.
A função pode gerar muitos números até alcançar a condição desejada e faz constantes verificações se esses números gerados são iguais, o que pode ser ineficiente 
em termos de processamento e gasto de energia.

Para resolver esse problema pode-se utilizar o conceito do objeto Set em Javascript, em vez de utilizar um array para armazenar os números
aleatórios gerados. Ao utilizar Set assegura-se que os elementos da coleção não sejam duplicados, uma vez que o Set é uma coleção de 
dados por chaves e não por índice, como é o array, fazendo com que cada elemtento dessa coleção seja único.

    //Função otimizada utilizando Set
    function gerarNumerosMegaSena() {
        const colecaoMegaSenaSet = new Set();
      
        while (colecaoMegaSenaSet.size < 6) {
          const numeroAleatorios = Math.floor(Math.random() * 60) + 1;
          colecaoMegaSenaSet.add(numeroAleatorio);
        }
      
        const colecaoMegaSenaArray = Array.from(numeros);
        console.log("Seu jogo da Mega Sena tem os seguintes números", resultado);
        return colecaoMegaSenaArray;
      }
      
      gerarNumerosMegaSena();

  Como exibido no console do navegador, a função gera números aleatórios com Set, que não permite valores repetidos, portanto a verificação
  da duplicidade não é necessária a cada loop.

  ![image](https://github.com/user-attachments/assets/94a9c264-6309-4654-98f0-7b5245054b6c)

Teste de performance:
Para testar o código acima, a primeira validação mostrará a geração dos números da Mega Sena executando cada função uma vez.
    function testePerformance() {
      console.time("Função Original");
      gerarAleatorios();
      console.timeEnd("Função Original");
    
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

Função Original: 0.052978515625 ms
Função Otimizada: 0.049072265625 ms

![image](https://github.com/user-attachments/assets/431f2800-259c-4ff9-a5d2-930203732a66)

Como pode ser obsevado, a função otimizada realmente retornou o resultado em um tempo menor.

Fontes: https://oieduardorabelo.medium.com/javascript-set-vs-array-quando-e-como-usar-cf05a7a6ce54
