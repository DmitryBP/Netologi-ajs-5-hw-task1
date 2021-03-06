/* eslint-disable no-new */
import { bowman } from '../js/app.js';
import { Character } from '../js/Character.js';

// import { Bowman } from '../js/1.Bowman.js';
// import { Swordsman } from '../js/2.Swordsman.js';
// import { Magician } from '../js/3.Magician.js';
// import { Undead } from '../js/4.Undead.js';
// import { Zombie } from '../js/5.Zombie.js';
// import { Daemon } from '../js/6.Daemon.js';

test('Aтака/Защита - 25/25', () => {
  expect(bowman.attack).toBe(25);
  expect(bowman.defense).toBe(25);
});

test('Ошибка длины имени', () => {
  expect(() => {
    new Character('i', 'Bowerman');
  }).toThrow();
});

test('Ошибка тип игрока', () => {
  expect(() => {
    new Character('Dima', 'Test');
  }).toThrow();
});
