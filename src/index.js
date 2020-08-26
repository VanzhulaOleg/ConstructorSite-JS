import { model, arrDataColumns } from "./model";
import { Site } from "./classes/site";
import { Sidebar } from "./classes/sidebar";
import "./styles/main.css";

const site = new Site("#site");

const updateCallback = (newBlock) => {
  newBlock.constructor.name !== "TextColumnsBlock"
    ? model.push(newBlock)
    : arrDataColumns.push(newBlock.value);

  site.render(model);
};

new Sidebar("#panel", updateCallback);

site.render(model);
