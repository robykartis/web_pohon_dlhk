'use client'

import L from 'leaflet'
import MarkerIcon from '@/public/maps/marker-icon.png'
import MarkerShadow from '@/public/maps/marker-shadow.png'
import 'leaflet/dist/leaflet.css'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import { useState } from 'react'
import { getMapsData } from '@/app/api/Admin/MapsApi'

const Map = () => {

    const [coord, setCoord] = useState([0.5137907, 101.3586024])

    const SearchLocation = () => {
        return (
            <div className="search-location">
                <input type="text" placeholder="Search Location" />
            </div>
        )
    }

    const GetMyLocation = () => {
        const DATA: any = getMapsData()
        console.log(DATA)
        const getMyLocation = () => {
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition((DATA) => {
                    setCoord([DATA.lat, DATA.long])
                })
            } else {
                console.log("Geolocation is not supported by this browser.")
            }
        }

        return (
            <div className="get-my-location">
                <button onClick={getMyLocation}>Get My Location</button>
            </div>
        )
    }

    return (
        <div>

            <GetMyLocation />
            <MapContainer preferCanvas={true}
                center={[0.5137907, 101.3586024]}
                zoom={11}
                scrollWheelZoom={true}
                style={{ height: "400px", width: "auto" }} >
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />

                <Marker icon={
                    new L.Icon({
                        iconUrl: MarkerIcon.src,
                        iconRetinaUrl: MarkerIcon.src,
                        iconSize: [25, 41],
                        iconAnchor: [12.5, 41],
                        popupAnchor: [0, -41],
                        shadowUrl: MarkerShadow.src,
                        shadowSize: [41, 41],
                    })
                } position={[0.5137907, 101.3586024]}>
                    <Popup>
                        A pretty CSS3 popup. <br /> Easily customizable.
                    </Popup>
                </Marker>
            </MapContainer>
        </div>
    )
}

export default Map