import axios from 'axios'

export const postContact = async(values)=>{
    const addingUSer = await axios.post('http://localhost:5000/authe/user/signup',{...values})
}
export const fetchAccount =async()=>{
    const token=localStorage.getItem('token');
    const {data} = await axios.get('http://localhost:5000/authe/user/getaUser',{headers:{Authorization:token}} );
    return data 
}