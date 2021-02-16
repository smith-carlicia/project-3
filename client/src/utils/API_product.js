import axios from "axios";
const productAPI = {
  findAllProducts: function () {
    return axios.get("/api/product");
  },
  createProduct: function (productData) {
    return axios.post("/api/product", productData);
  },
  deleteProduct: function (id) {
    return axios.delete("/api/product/" + id)
  }
};

export default productAPI;
