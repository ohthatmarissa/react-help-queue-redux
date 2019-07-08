import React from 'react';
import Ticket from './Ticket';
import PropTypes from 'prop-types';

// var MasterTicketList = [
//   {
//     names: 'Sweetie and Booger',
//     location: '3b',
//     issue: 'This shit is cray'
//   },
//   {
//     names: 'Bob and Slob',
//     location: '6c',
//     issue: 'Image won\'t show'
//   },
//   {
//     names: 'Bonnie and Clyde',
//     location: '1a',
//     issue: 'These lessons are bologne'
//   }
  
// ];


function TicketList(props) {
  return (
    <div>
      <hr/>
      {props.ticketList.map((ticket) => 
        <Ticket names={ticket.names}
          location={ticket.location}
          issue={ticket.issue}
          formattedWaitTime={ticket.formattedWaitTime}
          currentRouterPath={props.currentRouterPath}
          key={ticket.id}/>
      )}
    </div>
  );
}

TicketList.PropTypes = {
  ticketList: PropTypes.array
};

export default TicketList;
