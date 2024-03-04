// script.js
function findGifts() {
  var age = document.getElementById("age").value;
  var recipient = document.getElementById("recipient").value;
  var occasion = document.getElementById("occasion").value;
  var interests = document.getElementById("interests").value;

  var giftListElement = document.getElementById("giftList");
  giftListElement.innerHTML = ""; // Очищаем список подарков

  // Получаем подарки на основе выбранных реквизитов
  var gifts = getGifts(age, recipient, occasion, interests);

  // Добавляем подарки в список
  gifts.forEach(function(gift) {
      var li = document.createElement("li");
      li.textContent = gift;
      giftListElement.appendChild(li);
  });
}

function getGifts(age, recipient, occasion, interests) {
  // Здесь можно использовать серверный запрос или статический список подарков
  // В этом примере я использовал статический список
  // Можно заменить на реальные данные, используя базу данных или API

  var gifts = [];

  if (age === "0-10") {
      gifts.push("Игрушка", "Книжка", "Конструктор");
  } else if (age === "11-20") {
      gifts.push("Спортивный инвентарь", "Модная одежда", "Гаджет");
  } else if (age === "21-30") {
      gifts.push("Книга", "Билеты на концерт", "Дизайнерская одежда");
  } else if (age === "31-40") {
      gifts.push("Кухонная утварь", "Спа-подарочный набор", "Аксессуары для отдыха");
  } else if (age === "41-50") {
      gifts.push("Ароматическая свеча", "Товары для сада", "Ювелирные украшения");
  } else if (age === "51+") {
      gifts.push("Подписка на журнал", "Комфортный халат", "Подарочный сертификат");
  }

  if (recipient === "Мужчины") {
      gifts.push("Устройство для барбекю", "Инструменты", "Эксклюзивный карманный нож");
  } else if (recipient === "Женщины") {
      gifts.push("Косметический набор", "Украшения", "Спа-услуги");
  } else if (recipient === "Дети") {
      gifts.push("Игрушка", "Спортивный инвентарь", "Книжка");
  } else if (recipient === "Пары") {
      gifts.push("Романтический ужин", "Совместная поездка", "Подарочный сертификат на спа");
  } else if (recipient === "Друзья") {
      gifts.push("Смешные носки", "Игра настольная", "Абонемент в спортзал");
  }

  if (occasion === "День рождения") {
      gifts.push("Праздничный торт", "Праздничные шары", "Сюрприз-подарок");
  } else if (occasion === "Юбилей") {
      gifts.push("Подарок с символикой юбилея", "Эксклюзивный подарок", "Путешествие");
  } else if (occasion === "Свадьба") {
      gifts.push("Сервиз для чая", "Коврик для ванной", "Подарочные деньги");
  } else if (occasion === "Новый год") {
      gifts.push("Набор для горячего шоколада", "Новогодние украшения", "Подарочная книга");
  } else if (occasion === "Другой") {
      gifts.push("Персонализированный подарок", "Нечто необычное", "Уникальный предмет интерьера");
  }

  if (interests === "Книги") {
      gifts.push("Лучший бестселлер года", "Классическая книга", "Аудиокнига");
  } else if (interests === "Спорт") {
      gifts.push("Набор для йоги", "Спортивный инвентарь", "Абонемент в фитнес-клуб");
  } else if (interests === "Технологии") {
      gifts.push("Умные часы", "Наушники", "Гаджет последней модели");
  } else if (interests === "Путешествия") {
      gifts.push("Компактный чемодан", "Путевой набор", "Путеводитель");
  } else if (interests === "Мода") {
      gifts.push("Аксессуары", "Модная одежда", "Уникальные дизайнерские вещи");
  }

  return gifts;
}