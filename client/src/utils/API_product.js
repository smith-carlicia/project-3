import axios from 'axios';
const productAPI = {
    findAllProducts: function() {
        return axios.get("/api/product");
    },
    createProduct: function(productData) {
        return axios.post("/api/product", productData)
    }
};

export default productAPI;