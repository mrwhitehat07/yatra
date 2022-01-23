import { useState, useEffect } from "react";
import { getLocations } from "../../data/locations";

export default function Home () {

    const [locations, setLocations] = useState([{
        id: '',
        slug: '',
        name: 'yugyugkuy'
    }]);

    useEffect(() => {
        getLocations();
    });

    return (
        <>
            <h1>Locations Popular</h1>
            <div>
                {
                    locations.map((e) => (<div>{e.name}</div>))
                }
            </div>
        </>
    )
}