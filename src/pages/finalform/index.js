import React from 'react';
import { Form, Field } from 'react-final-form';
// import { FieldMetaState } from 'react-final-form'; //field 类型
import './index.css'

const onSubmit = (values) => {
  console.log('values:', values)
}
const FinalFormDemo = () => (
  <Form
    onSubmit={onSubmit}
    initialValues={{ firstname: 'liu' }}
    render={({ handleSubmit, form, submitting, values, pristine }) => (
      <form className='formDemo' onSubmit={handleSubmit}>
        <div>
          <label> First name</label>
          <Field
            name='firstname'
            component='input'
            type='text'
            placeholder='First name'
          />
        </div>
        <div>
          <label> Last name</label>
          <Field
            name='lastname'
            component='input'
            type='text'
            placeholder='Last name'
          />
        </div>
        <div>
          <label>secret</label>
          <Field name='secret'>
            {
              props => {
                console.log(props, props.input)
                return (<input {...props.input} />
                )
                // return null;
              }
            }
          </Field>
        </div>
        <div>
          <label>pet</label>
          <Field
            name='emanil'
            component='select'
          >
            <option value='cat'>🐱 cat</option>
            <option value='dog'>🐶 dog</option>

          </Field>
        </div>
        <div>
          <label>employed</label>
          <Field
            name='employed'
            component='input'
            type='checkbox'
          />
        </div>
        <div>
          <label>&nbsp;</label>
          <button type='submit'>submit</button>
          {/* <Button type='submit'>submit</Button> */}

        </div>
        <pre>{JSON.stringify(values, 0, 2)}</pre>
      </form>
    )}
  >
  </Form>
)
export default FinalFormDemo;