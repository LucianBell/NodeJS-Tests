// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { it, expect, describe } from '@jest/globals'
import { calculaDescontos, somaHorasExtras } from '../index'

describe('Testes dos calculos de folha', () => {
  it('Deve retornar a soma das horas extras', () => {
    const esperado = 2500
    const retornado = somaHorasExtras(2000, 500)
    expect(retornado).toBe(esperado)
  })

  it('Deve retornar o salário após os descontos', () => {
    const esperado = 2200
    const retornado = calculaDescontos(2500, 300)
    expect(retornado).toBe(esperado)
  })
})
