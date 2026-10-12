import axios from "axios";

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