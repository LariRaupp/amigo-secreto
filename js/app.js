let totalAmigos = [];

function adicionar() {
  let nomeAmigo = document.getElementById('nome-amigo').value;
  let nomeAmigoInput = document.getElementById('nome-amigo');
  let listaAmigos = document.getElementById('lista-amigos');
  let botaoSortear = document.getElementById('sorteador');

  if (nomeAmigo == '' || /^[^a-zA-Z]+$/.test(nomeAmigo)) {
    alert('Digite um nome válido!');
    nomeAmigoInput.value = '';
    return;
  } else {
    
    for (let i = 0; i < totalAmigos.length; i++) {
      if (nomeAmigo.localeCompare(totalAmigos[i], 'pt-BR', { sensitivity: 'base' }) === 0) {
        alert('Este amigo já foi informado, digite outro nome!');
        nomeAmigoInput.value = '';
        return;
      }
    }

    totalAmigos.push(nomeAmigo);
    nomeAmigoInput.value = '';
    listaAmigos.innerHTML = '';

    for (let i = 0; i < totalAmigos.length; i++) {
      listaAmigos.innerHTML += `<li>${totalAmigos[i]}</li>`;
    }

    if (totalAmigos.length >= 2) {
      botaoSortear.classList.remove('disabled');
    }
  }
}

function sortear() {
    let listaSorteio = document.getElementById('lista-sorteio');
    let listaAmigos = document.getElementById('lista-amigos');
    for (let i = totalAmigos.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [totalAmigos[i], totalAmigos[j]] = [totalAmigos[j], totalAmigos[i]];
      }
      for (let i = 0; i < totalAmigos.length; i++) {
        listaSorteio.innerHTML += `<li>${totalAmigos[i]} → ${totalAmigos[(i + 1) % totalAmigos.length]}</li>`;
      }
      totalAmigos = [];
      
    }

function reiniciar(){
totalAmigos = [];
let nomeAmigoInput = document.getElementById('nome-amigo');
let listaAmigos = document.getElementById('lista-amigos');
let listaSorteio = document.getElementById('lista-sorteio');
let botaoSortear = document.getElementById('sorteador');

nomeAmigoInput.value = '';
listaAmigos.innerHTML = '';
listaSorteio.innerHTML ='';
botaoSortear.classList.add('disabled');
}

