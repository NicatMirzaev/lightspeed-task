<template>
  <div class="a-card a-card--vertical-compact">
    <div class="a-card__paddings">
      <div class="toolbar">
        <button
          type="button"
          class="btn btn-default btn-medium"
          @click="exportProducts"
        >
          Export Products
        </button>
      </div>
      <div
        v-for="product in products"
        :key="product.id"
        class="list-element list-element--compact list-element--has-hover"
      >
        <div class="list-element__toggle">
          <input
            type="checkbox"
            class="list-element__toggle-checkbox"
            :id="product.id"
            :name="product.id"
            v-model="checkedIds"
          />
          <label :for="product.id" class="list-element__toggle-label"></label>
        </div>
        <div class="list-element__image">
          <img
            src="https://dpbfm6h358sh7.cloudfront.net/default-store/black_dress_160px.jpg"
          />
        </div>
        <div class="list-element__content">
          <div class="list-element__info">
            <div class="list-element__header">
              <div class="list-element__main-info">
                <div class="list-element__title">
                  <span>{{ product.name }}</span>
                </div>
                <div class="list-element__description">
                  <span class="muted">{{ product.sku }}</span>
                </div>
              </div>
              <div class="list-element__price">${{ product.price }}</div>
            </div>
          </div>
          <div class="list-element__actions">
            <div class="list-element__price">${{ product.price }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";

export default {
  name: "export-component",
  data() {
    return {
      products: [],
    };
  },

  setup() {
    const checkedIds = ref([]);

    return { checkedIds };
  },

  mounted() {
    this.fetchProducts();
  },

  methods: {
    fetchProducts() {
      fetch("http://localhost:3000/api/products")
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          this.products = data.items;
        })
        .catch((error) => {
          console.error("Error fetching products", error);
          this.products = [];
        });
    },
    exportProducts() {
      console.log(this.checkedIds);
    },
  },
};
</script>
