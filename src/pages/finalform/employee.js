import React from 'react';
import { Field } from 'react-final-form';

const Employee = ({ change }) => {
  const changeField = (e) => {
    // console.log('employee changed', e.target.checked)
    change('firstname', '')
    change('employed', e.target.checked)
  }
  return (
    <div>

      <Field name='employed'>
        {
          props => (
            <>
              <label>employed</label>
              <input
                type='checkbox'
                {...props.input}
                onChange={changeField}
              />
            </>
          )
        }
      </Field>
    </div>
  )
}
export default Employee;