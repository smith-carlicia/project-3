import axios from "axios";
const userAPI = {
  findUserById: function (id) {
    return axios.get("/api/user/" + id);
  },
  createUser: function (userData) {
    return axios.post("/api/user", userData);
  },
  updateUser: function (id, userData) {
    return axios.put("/api/user/" + id, userData)
  },
};

export default userAPI;