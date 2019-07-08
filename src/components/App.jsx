import React from 'react';
import NewTicketControl from './NewTicketControl';
import Header from './Header';
import { Switch, Route } from 'react-router-dom';
import TicketList from './TicketList';
import Error404 from './Error404';
import Admin from './Admin';




class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      masterTicketList: [],
      selectedTicket: null
    };
    this.handleAddingNewTicketToList = this.handleAddingNewTicketToList.bind(this);
    this.handleChangingSelectedTicket = this.handleChangingSelectedTicket.bind(this);
  }

  handleAddingNewTicketToList(newTicket) {
    var newMasterTicketList = this.state.masterTicketList.slice();
    newTicket.formattedWaitTime = newTicket.timeOpen.fromNow(true);    
    newMasterTicketList.push(newTicket);
    this.setState({masterTicketList: newMasterTicketList});
  }

  componentDidMount() {
    this.waitTimeUpdateTimer = setInterval(() =>
      this.updateTicketElapsedWaitTime(),
    60000
    );
  }

  componentWillUnmount() {
    clearInterval(this.waitTimeUpdateTimer);
  }

  updateTicketElapsedWaitTime() {
    console.log('Check');
    let newMasterTicketList = this.state.masterTicketList.slice();
    newMasterTicketList.forEach((ticket) =>
      ticket.formattedWaitTime = (ticket.timeOpen).fromNow(true)
    );
    this.setState({masterTicketList: newMasterTicketList});
  }

  handleChangingSelectedTicket(ticket){
    this.setState({selectedTicket: ticket});
    
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
          <Route path='/admin' render={(props)=><Admin ticketList={this.state.masterTicketList} currentRouterPath={props.location.pathname}
          onTicketSelection={this.handleChangingSelectedTicket}
          selectedTicket={this.state.selectedTicket}/>} />
          <Route component={Error404} />
        </Switch>
      </div>
    );
  }
}

export default App;

