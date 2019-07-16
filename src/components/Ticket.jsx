import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';


function Ticket(props){

  function handleSavingSelectedTicket(ticketId){
    const { dispatch } = props;
    const action = {
      type: 'SELECT_TICKET',
      ticketId: ticketId
    };
    dispatch(action);
  }
  const ticketInformation =
      <div className="ticketonly">
        <style jsx global>{`
            div.ticketonly {
                background-color: pink;
            }
        `}</style>
        <h3>{props.location}-{props.names}</h3>
        <h4>{props.formattedWaitTime} ago</h4>
        <h3>{props.issue}</h3>
        <br></br>
        <hr/>
      </div>;
  if (props.currentRouterPath === '/admin'){
    return (
      <div onClick={() => {handleSavingSelectedTicket(props.ticketId);}}>
        {ticketInformation}
      </div>
    );
  } else {
    return (
      <div>
        {ticketInformation}
      </div>
    );
  }
}

Ticket.propTypes = {
  names: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  issue: PropTypes.string,
  formattedWaitTime: PropTypes.string.isRequired,
  currentRouterPath: PropTypes.string,
  onTicketSelection: PropTypes.func
};

export default connect()(Ticket);