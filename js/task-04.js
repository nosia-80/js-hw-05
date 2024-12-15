/*
 * Напиши класс `StringBuilder`. На вход он получает один параметр - строку,
 * которую записывает в свойство `_value`.
 *
 * Добавь классу следующий функционал:
 *
 * - Геттер `value` - возвращает текущее значение поля `_value`.
 * - Метод `append(str)` - получает параметр str (строку) и добавляет её в конец
 *   `_value`.
 * - Метод `prepend(str)` - получает параметр str (строку) и добавляет её в начало
 *   `_value`.
 * - Метод `pad(str)` - получает параметр str (строку) и добавляет её в начало и в
 *   конец `_value`.
 */

class StringBuilder {
  constructor(value) {
    this._value = value;
  }

  get value() {
    return this._value;
  }

  append(str) {
    this._value += str;
  }

  prepend(str) {
    this._value = str + this._value;
  }

  pad(str) {
    this.append(str);
    this.prepend(str);
  }
}

const builder = new StringBuilder('.');

builder.append('^');
console.log(builder.value); // '.^'

builder.prepend('^');
console.log(builder.value); // '^.^'

builder.pad('=');
console.log(builder.value); // '=^.^='
