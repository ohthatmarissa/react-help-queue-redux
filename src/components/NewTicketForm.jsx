import React from 'react';
import { v4 } from 'uuid';
import PropTypes from 'prop-types';


function NewTicketForm(props){
  let _names = null;
  let _location = null;
  let _issue = null;

  function handleNewTicketFormSubmission(event) {
    event.preventDefault();
    props.onNewTicketCreation({names: _names.value, location: _location.value, issue:_issue.value, id: v4()});
    _names.value = '';
    _location.value = '';
    _issue.value = '';
  }

  NewTicketForm.propTypes = {
    onNewTicketCreation: PropTypes.func
  };

  return (
    <div>
      <style jsx global>{`
            div {
                background-color: pink;
            }
        `}</style>
      <form onSubmit={handleNewTicketFormSubmission}> 
        <input 
          type="text"
          id='names'
          placeholder='Pair Names'
          ref={(input) => {_names = input;}}/>__
        <input 
          type="text"
          id='location'
          placeholder='Location'
          ref={(input) => {_location = input;}}/>__
        <textarea
          id="issue" 
          placeholder='Describe your issue'
          ref={(textarea) => {_issue = textarea;}}/>__
        <button type='submit'>Help!</button>
      </form>
    </div>
  );
}

export default NewTicketForm;