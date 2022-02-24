import React from 'react'
import { Route } from 'react-router-dom'
import AddAdvert from '../pages/AddAdvert/AddAdvert'
import AddHouse from '../pages/AddAdvert/AddHouse'
import AddHouseImage from '../pages/AddAdvert/AddHouseImage'
import AddLocation from '../pages/AddAdvert/AddLocation'
import AdvertDetail from '../pages/Advert/AdvertDetail'
import AdvertList from '../pages/Advert/AdvertList'
import CityAdvertList from '../pages/Advert/CityAdvertList'
import SellerAdvertList from '../pages/Advert/SellerAdvertList'
import Login from '../pages/Login'
import Main from '../pages/Main'
import Register from '../pages/Register'


export default function Dashboard() {
    return (
        <div className="p-5 mt-4">
           
            <Route exact path="/" component={Main} />
            <Route exact path="/adverts" component={AdvertList} />
            <Route exact path="/adverts/:advertId" component={AdvertDetail} />
            <Route exact path="/sellerAdverts/:userId" component={SellerAdvertList} />
            <Route exact path="/adverts/city/:cityId" component={CityAdvertList} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/add/house" component={AddHouse} />
            <Route exact path="/add/houseImage" component={AddHouseImage} />
            <Route exact path="/add/advert" component={AddAdvert} />
            <Route exact path="/add/location" component={AddLocation} />

        </div>
    )
}
