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
            v-model="checkedIds[product.id]"
          />
          <label :for="product.id" class="list-element__toggle-label"></label>
        </div>
        <div class="list-element__image">
          <img :src="product.originalImage.url" />
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
import { useToast } from "vue-toast-notification";

// import { ref } from "vue";

export default {
  name: "export-component",
  data() {
    return {
      products: [],
      checkedIds: [],
    };
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
          console.log(data.items);
        })
        .catch((error) => {
          const $toast = useToast();
          $toast.error("Error fetching products: " + error.message, {
            position: "top-right",
          });
          this.products = [];
        });
    },
    async exportProducts() {
      const ids = Object.keys(this.checkedIds).filter(
        (key) => this.checkedIds[key] === true,
      );

      const $toast = useToast();

      if (!ids.length) {
        $toast.error("Please select products", { position: "top-right" });
        return;
      }

      try {
        const response = await fetch(
          "http://localhost:3000/api/products/export",
          {
            headers: {
              "Content-Type": "application/json",
            },
            method: "POST",
            body: JSON.stringify({ ids }),
          },
        );

        const blob = await response.blob();
        const url = window.URL.createObjectURL(new Blob([blob]));
        const link = document.createElement("a");
        link.href = url;
        link.setAttribute("download", "products.xlsx");
        document.body.appendChild(link);
        link.click();

        window.URL.revokeObjectURL(url);
        document.body.removeChild(link);
      } catch (error) {
        $toast.error(error.message, { position: "top-right" });
      }
    },
  },
};
</script>
