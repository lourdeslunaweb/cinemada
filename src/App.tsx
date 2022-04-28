import 'bootswatch/dist/cyborg/bootstrap.min.css'
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { AdminPage, DetailPage, HomePage, LoginPage, MoviesPage, SeriesPage, SignUpPage, UsersPage } from './pages';


const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/admin/:page" component={AdminPage} />
        <Route path="/detail/:id" component={DetailPage} />
        <Route path="/login" component={LoginPage} />
        <Route path="/peliculas" component={MoviesPage} />
        <Route path="/series" component={SeriesPage} />
        <Route path="/sign-up" component={SignUpPage} />
        <Route path="/users" component={UsersPage} />
        <Route path="/" component={HomePage} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
