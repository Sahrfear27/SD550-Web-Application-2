import axios from "axios";

export default axios.create({
    baseURL:"http://localhost:7001/",
      // Header is optional
      headers:{
        "Content-Type":"application/json"
    },
    params:{id:""}
})
