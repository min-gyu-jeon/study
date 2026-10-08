import {NavLink, Outlet} from 'react-router-dom'

export default function RootRayout(){
    return(
        <>
        <nav>
            <NavLink to="/">홈</NavLink>
            &nbsp;&nbsp; &nbsp;&nbsp;
            <NavLink to="/saleschart">막대그래프 예제</NavLink>
            &nbsp;&nbsp; &nbsp;&nbsp;
            <NavLink to="/trendchart">선그래프 예제</NavLink>
            &nbsp;&nbsp; &nbsp;&nbsp;
            <NavLink to="/categorypiechart">파이그래프 예제</NavLink>
            &nbsp;&nbsp; &nbsp;&nbsp;
            <NavLink to="/weater">날씨 데이터 예제</NavLink>
        </nav>
        <hr />

        <Outlet/>
        </>
    )
}