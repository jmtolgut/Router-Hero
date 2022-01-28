import { useNavigate, useLocation } from "react-router-dom";
import queryString from 'query-string';

import { useForm } from "../../hooks/useForm"
import { useMemo } from "react";
import { GetHeroesByName } from "../../selectors/GetHeroesByName";
import { HeroCard } from "../heroes/HeroCard";

export const SearchScreen = () => {

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
        <div>

            <h1>Búsquedas</h1>
            <hr />


            <div className='row'>

                <div className='col-5'>
                    <h4>Buscar</h4>
                    <hr />

                    <form onSubmit={handleSearch}>
                        <input
                            type={'text'}
                            placeholder='Buscar un héroe'
                            className='form-control'
                            name='searchText'
                            autoComplete='off'
                            value={searchText}
                            onChange={handleInputChange}
                        />
                        <button
                            type='submit'
                            className='btn btn-outline-primary mt-1'
                        >
                            Buscar...
                        </button>
                    </form>

                </div>

                <div className="col-7">
                    <h4>Resultados</h4>
                    <hr />

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
            </div>

        </div>
    )
}

