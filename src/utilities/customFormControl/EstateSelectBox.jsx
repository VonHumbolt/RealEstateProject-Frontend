import { useField, Field } from 'formik'
import React from 'react'

export default function EstateSelectBox({...props}) {

    const [field, meta] = useField(props)

    return (
        <div>
            <Field as="select" {...field} {...props} >
            
                <option value="" default hidden>{props.placeholder}</option>
                {props.options.map(option => {
                    return (
                        <option key={option.key} value={option.key}>
                            {option.value}
                        </option>
                    )
                })}
            </Field>

            {meta.touched && !!meta.error ? (
                <label className="p-2" style={{color:"red"}}> * {meta.error} </label>
            ) : null}

        </div>
    )
}
