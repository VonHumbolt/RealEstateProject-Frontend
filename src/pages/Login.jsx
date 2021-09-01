import { Form, Formik } from 'formik'
import React from 'react'
import EstateTextInput from '../utilities/customFormControl/EstateTextInput'
import * as yup from "yup"
import { Facebook, Google } from 'react-bootstrap-icons'

export default function Login() {

    const initialValues = {
        email:"",
        password:""
    }

    const schema = yup.object({
        email: yup.string().email().required("Enter your email"),
        password: yup.string().required("Enter your password")
    })

    return (
        <div className="container p-5" style={{height:"100vh"}}>

            <div className="row justify-content-center">
               
                <div className="card border-dark " style={{width:"30rem"}}>
                    <div className="card-body">
                        <Formik
                            initialValues={initialValues}
                            validationSchema={schema}
                            onSubmit={(values) => {
                                console.log(values)
                            }}>
                            <Form>

                                <h3 className="card-title text-sm-center mt-3">Login With Your Account</h3>

                                <div className="mt-5 mb-3">
                                    <EstateTextInput name="email" placeholder="Email Address" type="text" className="form-control"></EstateTextInput>
                                </div>

                                <div className="mb-4">
                                    <EstateTextInput name="password" placeholder="Password" type="password" className="form-control" />
                                </div>

                                <div class="d-grid gap-2 mb-4">
                                    <button class="btn btn-secondary" type="submit">Login</button>
                                </div>

                            </Form>

                        </Formik>
                        <hr />

                        
                        <div class="d-grid gap-2 mb-3">
                            <button class="btn btn-primary" type="button">Continue With Facebook <Facebook/> </button>
                            <button class="btn btn-danger" type="button">Continue With Google <Google /> </button>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    )
}
