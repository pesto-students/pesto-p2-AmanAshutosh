import '../CSS/Room.css'
import React from 'react'
import { connect } from 'react-redux';
import {mapStateToProps, mapDispatchToProps} from '../redux/Room/dispatch'

function Room(props) {
  return (
    <div className={props.text}>
        {/* Using props to apply toggle onClick and display text message*/}
        <div>Lights are: {props.text}</div>
        <button className={`btn-${props.text}`} onClick={props.toggle}>Switch</button>
    </div>
  )
}

// exporting react component connected with redux
export default connect(mapStateToProps, mapDispatchToProps)(Room)