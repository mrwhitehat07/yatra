import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getPopularLocations } from "../../data/locations";

export default function Home () {

    const [locations, setLocations] = useState([{
        id: '',
        slug: '',
        city: '',
        country: '',
        image: ''
    }]);

    useEffect(() => {   
        async function getLocs(){
            const locs = await getPopularLocations();
            setLocations(locs);
        }
        getLocs();
    },[]);

    return (
        <div className="container">
            <h3>Popular Locations</h3>
            <div className="d-flex flex-row justify-content-between">  
                {
                    locations.map((e) => (
                        <Link 
                            key={e.slug}
                            class="card" style={{ width: "16rem" }} to={`/location/${e.slug}`}
                        >
                            <div className="card-header">
                                <img className="img-thumbnail" src={e.image} alt={e.slug} />
                            </div>
                            <div className="card-body">
                                <p className="card-text">{e.city}</p>
                                <p className="card-text">{e.country}</p>
                            </div>
                        </Link>  
                    ))
                }   
            </div>
        </div>
    )
}