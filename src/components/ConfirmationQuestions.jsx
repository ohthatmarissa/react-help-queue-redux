import React from 'react';
import PropTypes from 'prop-types';

function ConfirmationQuestions(props){
    return (
        <div>
            <p>Have you gone through all of the steps in the debugging lessons?</p>
            <button onClick={props.onTroubleShootingConfirmation}>Yes</button>
        </div>
    );
}

ConfirmationQuestions.propTypes = {
    onTroubleShootingConfirmation: PropTypes.func
};

export default ConfirmationQuestions;