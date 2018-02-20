import React from 'react';
import { BrowserRouter, Route} from 'react-router-dom';
import App from '../components/App.js'
import ClassesMainPage from '../components/ClassesMainPage.js'

const AppRouter = () => (
  <BrowserRouter>
    <div>
        <Route path="/" component={App}  exact={true} />
        <Route path="/course/:id" component={ClassesMainPage} />
    </div>
  </BrowserRouter>
);

export default AppRouter;
