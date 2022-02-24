import React from 'react'
import {Formik, Form} from 'formik'
import * as yup from "yup"
import EstateTextInput from '../../utilities/customFormControl/EstateTextInput'

export default function AddAdvert() {

    const initialValues = {
        advertTitle:""
    }

    const schema = yup.object({
        advertTitle: yup.string().required("Please give a title for your advert")
    })
    return (
        <div className="container mt-4" style={{height:"100vh"}}>

            <div className="row justify-content-center">
                <div className="card border-dark">
                    <div className="card-body">
                        <Formik initialValues={initialValues}
                                validationSchema={schema} 
                                onSubmit={(values) => {
                                    // navigate to house image component
                                    // ev başarılı bir şekilde eklenirse id sini al ve parametre olarak yolla
                                }
                                }>

                            <Form>
                                <div className="row justify-content-between">
                                        <center> 
                                            <h3> 
                                                <b>
                                                    Advert Title
                                                </b> 
                                            </h3> 
                                        </center> 
                                        <hr />
                                        <EstateTextInput name="advertTitle" className="form-control m-4" type="text" placeholder="Title"/>
                                </div>

                                <div class="d-grid gap-2 mb-4">
                                    <button class="btn btn-secondary" type="submit">Add Advert </button>
                                </div>

                            </Form>


                        </Formik>

                            
                    </div>
                </div>
            </div>

        </div>
    )
}
