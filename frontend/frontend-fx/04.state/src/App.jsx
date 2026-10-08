import Counter from "./component/Counter"
import EventHandler from "./component/EventHandler"
import EventHandler2 from "./component/EventHandler2"
import Profile from "./component/Profile"
import PostList from "./component/UserList"

function App() {

  return (
    <>
      <Counter />
      <hr />
      <Profile/>
      <hr />
      <EventHandler/>
      <hr />
      <EventHandler2/>
      <hr />
      <PostList/>
    </>
  )
}

export default App
