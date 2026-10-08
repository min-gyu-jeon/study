import { useEffect, useRef, useState } from "react"

export default function EffectDemo(){

    const [randNumber1, setRandNumber1] =useState(0)
    const [randNumber2, setRandNumber2] =useState(0)

    //useRef : usestate 처럼 변수를 만드는데 차이는 변경함수가 별도로 존재하지 않고 값의 변경이 렌더링을 촉발하지 않음
    const isMounted = useRef(false)  

    useEffect(()=>{
        if(isMounted ==true){
            console.log(`무작위 난수 1의 값이 변경 되었습니다. ${new Date()}`);
        }
        isMounted.current =true;
    },[randNumber1])
    useEffect(()=>{
        console.log(`무작위 난수 2의 값이 변경 되었습니다. ${new Date()}`);

        //리턴되는 함수는 
        // 1. randNumber2의 값이 변경으로 인해 useEffect에 지정된 함수가 호출되기 전 
        // 2. 컴포넌트가 업마운트될 때 호출됨
        return () => console.log("무작위 난수 2와 관련된 클린업 함수가 호출되었습니다.")
    
    },[randNumber2])
    useEffect(()=>{
        console.log(`무작위 난수 1또는2의 값이 변경 되었습니다. ${new Date()}`);
    })
    useEffect(()=>{
        console.log(`컴포넌트가 마운트될 때 한 번만 호출됩니다. ${new Date()}`);
    },[])
    return(
        <>
            <h2>이펙트 연습</h2>
            <button onClick={()=> {
                const n= Math.floor(Math.random()*900+100)
                setRandNumber1(n)
                }} >새 번호 만들기1</button>

                <button onClick={()=> {
                const n= Math.floor(Math.random()*900+100)
                setRandNumber2(n)
                }} >새 번호 만들기2</button>

            <h2>{randNumber1}</h2>
            <h2>{randNumber2}</h2>
        </>
    )
}