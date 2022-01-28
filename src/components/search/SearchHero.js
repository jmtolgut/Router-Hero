import queryString from 'query-string';
import { useNavigate, useLocation } from "react-router-dom";



import { useMemo } from "react";
import { GetHeroesByName } from "../../selectors/GetHeroesByName";
import { HeroCard } from "../heroes/HeroCard"

export const SearchHero = () => {

    const navigate = useNavigate();
    const location = useLocation();

    const { q = '' } = queryString.parse(location.search);

    const [formValues, handleInputChange] = useForm({
        searchText: q,
    });

    const { searchText } = formValues;
    const heroesFileted = useMemo(() => GetHeroesByName(q), [q]);


    const handleSearch = (e) => {


        e.preventDefault();
        console.log(searchText);
        navigate(`?q=${searchText}`)


    }



    return (
        <div className="col-12">
            {
                (q === '')
                    ? <div className="alert alert-warning animate__animated animate__zoomIn">Buscar un Heroe</div>
                    : (heroesFileted.length === 0)
                    && <div className="alert alert-danger animate__animated animate__zoomIn">No hay resultados para: {q}</div>
            }
            {
                heroesFileted.map(hero => (
                    <HeroCard
                        key={hero.id}
                        {...hero}
                    />
                ))
            }


        </div>


    )
};