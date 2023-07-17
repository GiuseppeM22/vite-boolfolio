import {reactive} from 'vue'

export const store = reactive({
    apiUrl: "http://localhost:8000/api/prova",
    products: [],
    lastPage: 0,
    loading: true
});