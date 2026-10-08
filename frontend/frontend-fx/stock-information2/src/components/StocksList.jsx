import { useState, useEffect } from 'react'
import axios from 'axios'

export default function StocksList(){
    const [stock,setStock]=useState([])
    useEffect(()=>{
        const url = "http://apis.data.go.kr/1160100/service/GetStockSecuritiesInfoServiceapis.data.go.kr/1160100/service/GetStockSecuritiesInfoService"
        const serviceKey ="CHANGE_ME"
        const numOfRows = 30
        const pageNo = 1
        const 
    })
    return(
        <>
        </>
    )
}