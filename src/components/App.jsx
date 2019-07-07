import React from 'react';
import NewTicketControl from './NewTicketControl';
import Header from './Header';
import { Switch, Route } from 'react-router-dom';
import TicketList from './TicketList';
// import icecream1 from './assets/images/icecream1.jpg';


class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      masterTicketList: []
    };
    this.handleAddingNewTicketToList = this.handleAddingNewTicketToList.bind(this);
  }

  handleAddingNewTicketToList(newTicket) {
    var newMasterTicketList = this.state.masterTicketList.slice();
    newMasterTicketList.push(newTicket);
    this.setState({masterTicketList: newMasterTicketList});
  }

  render() {
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
          <Route exact path='/' render={()=><TicketList ticketList={this.state.masterTicketList} />} />
            <Route path='/newticket' render={()=><NewTicketControl onNewTicketCreation={this.handleAddingNewTicketToList} />} />
        </Switch>
      </div>
    );
  }
}

export default App;

