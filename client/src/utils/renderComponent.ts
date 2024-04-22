import { render, h } from "vue";
import Products from "../components/Products.vue";

export function renderComponent(el: HTMLElement, data: any) {
  const vueComponent = h(Products, data);
  render(vueComponent, el);
}
