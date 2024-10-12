import localCardsReducer, { addNewCard, deleteCard } from './localCardsSlice';

describe('localCardsSlice', () => {
  const initialState = [];

  beforeEach(() => {
    // Limpiar localStorage antes de cada prueba
    window.localStorage.clear();
  });

  test('should return the initial state', () => {
    expect(localCardsReducer(undefined, {})).toEqual(initialState);
  });

  test('should handle addNewCard', () => {
    const newCard = {
      key: '1',
      michiName: 'Michi 1',
      image: 'https://example.com/michi1.jpg',
      atributtes: 'Cute and playful',
      stats: { agility: 10, softness: 8, evilness: 2 },
      rarity: 5,
    };

    const expectedState = [newCard];

    const action = addNewCard(newCard);
    const state = localCardsReducer(initialState, action);

    expect(state).toEqual(expectedState);
    expect(JSON.parse(window.localStorage.getItem('localCards'))).toEqual(expectedState);
  });

  test('should handle deleteCard', () => {
    const initialStateWithCards = [
      {
        key: '1',
        michiName: 'Michi 1',
        image: 'https://example.com/michi1.jpg',
        atributtes: 'Cute and playful',
        stats: { agility: 10, softness: 8, evilness: 2 },
        rarity: 5,
      },
      {
        key: '2',
        michiName: 'Michi 2',
        image: 'https://example.com/michi2.jpg',
        atributtes: 'Lazy and sleepy',
        stats: { agility: 3, softness: 10, evilness: 1 },
        rarity: 6,
      },
    ];

    const expectedState = [
      {
        key: '2',
        michiName: 'Michi 2',
        image: 'https://example.com/michi2.jpg',
        atributtes: 'Lazy and sleepy',
        stats: { agility: 3, softness: 10, evilness: 1 },
        rarity: 6,
      },
    ];

    const action = deleteCard('1');
    const state = localCardsReducer(initialStateWithCards, action);

    expect(state).toEqual(expectedState);
    expect(JSON.parse(window.localStorage.getItem('localCards'))).toEqual(expectedState);
  });
});