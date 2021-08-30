import React, { useEffect, useState } from 'react'
import { NavLink,Link } from 'react-router-dom';
import AdvertService from '../../services/AdvertService';

export default function AdvertList() {

    const [adverts, setAdverts] = useState([])

    useEffect(() => {
        let advertService = new AdvertService();

        advertService.getall(1,1).then((response) => (
            setAdverts(response.data.data)
        ))
    }, [])

    return (
        <div className="container">
           <div className="row justify-content-between align-items-center">
               <div className="col-md-3">
                   Filter
               </div>
               
               <div className="col-md-9">
                   <h2 className="mt-4 mb-3">House Adverts</h2>
                   <hr />
                    {console.log(adverts)}
                    { adverts.map((advert) => (
                        <div className="card border-secondary mb-3" as={NavLink} to="/" >
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
                                            <b>Published At:</b> <small>{ new Date(advert.publishedAt).toLocaleDateString()}</small>
                                        </p>
                                        <p className="card-text text-sm-end">
                                           <Link to={`/adverts/${advert.advertId}`} > <button className="btn btn-secondary btn-sm">Read Detail</button></Link> 
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
