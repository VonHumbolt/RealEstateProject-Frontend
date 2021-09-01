import React, { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import AdvertService from '../../services/AdvertService'


export default function CityAdvertList() {
    
    let {cityId} = useParams()
    
    const [cityAdverts, setCityAdverts] = useState([])

    useEffect(() => {
        let advertService = new AdvertService()

        advertService.getAdvertsByCityId(cityId, 1, 1).then(response => setCityAdverts(response.data.data))
    })

    return (
        <div className="container" style={{height:"100vh"}}>

            <h3 className="text-center mb-3 mt-3"> Adverts in {cityAdverts[0]?.house?.location?.city?.cityName}</h3>
            <hr />

            <div className="row justify-content-between">
                <div className="col-sm-4">
                    <div className="card">
                       <div className="card-body">
                            <select class="form-select" aria-label="Default select example">
                                <option selected>City</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </select>
            
                            <select class="form-select" aria-label="Default select example">
                                <option selected>District </option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </select>

                            <div class="form-check form-check-inline">
                                <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1" />
                                <label class="form-check-label" for="inlineRadio1">Furnished</label>
                            </div>
                            <div class="form-check form-check-inline">
                                <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2" />
                                <label class="form-check-label" for="inlineRadio2">Not Furnished</label>
                            </div>
                            <div className="mb-3">
                                <label for="exampleFormControlInput1" class="form-label">Filter House</label>
                                <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="" />
                            </div>
                       </div>
                   </div>
                    
                </div>
                <div className="col-sm-8">

                    { cityAdverts.map((advert) => (
                        <div className="card border-secondary mb-3" >
                            <div className="row">
                                <div className="col-sm-4">
                                    <img className="img-fluid rounded-start" src={advert.house?.houseImages[0]?.houseImagePath} alt="Not Found" />
                                </div>

                                <div className="col-sm-8">
                                    <div className="card-body">
                                        <h5 className="card-title text-center py-2">{advert.advertTitle}</h5>
                                        <p className="card-text text-center"> <b>Estate Type:</b> <small> {advert.house?.estateType?.estateTypeName} </small>
                                            <br />
                                            <b>Area:</b> <small> {advert.house?.area} m2 </small>
                                            <br />
                                            <b>Room:</b> <small> {advert.house?.roomNumber} </small>
                                            <br />
                                            <b>Price:</b>  {advert.house?.price} ₺
                                            <br />
                                            <div className="row g-1">
                                                <div className="col-sm-8 text-sm-end">
                                                    <b>Published At:</b> <small>{ new Date(advert.publishedAt).toLocaleDateString()}</small>
                                                </div>
                                                <div className="col-sm-4 text-sm-end">
                                                    <Link to={`/adverts/${advert.advertId}`} > <button className="btn btn-secondary btn-sm">Read Detail</button></Link> 

                                                </div>
                                            </div>
                                        </p>
                                        
                                    </div>
                                </div>
                            </div>
                        
                        </div>
                    )) }
                </div>
            </div>


           
        </div>
    )
}
