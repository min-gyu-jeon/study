// function Greeting(props) {
//   return <h2>안녕하세요, ({props.age}세){props.name}!</h2>;
// }

// function Greeting(props) {
//     const { age, name } = props;
//     return <h2>안녕하세요, ({age}세){name}!</h2>;
// }

function Greeting({age,name}) {
    return <h2>안녕하세요, ({age}세){name}!</h2>;
}
export default Greeting;