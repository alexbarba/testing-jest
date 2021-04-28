import { sumar, multiplicar, restar, dividir } from '../maths'

describe('Calculos matematicos', () => {
  test('Suma', () => {
    const actual = sumar(1, 1)
    const expected = 2
    expect(actual).toBe(expected)
  })

  test('Restar', () => {
    const actual = restar(2, 2)
    const expected = 0
    expect(actual).toBe(expected)
  })

  test('Multiplicar', () => {
    const actual = multiplicar(2, 2)
    const expected = 4
    expect(actual).toBe(expected)
  })

  test('Dividir', () => {
    const actual = dividir(10, 2)
    const expected = 5
    expect(actual).toBe(expected)
  })
})

describe('Comparacion de números', () => {
  it('Mayor que usando toBe', () => {
    const toBeGreaterThan = (bigger, smallest) => bigger > smallest

    const actual = toBeGreaterThan(sumar(2, 2), 3)
    const expected = true

    expect(actual).toBe(expected)
  })

  it('Mayor que usando toBeTruthy', () => {
    const actual = sumar(2, 2) > 3
    expect(actual).toBeTruthy()
  })

  it('Mayor que usando toBeGreaterThan', () => {
    const actual = sumar(2, 2)
    const greaterThan = 3
    expect(actual).toBeGreaterThan(greaterThan)
  })

  it('Mayor o igual que usando toBeGreaterThanOrEqual', () => {
    const actual = sumar(2, 2)
    const greaterThanOrEqual = 4
    expect(actual).toBeGreaterThanOrEqual(greaterThanOrEqual)
  })

  it('Menor que usando toBeLessThan', () => {
    const actual = sumar(2, 2)
    const lessThan = 5
    expect(actual).toBeLessThan(lessThan)
  })

  it('Menor o igual que usando toBeLessThanOrEqual', () => {
    const actual = sumar(2, 2)
    const lessThanOrEqual = 4
    expect(actual).toBeLessThanOrEqual(lessThanOrEqual)
  })
})