import React from 'react'

export default class FhirEffectivePeriod extends React.Component {

  render () {
    return (
      <div style={{display: 'inline-block', width: '24rem'}}>
        {typeof this.props.start === "undefined" ? "" : 
          <div>start: {this.props.start}</div>}
        {typeof this.props.end === "undefined" ? "" : 
          <div>end: {this.props.end}</div>}
      </div>
    )
  }
}
