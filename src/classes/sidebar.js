import { TextBlock, TitleBlock, TextColumnsBlock } from "./blocks";

export class Sidebar {
  constructor(selector, update) {
    this.$el = document.querySelector(selector);
    this.update = update;

    this.init();
  }

  init() {
    this.$el.addEventListener("submit", this.addBlock.bind(this));
    this.$el.innerHTML = this.template;
  }

  get template() {
    return [block("text"), block("title"), block("column")].join("");
  }

  addBlock(event) {
    event.preventDefault();

    const type = event.target.name;
    const value = event.target.value.value;
    const styles = event.target.styles.value;

    const Constructor =
      type === "text"
        ? TextBlock
        : type === "title"
        ? TitleBlock
        : TextColumnsBlock;
    const newBlock = new Constructor([value], { styles }, type);
    this.update(newBlock);

    event.target.value.value = "";
    event.target.styles.value = "";
  }
}

function block(type) {
  let visible = true;
  type === "column" ? (visible = "none") : (visible = "block");

  return `
    <form name="${type}">
      <h5>${type}</h5>
      <div class="form-group">
        <input class="form-control form-control-sm" name="value" placeholder="value">
      </div>
      <div class="form-group" style="display:${visible}">
        <input class="form-control form-control-sm" name="styles" placeholder="styles">
      </div>
      <button type="submit" class="btn btn-primary btn-sm">Добавить</button>
    </form>
    <hr />
  `;
}
