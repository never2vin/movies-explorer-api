const schemaMessages = {
  empty: 'Поле `{PATH}` должно быть заполнено',
  min: 'Минимальная длина поля `{PATH}` - 2',
  max: 'Максимальная длина поля `{PATH}` - 30',
  notEmail: 'Некорректный email',
  notURL: 'Поле `{PATH}` содержит некорректный URL-адрес',
};

const validateMessages = {
  'string.min': 'Минимальная длина поля {#label} - {#limit}',
  'string.max': 'Максимальная длина поля {#label} - {#limit}',
  'string.email': 'Некорректный {#label}',
  'string.required': 'Поле {#label} должно быть заполнено',
};

module.exports = {
  schemaMessages,
  validateMessages,
};
