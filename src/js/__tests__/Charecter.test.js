import Character from  '../classes/Character.js'

test('check Character', () =>{
    const Char = new Character('Name', 'Swordsman')

    const result = Char.name

    expect(result).toBe('Name');
})