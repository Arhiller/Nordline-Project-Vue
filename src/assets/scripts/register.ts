import {ref} from 'vue'
import { registerUser } from './dataProvider'

interface RegisterForm {
    email: string,
    password: string,
    copyPassword: string,
    phone: string,
    fullName: string,
    role: "User" | "Admin" | "Manager"
}

const EMAIL_PATTERN = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const PHONE_PATTERN = /^(?:\+7|8)?\d{10}$/;

export function formatPhone(phone: string) {
  const cleaned = phone.replace(/\D/g, ''); 
  
  if (cleaned.length === 11 && (cleaned.startsWith('7') || cleaned.startsWith('8'))) {
    return '+7' + cleaned.slice(1);
  }
  if (cleaned.length === 10) {
    return '+7' + cleaned;
  }
  return phone;
}

export async function submitData(regData: RegisterForm){
  if(regData.email === '' || regData.password === '' || regData.phone === '' || regData.fullName === ''){
   alert("Не все поля заполнены")
   return
  } else{
    if(!EMAIL_PATTERN.test(regData.email)){
    alert("Некорректный email")
    return
    }

    if(regData.password !== regData.copyPassword){
      alert("Пароли не совпадают")
      return
    }
    
     if (!PHONE_PATTERN.test(regData.phone)) {
      alert("Некорректный формат номера телефона");
      return;
    }

    regData.phone = formatPhone(regData.phone);

    const {copyPassword, ...correctData} = regData

    const isSuccess = await registerUser(correctData)
    return isSuccess
  }  
}