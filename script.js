// Массив с советами от маримо
const advices = [
  "Будь как маримо: сохраняй спокойствие",
  "Не торопись, вода сгладит все острые углы",
  "Делай перерыв — даже маримо время от времени отдыхает",
  "Не забывай менять воду — заботься о своей среде",
  "Маримо никогда не спешит, но всегда достигает гармонии",
  "Твоя стабильность — это твоя сила",
  "Двигайся медленно, но уверенно",
  "Иногда просто будь круглым и милым — это работает",
  "Сегодня улыбнись незнакомцу",
  "Сделай 5 глубоких вдохов и выдохов",
  "Напиши близкому человеку что-то хорошее",
  "Проведи 10 минут в тишине",
  "Улыбнись себе в зеркало. Ты прекрасен",
  "Не забывай пить воду, она наполняет тебя энергией",
  "Смотри на мир с любопытством, как будто видишь его впервые",
  "Наблюдай за облаками. Они учат нас быть свободными",
  "Протяни руку помощи тому, кто в ней нуждается",
  "Учись радоваться мелочам",
  "Позволь себе лениться без чувства вины",
  "Береги свои мечты. Они – твоя сила",
  "Всегда пробуй что-то новое, даже если немного страшно",
  "Помни, что ты не обязан быть идеальным",
  "Ты сделал достаточно. Позволь себе отдохнуть",
  "Ошибки – это нормально. Ты учишься",
  "Вдохни глубоко, выдохни. Все пройдет",
  "Даже маленькие шаги ведут к большим переменам",
  "Ты значим, даже если не всегда это чувствуешь",
  "Пусть твой дом будет местом покоя",
  "Люби себя так же, как заботишься о других",
  "Ты всегда можешь начать сначала",
  "Не забывай благодарить себя за старания",
  "Мир не ждет от тебя подвигов, только твоей искренности",
  "Напиши в блокноте пять вещей, которые сделали твой день лучше",
  "Нарисуй что-нибудь, даже если не умеешь рисовать",
  "Прогуляйся в парке и подыши свежим воздухом",
  "Съешь любимое блюдо, наслаждаясь каждым кусочком",
  "Поставь маленькую цель и достигни её сегодня",
  "Полей свои комнатные растения или заведи одно",
  "Выключи телефон на час и наслаждайся тишиной",
  "Послушай звуки природы. Пусть они успокоят тебя",
  "Составь список из десяти вещей, которые ты хочешь попробовать",
  "Сделай комплимент кому-то",
  "Не бойся просить помощи, когда она нужна",
  "Всегда оставляй время для себя",
  "Окружи себя людьми, которые делают тебя счастливым",
  "Пусть твое пространство отражает твою индивидуальность",
  "Береги свои силы для того, что действительно важно",
  "Не торопись, жизнь не гонка",
  "Читай книги, которые наполняют твою душу",
  "Учись быть добрым даже к себе",
  "Отпускай то, что больше не приносит радости",
  "Делай маленькие сюрпризы для себя",
  "Ты уже сделал много хорошего",
  "Твоя ценность не зависит от чужих мнений",
  "Вдохновляйся тем, что тебя окружает",
  "Всегда есть за что сказать «спасибо»",
  "Позволь себе мечтать, даже о невозможном",
  "Ты заслуживаешь заботы",
  "Твои эмоции – это часть тебя. Прими их",
  "Не бойся быть немного странным",
  "Иногда лучший ответ – тишина",
  "Ты не одинок в своих чувствах",
  "Найди 10 минут, чтобы просто посидеть и ничего не делать",
  "Устрой себе день без социальных сетей",
  "Напиши письмо будущему себе",
  "Раздай три искренние улыбки незнакомцам",
  "Придумай новое хобби и попробуй его",
  "Открой окно и почувствуй ветер на лице",
  "Поставь себе напоминание об отдыхе",
  "Купи себе маленький подарок",
  "Попробуй приготовить новое блюдо",
  "Сделай уборку в своем уголке, освободи пространство",
  "Прими ванну или постой под теплым душем",
  "Попробуй медитацию, даже если это всего 5 минут",
  "Поделись своими чувствами с другом",
  "Заметь, какие вещи делают тебя счастливым",
  "Перестань сравнивать себя с другими",
  "Найди минуту, чтобы подумать о том, за что ты благодарен",
  "Смотри в окно, наблюдая за жизнью вокруг",
  "Попробуй делать всё медленнее",
  "Замени критику себя на похвалу",
  "Запиши свои тревоги, чтобы освободить голову",
  "Танцуй, даже если никого нет рядом",
  "Слушай любимую музыку и подпевай",
  "Напиши старому другу, с которым давно не общал",
  "Найди смешное видео и посмейся от души",
  "Покорми птиц или белок в парке",
  "Собери коллекцию счастливых воспоминаний",
  "Разглядывай звезды ночью",
  "Придумай свой ритуал радости",
  "Позволь себе мечтать вслух",
  "Вспомни, что приносило тебе радость в детстве, и попробуй это снова",
  "Расставь приоритеты, чтобы не перегружать себя",
  "Попробуй йогу или растяжку",
  "Устрой вечер тишины и уюта",
  "Разбивай большие задачи на маленькие",
  "Пусть твой день начнется с глубокого вдоха",
  "Позволь себе хотя бы один день без спешки",
  "Веди дневник мыслей или настроения",
  "Научи себя говорить «нет»",
  "Прими, что ты не обязан всё успевать",
  "Пусть маленькие победы приносят тебе радость",
  "Прочитай вдохновляющую цитату",
  "Смотри документальный фильм о природе",
  "Найди новую книгу или подкаст",
  "Попробуй новый стиль в одежде",
  "Нарисуй свой идеальный день",
  "Начни учить что-то новое",
  "Посмотри на старые фотографии и вспомни, как ты вырос",
  "Напиши, кем ты хочешь быть через год",
  "Сфотографируй что-то, что делает тебя счастливым",
  "Доверяй себе – ты всегда знаешь, что делать"
];

