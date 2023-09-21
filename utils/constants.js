const MONGO_DUPLICATE_KEY_ERROR = 11000;

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
  'string.urlCustomMethod': 'Поле {#label} содержит некорректный URL-адрес',
  'string.empty': 'Поле {#label} должно быть заполнено',
  'number.empty': 'Поле {#label} должно быть заполнено',
  'number.base': 'Поле {#label} должно быть числом',
};

const errorMessages = {
  '*': {
    400: 'Переданы некорректные данные',
    401: 'Пользователь не авторизован',
    404: 'Ресурс не найден. Проверьте URL и метод запроса',
    500: 'На сервере произошла ошибка',
    409: 'Такой пользователь уже есть',
  },
  '/signin': {
    401: 'Email или пароль неверный',
  },
  '/users': {
    404: 'Пользователь не найден',
  },
  '/movies': {
    403: 'Можно удалять только собственные фильмы',
    404: 'Фильм не найден',
  },
};

module.exports = {
  MONGO_DUPLICATE_KEY_ERROR,
  schemaMessages,
  validateMessages,
  errorMessages,
};
