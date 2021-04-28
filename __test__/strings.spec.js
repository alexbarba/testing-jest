describe('Comprobando strings', () => {
  const actual = 'un texto bonito'
  it('El texto contiene dentro la palabra bonito', () => {
    const expected = /bonito/
    expect(actual).toMatch(expected)
  })

  it('El texto no contiene dentro la palabra feo', () => {
    const expected = /feo/
    expect(actual).not.toMatch(expected)
  })

  it('La longitud del string es 15', () => {
    const expected = 15
    expect(actual).toHaveLength(expected)
  })
})