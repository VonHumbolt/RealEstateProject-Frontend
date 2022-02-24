import React from 'react'
import { useHistory } from 'react-router'


export default function AddHouseImage() {

    let history = useHistory()

    function goToAdvertFeature(){
        history.push("/add/advert")
    }

    return (
        <div className="container mt-4" style={{height:"100vh"}}>
            House Image

            <div class="mb-3">
                <label for="formFileMultiple" class="form-label">Select your house images</label>
                <input class="form-control" type="file" id="formFileMultiple" multiple />
            </div>

            <div class="d-grid gap-2 mb-4">
                <button class="btn btn-secondary" type="submit" onClick={() => goToAdvertFeature()}>Advert Features ---- </button>
            </div>

        </div>
    )
}
