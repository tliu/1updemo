import React from 'react'
import FhirDosage from './elements/dosage.js'
import FhirEffectivePeriod from './elements/effectiveperiod.js'

export default class FhirMedicationStatement extends React.Component {

  render () {
    return (
      <div className='tile'>
        <h2 className='primarycolor' style={{display: 'inline-block'}}>
          <span>{typeof this.props.resource.medicationCodeableConcept.coding === "undefined" ? 
                  this.props.resource.medicationCodeableConcept.text :
                  this.props.resource.medicationCodeableConcept.coding[0].display}</span>
        </h2>
        &nbsp;&nbsp;&nbsp;
        <table>
          <tbody>
            {typeof this.props.resource.dosage === 'undefined' ? '':
              (<tr>
                <td><strong>Dosage</strong></td>
                <td>
                  {this.props.resource.dosage.map(function(dosage){
                    return <FhirDosage {...dosage} />
                  })}
                </td>
              </tr>)
            }

            {typeof this.props.resource.effectivePeriod === 'undefined' ? '':
              (<tr>
                <td><strong>Effective Period</strong></td>
                <td>
                  <FhirEffectivePeriod {...this.props.resource.effectivePeriod} />
                </td>
              </tr>)
            }

          </tbody>
        </table>
      </div>
    )
  }
}
