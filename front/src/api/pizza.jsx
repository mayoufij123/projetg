import axios from 'axios'
export const fetchPizza = async()=>{
    const {data}=  await axios.get('http://localhost:5000/api/pizza/getpizza')
    return data

}
export const PostPizza= async(values)=>{

    console.log("values")
    console.log(values)

    const addingContact= await axios.post('http://localhost:5000/api/pizza/addpizza',{...values})
}


    export const updatepizzas=async(id,values)=>{
        const update=await axios.put(`http://localhost:5000/api/pizza/updatepizza/${id}`,values)
    }
    export const getUniquepizzar=async (id,values)=>{

        const {data}= await axios.get(`http://localhost:5000/api/pizza/getpizza/${id}`,values)
        return data
    }
