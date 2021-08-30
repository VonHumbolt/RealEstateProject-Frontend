import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import AdvertService from '../../services/AdvertService'

export default function AdvertDetail() {

    let {advertId} = useParams()

    const [advert, setAdvert] = useState({})

    useEffect(() => {
        let advertService = new AdvertService();

        advertService.getAdvertById(advertId).then((response) => {
            setAdvert(response.data.data)
        })
    }, [])

    return (
        <div className="container mt-4">

            <div className="row justify-content-between">
                <div className="col-sm-9">
                    <h3 className="text-sm-start">{advert.advertTitle}</h3>

                    <hr />

                    <div className="row justify-content-between">
                        <div className="col-sm-7">

                            <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
                                    <div class="carousel-indicators">
                                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                                    </div>
                                    <div className="carousel-inner">
                                    
                                        <div className="carousel-item active">
                                            <img src={advert?.house?.houseImages[0]?.houseImagePath} className="d-block w-100" alt="..." />
                                        </div>
                                        <div className="carousel-item">
                                            <img src={advert?.house?.houseImages[1]?.houseImagePath} className="d-block w-100" alt="..." />
                                        </div>
                                        <div className="carousel-item">
                                            <img src={advert?.house?.houseImages[2]?.houseImagePath} className="d-block w-100" alt="..." />
                                        </div>
                                
                                    </div>
                                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                        <span className="visually-hidden">Previous</span>
                                    </button>
                                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                        <span className="visually-hidden">Next</span>
                                    </button>
                            </div>

                        </div>


                        <div className="col-sm-5">
                            <table className="table">
                                
                                <tbody>
                                    <tr>
                                        <th scope="row"> {advert?.house?.location?.cityName} / {advert.house?.location?.district} </th>
                                       
                                    </tr>
                                    <tr>
                                        <th scope="row">Price</th>
                                        <td> <b>{advert?.house?.price} ₺ </b> </td>
                                    </tr>
                                    <tr className="table-secondary">
                                        <th scope="row">Estate Type</th>
                                        <td> {advert?.house?.estateType?.estateTypeName} </td>
                                    </tr>
                                    <tr>
                                        <th scope="row">Area(m2)</th>
                                        <td> {advert?.house?.area} m2 </td>
                                    </tr>
                                    <tr className="table-secondary">
                                        <th scope="row">Room Number</th>
                                        <td>{advert?.house?.roomNumber}</td>
                                    </tr>
                                    <tr>
                                        <th scope="row"> Area(m2) </th>
                                        <td> {advert?.house?.area} m2 </td>
                                    </tr>
                                    <tr className="table-secondary">
                                        <th scope="row"> Age </th>
                                        <td> {advert?.house?.homeAge} </td>
                                    </tr>
                                    <tr>
                                        <th scope="row">Floor</th>
                                        <td> {advert?.house?.floor} </td>
                                    </tr>
                                    <tr className="table-secondary">
                                        <th scope="row">Heating</th>
                                        <td> {advert?.house?.heating?.heatingName} </td>
                                    </tr>
                                    <tr>
                                        <th scope="row">Furnished</th>
                                        <td> {advert?.house?.isFurnished ? "Yes" : "-"}  </td>
                                    </tr>
                                    <tr className="table-secondary">
                                        <th scope="row">On Site</th>
                                        <td> {advert?.house?.isOnSite ? "Yes" : "-"} </td>
                                    </tr>
                                    <tr>
                                        <th scope="row">Site Name</th>
                                        <td> {advert?.house?.siteName ? advert?.house?.siteName : "-"} </td>
                                    </tr>
                                    <tr className="table-secondary">
                                        <th scope="row">Address</th>
                                        <td> {advert?.house?.location?.address } </td>
                                    </tr>
                                    <tr>
                                        <th scope="row">Published At</th>
                                        <td> { new Date(advert?.publishedAt).toLocaleDateString() } </td>
                                    </tr>
                                        
                                    
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                <div className="col-sm-3 mt-5">
                    <div className="card bg-dark text-light border-secondary">
                        <div class="card-header text-center">
                           <h6>Contact With Seller</h6> 
                        </div>
                        <div className="row g-0">
                            <div className="col-sm-3">
                                <img className="img-fluid rounded-start px-1" src={advert?.house?.seller?.profileImage?.profileImagePath} alt="" />
                            </div>
                            <div className="col-sm-9">
                                <div className="card-body text-center">
                                    <h3 className="card-title mb-3">{advert?.house?.seller?.firstName} {advert?.house?.seller?.lastName} </h3>
                                    <p className="card-text text-sm-start">
                                        <b>Email:</b> {advert?.house?.seller?.email} <br />
                                        <b>Phone: </b> {advert?.house?.seller.phoneNumber}
                                    </p>
                                   
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

        </div>

    )
}
