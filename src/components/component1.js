import React from 'react'

import PropTypes from 'prop-types'

import './component1.css'

const Component1 = (props) => {
  return (
    <div className="component1-container">
      <input
        type="text"
        placeholder="Message"
        className="component1-textinput input"
      />
      <input
        type="text"
        placeholder="Phone"
        className="component1-textinput1 input"
      />
      <input
        type="text"
        placeholder="Email"
        className="component1-textinput2 input"
      />
      <input
        type="text"
        placeholder={props.textinputPlaceholder3}
        className="component1-textinput3 input"
      />
      <input
        type="text"
        placeholder={props.textinputPlaceholder2}
        className="component1-textinput4 input"
      />
      <button type="button" className="component1-button button">
        {props.button}
      </button>
    </div>
  )
}

Component1.defaultProps = {
  textinputPlaceholder2: 'First Name',
  textinputPlaceholder1: 'placeholder',
  textinputPlaceholder: 'Submit',
  textinputPlaceholder3: 'Last Name',
  button: 'Submit',
}

Component1.propTypes = {
  textinputPlaceholder2: PropTypes.string,
  textinputPlaceholder1: PropTypes.string,
  textinputPlaceholder: PropTypes.string,
  textinputPlaceholder3: PropTypes.string,
  button: PropTypes.string,
}

export default Component1
