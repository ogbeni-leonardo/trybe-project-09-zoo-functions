const handlerElephants = require('../src/handlerElephants');

describe('Testes da função HandlerElephants', () => {
  it('Verfique se a função foi definida', () => {
    expect(typeof handlerElephants).toBe('function');
  });

  it('Se nenhum valor for passado retorna "undefined"', () => {
    expect(handlerElephants()).toBe(undefined);
  });

  it('Se um valor inválido tipo string for passado retorna "null"', () => {
    expect(handlerElephants('zeca pagodinho')).toBe(null);
  });

  it('Se um valor inválido tipo número for passado retorna uma mensagem de erro', () => {
    expect(handlerElephants(123)).toBe('Parâmetro inválido, é necessário uma string');
  });

  it('Verifica se retorna o nome de todos os elefantes', () => {
    expect(handlerElephants('names')).toEqual(['Ilana', 'Orval', 'Bea', 'Jefferson']);
  });

  it('Verifica se a idade média dos elefantes é retornada', () => {
    expect(handlerElephants('averageAge')).toBeCloseTo(10.5);
  });

  it('Verifica se a localização do elefante no zoológico é retornada', () => {
    expect(handlerElephants('location')).toBe('NW');
  });

  it('Verifica se a popularidade dos elefantes é retornada', () => {
    expect(handlerElephants('popularity')).toBe(5);
  });

  it('Verifica se o array com relação aos dias abertos a visita é retornado', () => {
    expect(handlerElephants('availability')).toEqual(['Friday', 'Saturday', 'Sunday', 'Tuesday']);
  });

  it('Se o parâmetro "id" for passado, retorne a id dos elefantes', () => {
    expect(handlerElephants('id')).toBe('bb2a76d8-5fe3-4d03-84b7-dba9cfc048b5');
  });

  it('Se o parâmetro "count" for passado, retorne a quantidade de elefantes', () => {
    expect(handlerElephants('count')).toBe(4);
  });
});
