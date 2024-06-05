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

export default function MapsData({ mapData }: any) {
    const DATA: MapsLokasiKerusakanType[] = mapData.data;
    const lat = DATA.map((map: any) => map.lat);
    const lng = DATA.map((map: any) => map.long);

    const statusIcon = DATA.map((map: MapsLokasiKerusakanType) => {
        return map.status_pohon === '1' ? MarkerIconGreen : map.status_pohon === '2' ? MarkerIconRed : MarkerIcon;
    });

    return (
        <>
            <div className="">
                <MapContainer preferCanvas={false}
                    center={[0.5137907, 101.3586024]}
                    zoom={11}
                    scrollWheelZoom={true}
                    style={{ height: "500px" }} >
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
                                    iconUrl: statusIcon[index].src,
                                    iconRetinaUrl: statusIcon[index].src,
                                    iconSize: [25, 41],
                                    iconAnchor: [12.5, 41],
                                    popupAnchor: [0, -41],
                                    shadowUrl: MarkerShadow.src,
                                    shadowSize: [41, 41],
                                })
                            } position={[map.lat, map.long]}>
                                <Popup>
                                    Jenis Pohon: {map.nama_pohon} <br />Tahun Tanam {map.tahun_tanam}. <br /> Nama Jalan : {map.nm_jalan} <br /> Status Pohon : {map.status_pohon === '1' ? 'Sehat' : map.status_pohon === '2' ? 'Ada Kerusakan' : 'menunggu'}
                                </Popup>
                            </Marker>
                        ))}
                    </MarkerClusterGroup>
                </MapContainer>
            </div>
        </>
    )
}
