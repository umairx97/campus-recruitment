const axios = require("axios");

axios.get("http://localhost:3002/api/users").then(res => {
  console.log(res.data);
});
