import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Main from "./Main";
import TodoInfo from "./TodoInfo";



const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={ <Main /> }/>
        <Route path="/:id" element={ <TodoInfo /> }/>
      </Routes>
    </Router>
  );
}

export default App;
