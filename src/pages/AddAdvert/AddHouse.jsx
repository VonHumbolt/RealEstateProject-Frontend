import React, {useEffect, useState} from 'react'
import EstateTextInput from '../../utilities/customFormControl/EstateTextInput'
import { Formik, Form } from 'formik'
import * as yup from "yup"
import { useHistory } from 'react-router'
import EstateSelectBox from '../../utilities/customFormControl/EstateSelectBox'
import LocationService from '../../services/LocationService'
import EstateTypeService from '../../services/EstateTypeService'
import HeatingService from '../../services/HeatingService'

export default function AddHouse() {

    let history = useHistory()

    const [locations, setLocations] = useState([])
    useEffect(() => {
        let locationService = new LocationService()
        locationService.getAll().then((response) => setLocations(response.data.data))
    }, [])

    const [estateTypes, setEstateType] = useState([])
    useEffect(() => {
        let estateTypeService = new EstateTypeService()
        estateTypeService.getall().then((response) => setEstateType(response.data.data))
    }, [])

    const [heating, setHeating] = useState([])
    useEffect(() => {
        let heatingService = new HeatingService()
        heatingService.getall().then((response) => setHeating(response.data.data))
    }, [])

    // LOCATION AYRI BİR SAYFADA MI EKLENSİN?????

    const initialValues = {
        area:"",
        roomNumber:"",
        homeAge:"",
        floor:"",
        isFurnished:"",
        isOnSite:"",
        siteName:"",
    }
    
    const schema = yup.object({    
        area: yup.number().required("Enter house area"),
        roomNumber: yup.number().required("Enter house room number"),
        homeAge: yup.number().required("Enter your house age"),
        floor: yup.number().required("Enter the floor of house"),
    })
    return (
        <div className="container mt-4" style={{height:"100vh"}}>
            Add House 
            <div className="row justify-content-center">
                <div className="card border-dark">
                    <div className="card-body">
                        <Formik initialValues={initialValues}
                                validationSchema={schema} 
                                onSubmit={(values) => {
                                    // navigate to house image component
                                    // ev başarılı bir şekilde eklenirse id sini al ve parametre olarak yolla
                                    history.push("/add/houseImage")
                                  }
                                }>

                            <Form>
                                <div className="row justify-content-between">
                                        House Area
                                        <hr />
                                        <EstateTextInput name="area" className="form-control" type="number" />
                                        
                                        Room Number
                                        <hr />
                                        <EstateTextInput name="roomNumber" className="form-control" type="number" />
                                        
                                        Home Age
                                        <hr />
                                        <EstateTextInput name="homeAge" className="form-control" type="number" />

                                        Floor
                                        <hr />
                                        <EstateTextInput name="floor" className="form-control" type="number" />
                                        
                                        Is Furnished 
                                        <hr />
                                        <div class="form-check form-check-inline ms-3">
                                            <input class="form-check-input" type="radio" name="isFurnished" id="furnished" />
                                            <label class="form-check-label" for="furnished">
                                                Furnished
                                            </label>
                                            </div>
                                            <div class="form-check form-check-inline ms-3">
                                            <input class="form-check-input" type="radio" name="isFurnished" id="notFurnished" checked />
                                            <label class="form-check-label" for="notFurnished">
                                                Not Furnished
                                            </label>
                                        </div>

                                        Is on Site
                                        <hr />
                                        <div class="form-check form-check-inline ms-3">
                                            <input class="form-check-input" type="radio" name="isOnSite" id="onSite" />
                                            <label class="form-check-label" for="onSite">
                                                On Site
                                            </label>
                                        </div>

                                        <div class="form-check form-check-inline ms-3">
                                            <input class="form-check-input" type="radio" name="isOnSite" id="notOnSite" checked />
                                            <label class="form-check-label" for="notOnSite">
                                                Not On Site
                                            </label>
                                        </div>

                                        Site Name
                                        <hr />
                                        <EstateTextInput name="siteName" className="form-control" type="text" />
                                        
                                        Location
                                        <hr />
                                        <EstateSelectBox name="location"  options={
                                            locations?.map(location => (
                                            {key:location.locationId, value: location.city?.cityName}
                                            ) )}
                                            label="Job Position"
                                            placeholder="Job Position" />

                                        Estate Type
                                        <hr />
                                        <EstateSelectBox name="estateType"  options={
                                            estateTypes?.map(estateType => (
                                                {key:estateType.estateTypeId, value: estateType.estateTypeName}
                                            ) )}
                                            label="Estate Type"
                                            placeholder="Estate Type" />


                                        Heating
                                        <hr /> 
                                        <EstateSelectBox name="heating"  options={
                                            heating?.map(heating => (
                                                {key:heating.heatingId, value: heating.heatingName}
                                            ) )}
                                            label="Heating"
                                            placeholder="Heating" />


                                        Price
                                        <hr />
                                        <EstateTextInput name="price" className="form-control" type="number" />

                                </div>

                                <div class="d-grid gap-2 mb-4">
                                    <button class="btn btn-secondary" type="submit">House Images ---- </button>
                                </div>

                            </Form>


                        </Formik>

                    </div>
                </div>
            </div>

        </div>
    )
}
