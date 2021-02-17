import axios from "axios";
const productAPI = {
  findAllProducts: function () {
    return axios.get("/api/product");
  },
  findProductById: function (id) {
    return axios.get("/api/product/" + id);
  },
  createProduct: function (productData) {
    return axios.post("/api/product", productData);
  },
  deleteProduct: function (id) {
    return axios.delete("/api/product/" + id)
  },
  updateProduct: function (id, productData) {
    return axios.put("/api/product/" + id, productData)
  },
};

export default productAPI;
