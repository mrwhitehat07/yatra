import { useState, useEffect } from "react";
import { getLocations } from "../../data/locations";

export default function Home () {

    const [locations, setLocations] = useState([{
        id: '',
        slug: '',
        city: '',
        country: '',
    }]);

    useEffect(() => {
       
    async function getLocs(){
        const locs = await getLocations();
        setLocations(locs);
    }

    getLocs();
    console.log(locations);
    },[]);

    return (
        <>
            <h1>Locations Popular</h1>
            <div>
                
                {
                    locations.map((e) => (<div className="card px-2 py-2 bg-primary flex flex-column" onClick={() => console.log(e.slug)}>
                        <p>{e.city}</p>
                        <p>{e.country}</p>
                    </div>))
                }
                
            </div>
        </>
    )
}