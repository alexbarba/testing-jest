const arrayFruit = ['manzana', 'banana', 'pera', 'sandia', 'jitomate', 'pepino']

describe('Testeando arrays', () => {
  test('El array contiene banana?', () => {
    const actual = arrayFruit
    const expected = 'banana'
    expect(actual).toContain(expected)
  })

  test('El array no contiene platano', () => {
    const actual = arrayFruit
    const expected = 'platano'
    expect(actual).not.toContain(expected)
  })

  test('Tamano del array', () => {
    const actual = arrayFruit
    const expected = 6
    expect(actual).toHaveLength(expected)
  })

  test('Tamano menor que 8', () => {
    const actual = arrayFruit.length < 8
    const expected = true
    expect(actual).toBe(expected)
  })
})