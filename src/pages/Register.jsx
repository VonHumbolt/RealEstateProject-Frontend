import React from "react";
import * as yup from "yup"
import { Formik, Form } from "formik";
import EstateTextInput from "../utilities/customFormControl/EstateTextInput";
import { Facebook, Google } from "react-bootstrap-icons";


export default function Register() {

    const initialValues = {
        firstName: "",
        lastName: "",
        email: "", 
        password:"",
    } 

    const schema = yup.object({
        firstName: yup.string().required("First Name is required"),
        lastName: yup.string().required("Last Name is required"),
        email : yup.string().email().required("Email is required"),
        password: yup.string().required("Password is required")
    })

    return (
    <div className="container p-5" style={{ height: "100vh" }}>
      <div className="row justify-content-center">
        <div className="card border-dark " style={{ width: "30rem" }}>
          <div className="card-body">
            <Formik
              initialValues={initialValues}
              validationSchema={schema}
              onSubmit={(values) => {
                console.log(values);
              }}
            >
              <Form>
                <h3 className="card-title text-sm-center mt-3">
                  Create An Account
                </h3>

                <div className="mt-5 mb-3">
                  <EstateTextInput
                    name="firstName"
                    placeholder="First Name"
                    type="text"
                    className="form-control"
                  />
                </div>

                <div className="mb-4">
                  <EstateTextInput
                    name="lastName"
                    placeholder="Last Name"
                    type="text"
                    className="form-control"
                  />
                </div>

                <div className="mb-4">
                  <EstateTextInput
                    name="email"
                    placeholder="Email Address"
                    type="email"
                    className="form-control"
                  />
                </div>

                <div className="mb-4">
                  <EstateTextInput
                    name="password"
                    placeholder="Password"
                    type="password"
                    className="form-control"
                  />
                </div>

                <div class="d-grid gap-2 mb-4">
                  <button class="btn btn-secondary" type="submit">
                    Register
                  </button>
                </div>
              </Form>
            </Formik>
            <hr />

            <div class="d-grid gap-2 mb-3">
              <button class="btn btn-primary" type="button">
                Continue With Facebook <Facebook />
              </button>
              <button class="btn btn-danger" type="button">
                Continue With Google <Google/>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
