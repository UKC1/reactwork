import {useParams} from "react-router-dom";
import {useState} from "react";

const Country = () => {
    const params = useParams();
    const [country, setCountry] = useState();
    const setInitData = async() => {
        const data = await fetchCountry(params.code);
    }
    return(
        <div>Country : {params.setCountry(country)}</div>
    );
}

export default Country;