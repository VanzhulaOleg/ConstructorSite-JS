import image from "./assets/bird.png";
import {
  TitleBlock,
  ImageBlock,
  TextBlock,
  TextColumnsBlock,
} from "./classes/blocks";
const text = `О, если ты спокоен, не растерян,
Когда теряют головы вокруг,
И если ты себе остался верен,
Когда в тебя не верит лучший друг,

И если ждать умеешь без волненья,
Не станешь ложью отвечать на ложь,
Не будешь злобен, став для всех мишенью,
Но и святым себя не назовешь, -
`;
export const model = [
  new TitleBlock("Конструктор сайтов на чистом JavaScript", {
    tag: "h2",
    styles: "background: linear-gradient(to bottom, #007bff, #5f88b3); text-align:center;",
  }),
  new ImageBlock(image, {
    styles: "padding: 2rem; display:flex; justify-content:center ",
    imageStyles: "width:auto; height:50vh",
    alt: "my image",
  }),
  new TextBlock(text, {
    styles: "background: garkblue; color:darkgrey",
  }),

  new TextColumnsBlock(
    [
      "приложения на чистом JS, без использования библиотек",
      "присутствуют принципы SOLID и ООП",
      "JavaScript -это интересно",
      "можно создавть любой интерфейc своими руками",
    ],
    {
      styles:
        "background: linear-gradient(to bottom, #007bff, #5f88b3); padding: 1rem; font-weight: bold; text-align:center;",
    }
  ),
];
