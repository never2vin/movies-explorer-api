const schemaMessages = {
  empty: 'Поле `{PATH}` должно быть заполнено',
  min: 'Минимальная длина поля `{PATH}` - 2',
  max: 'Максимальная длина поля `{PATH}` - 30',
  notEmail: 'Некорректный email',
  notURL: 'Поле `{PATH}` содержит некорректный URL-адрес',
};

const validateMessages = {
  'string.hex': 'Некорректный id',
  'string.length': 'Некорректный id',
  'string.min': 'Минимальная длина поля {#label} - {#limit}',
  'string.max': 'Максимальная длина поля {#label} - {#limit}',
  'string.email': 'Некорректный {#label}',
  'string.uriCustomScheme': 'Поле {#label} содержит некорректный URL-адрес',
  'string.required': 'Поле {#label} должно быть заполнено',
  'number.required': 'Поле {#label} должно быть заполнено',
};

module.exports = {
  schemaMessages,
  validateMessages,
};
