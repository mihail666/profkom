export const menuList = [
  {
    name: 'home',
    path: '/',
    title: 'Главная',
    pages: []
  },
  {
    name: 'about',
    title: 'О нас',
    pages: [
      { path: '/aboutpage1', pageTitle: 'Достижения' },
      { path: '/aboutpage2', pageTitle: 'Контакты' }
    ]
  },
  {
    name: 'news',
    path: '/news',
    title: 'Новости',
    pages: []
  },
  {
    title: 'Документы',
    pages: [
      { name: 'documents1', path: '/documents1', pageTitle: 'Правовая защита' },
      { name: 'documents2', path: '/documents2', pageTitle: 'Социальное партнерство' },
      { name: 'documents3', path: '/documents3', pageTitle: 'Охрана труда' }
    ]
  },
  {
    name: 'decisions',
    path: '/decisions',
    title: 'Решения',
    pages: []
  },
  {
    name: 'activity',
    path: '/activity',
    title: 'Деятельность',
    pages: []
  },
  {
    name: 'chill',
    path: '/chill',
    title: 'Отдых',
    pages: []
  }
]

export const menuClients = [
  { name: '', path: '/', title: 'Год корпоративной культуры' },
  { name: '', path: '/', title: 'Год педагога и наставника' },
  { name: '', path: '/', title: 'Здоровье, физкультура и спорт' },
  { name: '', path: '/', title: 'Образование высшее' },
  { name: '', path: '/', title: 'Образование дополнительное' }
]
