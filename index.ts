// Sistema de banco de horas

// Importações
import type Assertoes from './types'

const somaHorasExtras = (salario: number, valorHorasExtras: number): number => {
  return salario + valorHorasExtras
}

const calculaDescontos = (salario: number, descontos: number): number => salario - descontos

// Função para realizar o teste unitário (passar um valor que é proveniente da função testada, e depois passa
// o valor que era esperado que fosse retornado. Se o valor for diferente, uma exceção será lançada
const verfiqueSe = (valor: number): Assertoes => {
  const assercoes: Assertoes = {
    ehExatamenteIgualA (esperado: number) {
      if (valor !== esperado) {
        // eslint-disable-next-line @typescript-eslint/no-throw-literal
        throw {}
      }
    }
  }
  return assercoes
}

// Função de teste, passa uma função e, se ela não funcionar, ele vai mandar uma console log falando isso.
// Dentro de dessa função (parametro funcaoTeste) é que será executada a função de teste unitário
const teste = (titulo: string, funcaoTeste: () => void): void => {
  try {
    funcaoTeste()
    console.log(`${titulo} passou.`)
  } catch (error) {
    console.error(`error: ${titulo} não passou`)
  }
}

teste('somaHorasExtras', () => {
  const esperado: number = 2500
  const retornado: number = somaHorasExtras(2000, 500)
  const resultado: Assertoes = verfiqueSe(retornado)
  resultado.ehExatamenteIgualA(esperado)
})

teste('calculaDesconto', () => {
  const esperado: number = 2200
  const retornado: number = calculaDescontos(2500, 300)
  const resultado: Assertoes = verfiqueSe(retornado)
  resultado.ehExatamenteIgualA(esperado)
})
