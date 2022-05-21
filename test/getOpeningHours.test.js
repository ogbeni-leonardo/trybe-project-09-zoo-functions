const getOpeningHours = require('../src/getOpeningHours');

describe('Testes da função getOpeningHours', () => {
  it('Testa se a função foi criada', () => {
    expect(typeof getOpeningHours).toBe('function');
  });

  it('Se nenhum argumento for passado retorne o horário disponível de todos os dias', () => {
    expect(getOpeningHours()).toEqual(
      {
        Tuesday: { open: 8, close: 6 },
        Wednesday: { open: 8, close: 6 },
        Thursday: { open: 10, close: 8 },
        Friday: { open: 10, close: 8 },
        Saturday: { open: 8, close: 10 },
        Sunday: { open: 8, close: 8 },
        Monday: { open: 0, close: 0 },
      },
    );
  });

  it('Ao passar um dia inválido uma mensagem de erro deve ser retornada', () => {
    expect(() => getOpeningHours('Pizza', '09:00-AM')).toThrow('The day must be valid. Example: Monday');
  });

  it('Para os argumentos "Monday", "09:00-PM" deve ser retornado "The zoo is closed"', () => {
    expect(getOpeningHours('Monday', '09:00-PM')).toBe('The zoo is closed');
  });

  it('Para os argumentos "Tuesday", "11:00-AM" deve ser retornado "The zoo is open"', () => {
    expect(getOpeningHours('Tuesday', '11:00-AM')).toBe('The zoo is open');
  });

  it('Para os argumentos "Wednesday", "10:00-PM" deve ser retornado "The zoo is closed"', () => {
    expect(getOpeningHours('Wednesday', '10:00-PM')).toBe('The zoo is closed');
  });

  it('Ao se passar abreviações incorretas uma mensagem de erro é exibida', () => {
    expect(() => getOpeningHours('Tuesday', '11:00-JK')).toThrow('The abbreviation must be \'AM\' or \'PM\'');
  });

  it('Ao se passar uma hora inválida uma mensagem de erro é exibida', () => {
    expect(() => getOpeningHours('Tuesday', 'ABC:00-AM')).toThrow('The hour should represent a number');
  });

  it('Ao se passar uma hora inválida uma mensagem de erro é exibida', () => {
    expect(() => getOpeningHours('Tuesday', '52:00-AM')).toThrow('The hour must be between 0 and 12');
  });

  it('Ao se passar um intervalo de minutos inválido uma mensagem de erro é exibida', () => {
    expect(() => getOpeningHours('Tuesday', '1:90-PM')).toThrow('The minutes must be between 0 and 59');
  });
});
