let carrinho = [];
let totalGeral;
limpar();

function adicionar() {
  let produto = document.getElementById('produto').value;
  let nomeProduto = produto.split('-')[0];
  let valorUnitario = parseFloat(produto.split('R$')[1]);
  let quantidade = parseFloat(document.getElementById('quantidade').value);

  if (isNaN(quantidade) || quantidade <= 0) {
    alert('Por favor, digite um número válido!');
    return;
  }

  let subtotal = quantidade * valorUnitario;

  let produtosCarrinho = document.getElementById('lista-produtos');
  produtosCarrinho.innerHTML = produtosCarrinho.innerHTML + `<section class="carrinho__produtos__produto">
  <span class="texto-azul">${quantidade}x</span> ${nomeProduto} <span class="texto-azul">R$${subtotal}</span></section>`;

  totalGeral = totalGeral + subtotal;
  let campoTotal = document.getElementById('valor-total');
  campoTotal.textContent = `R$ ${totalGeral}`;

  document.getElementById('quantidade').value = null;



  // let quantidade = document.getElementById('quantidade');
  // let preco = quantidade.value * valorUnitario;
  // console.log(nomeProduto);
  // console.log(valorUnitario);
  // console.log(quantidade.value);
  // console.log(preco);


  let item = { nome: nomeProduto.trim(), valorUnitario, quantidade, subtotal };

  carrinho.push(item);

  console.log(item);

  return item;
}

function limpar() {
  carrinho = []
  totalGeral = 0;
  document.getElementById('lista-produtos').innerHTML = '';
  document.getElementById('valor-total').textContent = 'R$ 0,00';
}
