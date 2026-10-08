import DecreaseBtn from "./component/DecreaseBtn"
import IncreaseBtn from "./component/IncreaseBtn"
import Display from "./component/Display"
import { CommonContext } from "./component/CommonContext"
import { useState } from "react"


export default function App() {

  const [appData, setAppData]= useState({ 
    count: 0, 
    name: "John Doe", 
    email: "johndoe@example"
  })

  //json에서 이름과 값에 핟당된 식별자(변수이름이나 함수이름)가 같을때 축약 가능
  //{appData:appData, setAppData:setAppData} -> {appData,setAppData}
  return (
    <CommonContext.Provider value={{appData:appData, setAppData:setAppData}}>  {/*CommonContext 공유 저장소에 데이터 저장 +사용범위 결정*/}
      <table>
        <tr>
          <th colSpan={2}>
            <Display />
          </th>
        </tr>
        <tr>
          <td><DecreaseBtn /></td>
          <td><IncreaseBtn /></td>
        </tr>
        
      </table>
      </CommonContext.Provider>
      )
}
