import axios from "axios";
const getProductsApi = "https://api.myjson.com/bins/qhnfp";
export default {
    getAllProducts: () => axios.get(getProductsApi)
}