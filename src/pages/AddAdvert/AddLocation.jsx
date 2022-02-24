import React, { useEffect, useState } from "react";
import EstateTextInput from '../../utilities/customFormControl/EstateTextInput'
import { Formik, Form } from 'formik'
import * as yup from "yup"
import { useHistory } from 'react-router'
import EstateSelectBox from '../../utilities/customFormControl/EstateSelectBox'
import LocationService from '../../services/LocationService'
import CityService from "../../services/CityService";

export default function AddLocation() {

    let history = useHistory()

    const [cities, setCities] = useState([])
    useEffect(() => {
      let cityService = new CityService()
      cityService.getAll().then(response => setCities(response.data.data))
    }, [])

    const [districts, setDistricts] = useState([])

    const initialValues = {
        address: "",
        city: "",
        district: ""
    }

    const schema = yup.object({

    })
  return (
    <div className="container mt-4" style={{ height: "100vh" }}>
      Add Location
      <div className="row justify-content-center">
        <div className="card border-dark">
          <div className="card-body">
            <Formik
              initialValues={initialValues}
              validationSchema={schema}
              onSubmit={(values) => {
                console.log(values)
                history.push("/add/house");
              }}
            >
              <Form>
                <div className="row justify-content-between">
                  House Address
                  <hr />
                 
                  <EstateSelectBox
                    name="city"
                    options={cities?.map((city) => ({
                      key: city.cityId,
                      value: city.cityName,
                    }))}
                    label="City"
                    placeholder="City"
                  />
                  <EstateSelectBox
                    name="district"
                    options={districts?.map((district) => ({
                      key: district.districtId,
                      value: district.districtName,
                    }))}
                    label="District"
                    placeholder="District"
                  />
                  
                  <EstateTextInput
                    name="address"
                    className="form-control"
                    type="text"
                  />
                </div>

                <div class="d-grid gap-2 mb-4">
                  <button class="btn btn-secondary" type="submit">
                    House ----{" "}
                  </button>
                </div>
              </Form>
            </Formik>
          </div>
        </div>
      </div>
    </div>
  );
}
