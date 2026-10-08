export default function IncreaseBtn({setCount}) {
    return (
        <>
            <button onClick={
                () => setCount((prevStateValue) => prevStateValue + 1) 
            }>증가</button>
        </>
    )
}