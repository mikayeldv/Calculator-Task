# React Калькулятор с Redux Toolkit и Vite

Этот проект представляет собой простой калькулятор, созданный с использованием React и Redux Toolkit, с использованием Vite в качестве инструмента сборки. Он поддерживает базовые арифметические операции и управляет состоянием с помощью Redux Toolkit.

## Особенности

- Базовые арифметические операции: сложение, вычитание, умножение и деление
- Управление состоянием с помощью Redux Toolkit
- Отзывчивый и интерактивный пользовательский интерфейс
- TypeScript для обеспечения типобезопасности
- Быстрое время разработки и сборки с использованием Vite

## Начало работы

### Предварительные требования

Убедитесь, что на вашей локальной системе разработки установлены следующие компоненты:

- [Node.js](https://nodejs.org/) (версия 14 или выше)
- [Vite](https://vitejs.dev/) (установлен глобально)

### Установка

1. Клонируйте репозиторий:
   git clone https://github.com/mikayeldv/Calculator-Task.git

2. Перейдите в каталог проекта:
  cd react-calculator

3. Установите зависимости:
  npm install

Запуск приложения
  1. Запустите сервер разработки:
    npm run dev

  2. Откройте ваш браузер и перейдите по адресу http://localhost:5173, чтобы увидеть работающее приложение.

Сборка приложения
  Чтобы собрать приложение для производства, выполните:
    npm run build

  Это создаст оптимизированную сборку вашего приложения в каталоге dist. Результат сборки оптимизирован и минифицирован, готов к развертыванию.

Как работает код

  Приложение калькулятора построено с использованием React для пользовательского интерфейса и Redux Toolkit для управления состоянием. Вот краткий обзор его функциональности:

    Компоненты: Основным компонентом является Calculator.tsx, который отображает интерфейс калькулятора и обрабатывает взаимодействие с пользователем.

    Redux Slice: Файл calculatorSlice.ts определяет состояние и редьюсеры для калькулятора. Он обрабатывает обновления ввода, очистку ввода и вычисление результата.

    Конфигурация хранилища: Файл store.ts конфигурирует хранилище Redux и объединяет редьюсеры.

    Типизированные хуки: Файл hooks.ts содержит типизированные версии хуков useDispatch и useSelector для обеспечения типобезопасного управления состоянием.

    Стили: Файл styles.css определяет стили для калькулятора, используя CSS переменные для создания согласованного и легко настраиваемого дизайна.

Структура проекта
  src: Содержит исходный код приложения.

  features: Содержит Redux slices.

  calculatorSlice.ts: Redux slice для калькулятора.

  redux: Содержит конфигурацию хранилища и типизированные хуки.

  hooks.ts: Типизированные версии хуков useDispatch и useSelector.

  store.ts: Конфигурация хранилища Redux.

  components: Содержит компоненты React.

  Calculator.tsx: Основной компонент калькулятора.

  styles.css: Глобальные стили CSS.


Если вам нужно внести дополнительные изменения или требуется дополнительная информация, просто дайте знать!