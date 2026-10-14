import axios from "axios";

interface CorrectRegisterForm {
    email: string,
    password: string,
    phone: string,
    role: "User" | "Admin" | "Manager"
}

export async function loadCities(){
    try{
        const response = await axios.get('/api/cities')
        return response.data
    } catch (error){
        console.log(`Ошибка получения данных с сервера: ${error}`)
        return []
    }
}

export async function loadReviews() {
    try{
        const response = await axios.get('/api/reviews')
        return response.data
    } catch (error){
        console.log(`Ошибка получения данных с сервера: ${error}`)
        return []
    }
}

export async function registerUser(regData: CorrectRegisterForm) {
    try{
        const response = await axios.post('/api/user/register', regData)
        return true
    } catch (error){
        console.log(error)
        return false
    }
}