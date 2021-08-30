import React from 'react'
import { Route } from 'react-router-dom'
import AdvertDetail from '../pages/Advert/AdvertDetail'
import AdvertList from '../pages/Advert/AdvertList'
import SellerAdvertList from '../pages/Advert/SellerAdvertList'
import Main from '../pages/Main'


export default function Dashboard() {
    return (
        <div className="p-5 mt-4">
           
            <Route exact path="/" component={Main} />
            <Route exact path="/adverts" component={AdvertList} />
            <Route exact path="/adverts/:advertId" component={AdvertDetail} />
            <Route exact path="/sellerAdverts/:userId" component={SellerAdvertList} />

        </div>
    )
}
