import image from "./assets/bird.png";
import {
  TitleBlock,
  ImageBlock,
  TextBlock,
  TextColumnsBlock,
} from "./classes/blocks";
import { css } from "./utils";
export const arrDataColumns = [
  "приложения на чистом JS, без использования библиотек",
  "присутствуют принципы SOLID и ООП",
  "JavaScript -это интересно",
  "можно создать любой интерфейс своими руками",
];
const text = `JavaScript — мультипарадигменный язык программирования. Поддерживает объектно-ориентированный, императивный и функциональный стили. Является реализацией стандарта ECMAScript. JavaScript обычно используется как встраиваемый язык для программного доступа к объектам приложений.
`;
export const model = [
  new TitleBlock("Конструктор сайтов на чистом JavaScript", {
    tag: "h2",
    styles: css({
      background: "linear-gradient(to bottom, #007bff, #5f88b3)",
      "text-align": "center",
    }),
  }),
  new ImageBlock(image, {
    styles: "padding: 2rem; display:flex; justify-content:center ",
    imageStyles: "width:auto; height:50vh",
    alt: "my image",
  }),
  new TextBlock(text, {
    styles: "background: darkgrey; color:white; text-align:center; font-size:1.2rem",
  }),

  new TextColumnsBlock(arrDataColumns, {
    styles:
      "background: linear-gradient(to bottom, #007bff, #5f88b3); padding: 1rem; font-weight: bold; text-align:center;",
  }),
];
