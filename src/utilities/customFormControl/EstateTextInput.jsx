import { Field, useField } from 'formik'
import React from 'react'

export default function EstateTextInput({...props}) {

    const[field, meta] = useField(props)

    return (
        <div>

            <Field {...props} />

            {meta.touched && !!meta.error ? (
                <label className="p-2" style={{color:"red"}}> * {meta.error} </label>
            ) : null}

        </div>
    )
}
