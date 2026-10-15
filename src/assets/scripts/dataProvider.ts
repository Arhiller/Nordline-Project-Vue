import axios from "axios";
import * as Login from '@/components/modals/LoginModal.vue'
import {token, role, user} from '@/assets/scripts/auth'

interface CorrectRegisterForm {
    email: string,
    password: string,
    phone: string,
    role: "User" | "Admin" | "Manager"
}

export interface LoginResponse {
  token: string;
  role: string;
  user: {
        email: string;
        role: string;
        fullName: string;
        phone: string;
        createdAt: string;
    };
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

export async function loginUser(loginData: Login.LoginRequest) {
  try {
    const response = await axios.post('/api/user/login', loginData);

    if (response.data && response.data.token) {
      token.value = response.data.token;
      role.value = response.data.user.role;
      user.value = response.data.user; 
      return true;
    }
    return false;
  } catch (error) {
    console.log(error);
    return false;
  }
}