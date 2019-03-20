import React from 'react'

export default class FhirDosage extends React.Component {

  render () {
    return (
      <div style={{display: 'inline-block', width: '24rem'}}>
        <div>{this.props.text}</div>
      </div>
    )
  }
}
