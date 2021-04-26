import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization:
      "Client-ID b7888d6147084f411e61f5966a098723bc6777e4ff0b3694780a40b4cbbf05a4"
  }
});
