'use client'

import L from 'leaflet'
import MarkerClusterGroup from 'react-leaflet-cluster'
import MarkerIcon from '@/public/maps/marker-icon.png'
import MarkerIconGreen from '@/public/maps/marker-icon-green.png'
import MarkerIconRed from '@/public/maps/marker-icon-red.png'
import MarkerShadow from '@/public/maps/marker-shadow.png'
import 'leaflet/dist/leaflet.css'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'

import React from 'react'

export default async function MapsDetail({ mapData }: any) {
    const DATA: any = mapData.DetailPohon
    // console.log(DATA)
    const lat = DATA.lat;
    const lng = DATA.long;

    const statusIcon = DATA.status_pohon === '1' ? MarkerIconGreen : DATA.status_pohon === '2' ? MarkerIconRed : MarkerIcon
    return (
        <>
            <div className="">
                <MapContainer preferCanvas={false}
                    center={[lat, lng]}
                    zoom={12}
                    scrollWheelZoom={true}
                    style={{ height: "400px", width: "100%" }} >
                    <TileLayer
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />

                    <Marker icon={
                        new L.Icon({
                            iconUrl: statusIcon.src,
                            iconRetinaUrl: statusIcon.src,
                            iconSize: [25, 41],
                            iconAnchor: [12.5, 41],
                            popupAnchor: [0, -41],
                            shadowUrl: MarkerShadow.src,
                            shadowSize: [41, 41],
                        })
                    } position={[lat, lng]}>
                        <Popup>
                            Jenis Pohon: {DATA.nama_pohon} <br />Tahun Tanam {DATA.tahun_tanam}. <br /> Nama Jalan : {DATA.nm_jalan}
                        </Popup>
                    </Marker>

                    <Marker icon={
                        new L.Icon({
                            iconUrl: statusIcon.src,
                            iconRetinaUrl: statusIcon.src,
                            iconSize: [25, 41],
                            iconAnchor: [12.5, 41],
                            popupAnchor: [0, -41],
                            shadowUrl: MarkerShadow.src,
                            shadowSize: [41, 41],
                        })
                    } position={[lat, lng]}>
                        <Popup>
                            Jenis Pohon:dasdad <br />Tahun Tanam asdas. <br /> Nama Jalan : asdasd
                        </Popup>
                    </Marker>

                </MapContainer>
            </div>
        </>
    )
}
