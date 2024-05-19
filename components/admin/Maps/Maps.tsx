'use client'

import L from 'leaflet'
import MarkerClusterGroup from 'react-leaflet-cluster'
import MarkerIcon from '@/public/maps/marker-icon.png'
import MarkerShadow from '@/public/maps/marker-shadow.png'
import 'leaflet/dist/leaflet.css'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import { getMapsData } from '@/app/api/Admin/MapsApi'

import React from 'react'

export default async function MapsData() {
    const DATA: MapsLokasiKerusakanType[] = await getMapsData()
    console.log(DATA)
    return (
        <>
            <MapContainer preferCanvas={true}
                center={[0.5137907, 101.3586024]}
                zoom={11}
                scrollWheelZoom={true}
                style={{ height: "400px", width: "auto" }} >
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <MarkerClusterGroup
                    chunkedLoading
                >
                    {DATA.map((map: any, index: any) => (
                        <Marker key={index} icon={
                            new L.Icon({
                                iconUrl: MarkerIcon.src,
                                iconRetinaUrl: MarkerIcon.src,
                                iconSize: [25, 41],
                                iconAnchor: [12.5, 41],
                                popupAnchor: [0, -41],
                                shadowUrl: MarkerShadow.src,
                                shadowSize: [41, 41],
                            })
                        } position={[map.lat, map.long]}>
                            <Popup>
                                Jenis Pohon: {map.nama_pohon} <br />Tahun Tanam {map.tahun_tanam}. <br /> Nama Jalan : {map.nm_jalan}
                            </Popup>
                        </Marker>
                    ))}
                </MarkerClusterGroup>
            </MapContainer>
        </>
    )
}
