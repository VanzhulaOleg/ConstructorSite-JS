import { row, col } from "./utils";

function title(block) {
  const { tag, styles } = block.options;
  // const styles = block.options.styles;
  return row(
    col(`
      <${tag}>${block.value}<${tag}>
   `),
    styles
  );
}

function text(block) {
  return row(
    col(
      `
      <p>${block.value}</p>
   `,
      block.options.styles
    )
  );
}
function textColumns(block) {
  const html = block.value.map((item) => col(item));
  return row(html.join(""), block.options.styles);
}
function image(block) {
  const { alt, styles, imageStyles } = block.options;
  const html = `<img src="${block.value}" alt="${alt}" style="${imageStyles}" />`;
  return row(html, styles);
}

//export function (key:value)
export const templates = { title, text, textColumns, image };