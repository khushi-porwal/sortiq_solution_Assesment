import axios from "axios";

const api = axios.create(() => {
    const baseUrl = "http://localhost:3000";
})

api.get("/get-product", (search="", category="", page="",limit=""),{
    params: {
        search:"",
        category:"",
        page:"",
        limit:""
    }
})