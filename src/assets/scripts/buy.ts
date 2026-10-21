import { ref, reactive } from "vue";
import * as Model from '@/assets/models'
import { type BookingsHistory } from "./dataProvider";

export const citiesList = ref<Model.Cities[]>([])
export const airportsList = ref<Model.Airports[]>([])

export const buyForm = reactive({
    passport: '',
    cardNumber: '',
    date: null,
    cityFrom: '',
    cityTo: '',
})

export const getRandomInt = (min: number, max: number) => {
    return Math.floor(Math.random() * (max - min + 1)) + min
}

export const generatePNR = () => {
    return Math.random().toString(36).substring(2, 8).toUpperCase()
}

