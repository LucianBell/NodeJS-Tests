import { describe, expect } from '@jest/globals'
import Item from '../item.js'

describe('Testes do meu item', () => {
  const miniArroz = new Item('Mini arroz', 0.1, 3)
  it('Retornar o valor da compra', () => {
    const precoEsperado = 0.3
    const retornado = miniArroz.pegaValorTotalItem()
    //                Função para que o valor retornado seja próximo ao esperado
    //               (Para resolver problema de overflow)
    expect(retornado).toBeCloseTo(precoEsperado)
  })
  it('Retornar nome correto', () => {
    const nomeEsperado = 'Mini arroz'
    const retornado = miniArroz.nome
    expect(retornado).toBe(nomeEsperado)
  })
})
