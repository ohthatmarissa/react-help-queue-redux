import React from 'react';
import NewTicketControl from './NewTicketControl';
import Header from './Header';
import { Switch, Route } from 'react-router-dom';
import TicketList from './TicketList';
// import icecream1 from './assets/images/icecream1.jpg';


function App() {
  return(
    <div>
       <style jsx global>{`
            div {
                background-color: purple;
                color: white;
                text-align: center;
            }
            a {
              color: white;
            }
        `}</style>
      <Header/>
      <Switch>
        <Route exact path='/' component={TicketList} />
        <Route path='/newticket' component={NewTicketControl} />
      </Switch>
    </div>
  );
}

export default App;

