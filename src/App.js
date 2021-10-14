import { Link, Redirect, Route, Switch } from "react-router-dom";

import { Form, Home, Todos } from "./components";

export default function App() {
  return (
      <div>
        <Link to={'/home'}>Home</Link>
        <Link to={'/createTodo'}>Create todo form</Link>
        <Link to={'/todos'}>Todos</Link>

        <Switch>
          <Route path={'/home'} component={Home}/>
          <Route path={'/createTodo'} component={Form}/>
          <Route path={'/todos'} component={Todos}/>

          <Redirect to={'/home'}/>
        </Switch>
      </div>
  );
}
