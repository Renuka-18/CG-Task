import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import ListBookComponent from './components/ListBookComponent';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import CreateBook from './components/CreateBook';
import UpdateBookComponent from './components/UpdateBookComponent';
import ViewBookComponent from './components/ViewBookComponent';
 



function App() {
  return (
      <div>
        <Router>
            <div className='container'>
                <HeaderComponent />
                    <div className="container">
                        <Switch>
                          <Route path="/" exact component = {ListBookComponent}></Route>
                          <Route path="/books" component = {ListBookComponent}></Route>
                          <Route path="/add-books/:id"  component ={CreateBook}></Route>
                          <Route path="/view-books/:id"  component ={ViewBookComponent}></Route>

                          <Route path="/update-books/:id"  component ={UpdateBookComponent}></Route>
                        </Switch>
                      </div>
                      <FooterComponent />
            </div>
        </Router>
      </div>
    
  );
}

export default App;
