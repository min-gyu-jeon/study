import { useContext } from "react"
import {CommonContext} from "./CommonContext"


export default function Display(){

    const {appData}= useContext(CommonContext)  //commoncontext로 관리되는 공유저장소를 변수에 저장

    return(
        <>
            <div>{appData.count}</div>
            <div>{appData.name}</div>
            <div>{appData.email}</div>
        </>
    )
}