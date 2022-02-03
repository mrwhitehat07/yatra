import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
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
    },[]);

    return (
        <div className="container">
            <h3>Popular Locations</h3>
            <div>  
                {
                    locations.map((e) => (
                        <Link className="card px-2 py-2 bg-primary flex flex-column" to={`/location/${e.slug}`}>
                            <p className="text-white text-lg">{e.city}</p>
                            <p className="text-white">{e.country}</p>
                        </Link>
                    ))
                }   
            </div>
        </div>
    )
}