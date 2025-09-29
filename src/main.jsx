import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import axios from 'axios'

// axios.interceptors.request.use((req)=>{
//     console.log("req",req)
//     return req
// })

// axios.interceptors.response.use((res)=>{
//     console.log("res",res)
//     return res
// })

createRoot(document.getElementById('root')).render(
    <App />
)
