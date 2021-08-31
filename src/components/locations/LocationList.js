import React, { useState, useEffect } from "react"

export const LocationList = () => {


    const [locations, setLocations] = useState([])

    useEffect(
        () => {
            fetch("http://localhost:8088/location")
                .then(res => res.json())
                .then((locationArray) => {
                    setLocations(locationArray)

                })


        },
        []
    )

    return (
        <>
           

            {
                locations.map(
                    (locationObject) => {
                        return <p key={`location--${locationObject.id}`}>{locationObject.address}</p>
                    })
            }
        </>
    )
}
