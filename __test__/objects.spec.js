// En jest toBe nos sirve para comparar primitivos
// Pero para tipos de datos más complejos como los objetos tenemos toEqual

describe('Comparadores comunes', () => {
  it('Igualdad de elementos', () => {
    const actual = {
      name: "Alexis",
      lastname: "Barba"
    }
    const expected = {
      name: "Alexis",
      lastname: "Barba"
    }
    expect(actual).toEqual(expected)
  })

  it('Desigualdad de elementos', () => {
    const actual = {
      name: "Juan",
      lastname: "Barba"
    }
    const expected = {
      name: "Alexis",
      lastname: "Barba"
    }
    expect(actual).not.toEqual(expected)
  })

})