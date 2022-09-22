import axios from "axios";

const weatherApi = axios.create({
  baseURL: 'https://api.hgbrasil.com',
  params: {
    key: '3d74bb2e'
  }
})

export default weatherApi