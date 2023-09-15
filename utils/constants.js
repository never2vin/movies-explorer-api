const schemaMessages = {
  empty: 'Поле `{PATH}` должно быть заполнено',
  min: 'Минимальная длина поля `{PATH}` - 2',
  max: 'Максимальная длина поля `{PATH}` - 30',
  notEmail: 'Некорректный email',
  notURL: 'Поле `{PATH}` содержит некорректный URL-адрес',
};

module.exports = {
  schemaMessages,
};
