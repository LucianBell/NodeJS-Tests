import { describe, expect, it } from '@jest/globals'
import Carrinho from '../carrinho'
import Item from '../item.js'

describe('Testes do meu carrinho', () => {
  // Declaração das variaveis
  const meuCarrinho = new Carrinho()
  const miniArroz = new Item('Mini arroz', 10, 10)

  // Teste se o carrinho está sendo inicializado como null
  it('Carrinho sem itens deve ser nulo', () => {
    const retornado = meuCarrinho.subtotal
    expect(retornado).toBeNull()
  })

  // Teste se o carrinho, ao ser inicializado, possui a propiedade "total"
  it('Carrinho deve ter propiedade total', () => {
    expect(meuCarrinho).toHaveProperty('total')
  })

  // Adicionando item no carrinho
  meuCarrinho.adiciona(miniArroz)
  meuCarrinho.adicionaFrete(10)

  // Verificando itens do carrinho
  it('Ver itens contidos no carrinho', () => {
    const retornado = meuCarrinho.itens
    expect(retornado).toContain(miniArroz)
  })

  // Testando retorno de subtotal
  it('Retornar subtotal', () => {
    const esperado = 110
    const retornado = meuCarrinho.calculaTotal()
    expect(retornado).toBe(esperado)
  })

  // Testando finalização de compra
  it('Finalização da compra', () => {
    const esperado = {
      subtotal: 100,
      frete: 10,
      total: 110
    }
    const retornado = meuCarrinho.finalizaCompra()
    // Como o retorno ta sendo uma string, a gente usa o StrictEqual
    expect(retornado).toStrictEqual(esperado)
  })

  // Testando exceção de finalização
  it('Exceção de finalização', () => {
    // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
    function englobaErroCarrinho () {
      const carrinhoVazio = new Carrinho()
      carrinhoVazio.finalizaCompra()
    }

    // eslint-disable-next-line @typescript-eslint/no-confusing-void-expression
    expect(englobaErroCarrinho).toThrowError('Carrinho de compras vazio')
  })
})
