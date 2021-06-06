import axios from 'axios';

export default  axios.create({
    baseURL:'https://developers.zomato.com/api/v2.1',
    headers:{
        "user-key":"c97e1ad25a0da0cde972d7e763995c41"
    }
})