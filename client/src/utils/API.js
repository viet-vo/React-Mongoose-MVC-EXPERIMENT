import axios from "axios";

export default {
    getTests: () => {
        return axios.get("/api/testData/");
    },
    getTest: function(id) {
        return axios.get("/api/testData/" + id);
    },
    saveTest: function(userData) {
        return axios.post("/api/testData/", userData);
    },
    getUsers: () => {
         return axios.get("/user/user/");
    },
    submitUser: function(userData) {
        return axios.post("/user/user/", userData);
    },
    getUsersLogin: () => {
        return axios.get("/auth/check/");
    },
    checkAuth: (creds) => {
        return axios.post("/auth/check/", creds);
    },
}