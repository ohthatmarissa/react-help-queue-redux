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
  console.log(props.ticketList);
  return (
    <div>
      <hr/>
      {props.ticketList.map((ticket, index) => 
        <Ticket names={ticket.names}
          location={ticket.location}
          issue={ticket.issue}
          key={index}/>
      )}
    </div>
  );
}

TicketList.PropTypes = {
  ticketList: PropTypes.array
}

export default TicketList;
