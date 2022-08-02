import React, { Component } from 'react'

export class Spinner extends Component {
  render() {
    return (
      <div>
         {/* <div className="spinner-wrapper">
          <div className="donut"></div>
        </div>  */}
        <div className="spinner-border text-success" role="status">
        <span className="sr-only">Loading...</span>
         </div>
      </div>
    )
  }
}

export default Spinner
