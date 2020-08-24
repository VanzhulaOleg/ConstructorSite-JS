import image from "./assets/bird.png";
const text = `О, если ты спокоен, не растерян,
Когда теряют головы вокруг,
И если ты себе остался верен,
Когда в тебя не верит лучший друг,

И если ждать умеешь без волненья,
Не станешь ложью отвечать на ложь,
Не будешь злобен, став для всех мишенью,
Но и святым себя не назовешь, -

И если ты своей владеешь страстью,
А не тобою властвует она,
И будешь тверд в удаче и в несчастье,
Которым в сущности цена одна,

И если ты готов к тому, что слово
Твое в ловушку превращает плут,
И, потерпев крушенье, можешь снова-
Без прежних сил – возобновить свой труд, -

И если ты способен все, что стало
Тебе привычным, выложить на стол,
Все проиграть и все начать сначала,
Не пожалев того, что приобрел,

И если можешь сердце, нервы, жилы
Так завести, чтобы вперед нестись,
Когда с годами изменяют силы
И только воля говорит: “держись!” -

И если можешь быть в толпе собою,
При короле с народом связь хранить
И, уважая мнение любое,
Главы перед молвою не клонить,

И если будешь мерить расстоянье
Секундами, пускаясь в дальний бег ,-
Земля – твое, мой мальчик, достоянье.
И более того, ты – человек!`;
export const model = [
  {
    type: "title",
    value: "Конструктор сайтов на чистом JavaScript",
    options: {
      tag: "h2",
      styles: "background: darkgreen; text-align:center;",
    },
  },
  {
    type: "image",
    value: image,
    options: {
      styles: "padding: 2rem; display:flex; justify-content:center ",
      imageStyles: "width:auto; height:500px",
      alt: "my image",
    },
  },
  {
    type: "text",
    value: text,
    options: { styles: "background: garkblue; color:darkgrey" },
  },
  {
    type: "textColumns",
    value: [
      "приложения на чистом JS, без использования библиотек",
      "присутствуют принцыпи SOLID и ООП",
      "JavaScript -это интересо",
      "можна создавть любой ьинтерфей своими руками",
    ],
    options: {
      styles:
        "background: linear-gradient(to bottom, #007bff, #5f88b3); padding: 1rem; font-weight: bold; text-align:center;",
    },
  },
];