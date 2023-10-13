class Item {
  constructor (nome, valor, quantidade) {
    this.nome = nome
    this.valor = valor
    this.quantidade = quantidade
  }

  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  pegaValorTotalItem () {
    return this.quantidade * this.valor
  }
}

export default Item
