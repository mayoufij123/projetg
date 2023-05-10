import axios from 'axios'
export const fetchContacts = async() => {
    const { data } = await axios.get('http://localhost:5000/authe/user/getuser')
    return data

}
export const DeleteContact = async(id) => {
    const deleteduser = await axios.delete(`http://localhost:5000/authe/user/deleteuser/${id}`)

}