// Массив с изображениями маримо
const images = [
  "https://i.postimg.cc/BZH665Wx/marimo-2.jpg",
  "https://i.postimg.cc/J0N4283T/marimo-1.jpg",
  "https://i.postimg.cc/kXygNngG/marimo-3.jpg",
  "https://i.postimg.cc/GmhhqZ4Q/marimo-4.jpg",
  "https://i.postimg.cc/TYxPWyGB/marimo-5.jpg"
];

// Случайные цвета для текста
const colors = ["#2e8b57", "#3cb371", "#20b2aa", "#98fb98", "#556b2f"];

// Счётчик и история
let adviceCounter = 0;
const adviceHistory = [];

// Функция для генерации случайного совета
function generateAdvice() {
  const username = document.getElementById("username").value || "друг";
  // Получаем случайный совет
  const randomAdvice = advices[Math.floor(Math.random() * advices.length)];
  const personalizedAdvice = `${randomAdvice}, ${username}!`;
  // Выбираем случайное изображение
  const randomImage = images[Math.floor(Math.random() * images.length)];

  // Выбираем случайный цвет текста
  const randomColor = colors[Math.floor(Math.random() * colors.length)];

  // Обновляем текст совета
  const adviceElement = document.getElementById("advice");
  adviceElement.style.opacity = 0; // Скрываем текст для анимации
  setTimeout(() => {
    adviceElement.textContent = personalizedAdvice;
    adviceElement.style.color = randomColor;
    adviceElement.style.opacity = 1; // Показываем текст
  }, 500);

  // Обновляем изображение маримо
  const marimoImage = document.getElementById("marimo-image");
  marimoImage.src = randomImage;

  // Воспроизводим звук
  const bubbleSound = document.getElementById("bubble-sound");
  bubbleSound.play();

  // Обновляем счётчик
  adviceCounter++;
  document.getElementById("counter").textContent = `Получено советов: ${adviceCounter}`;

  // Добавляем совет в историю
  adviceHistory.push(randomAdvice);
  const adviceList = document.getElementById("advice-list");
  const newListItem = document.createElement("li");
  newListItem.textContent = randomAdvice;
  adviceList.appendChild(newListItem);
}

// Функция для сброса счётчика и истории
function resetCounter() {
  adviceCounter = 0;
  document.getElementById("counter").textContent = "Получено советов: 0";

  adviceHistory.length = 0;
  const adviceList = document.getElementById("advice-list");
  adviceList.innerHTML = ""; // Очищаем список
}