import axios from 'axios'
export const fetchPizza = async()=>{
    const {data}=  await axios.get('http://localhost:5000/api/pizza/getpizza')
    return data

}