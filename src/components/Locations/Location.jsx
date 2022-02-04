import { useParams } from "react-router-dom";

const Location = () => {
    const { slug } = useParams();
    return (
        <>
            <div>This is location {slug} </div>
        </>
    )
}

export default Location;