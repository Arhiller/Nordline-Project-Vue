import { ref } from "vue";
import axios from "axios";
import * as Model from '@/assets/models'

export async function loadCities(){
    try{
        const response = await axios.get('/api/cities')
        return response.data
    } catch (error){
        console.log(`Ошибка получения данных с сервера: ${error}`)
        return []
    }
}