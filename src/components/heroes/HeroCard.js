import { Link } from 'react-router-dom';
import styled from 'styled-components';
export const HeroCard = ({
    id,
    superhero,
    publisher,
    alter_ego,
    first_appearance,
    characters,
}) => {

    const imagePath = `/assets/heroes/${id}.jpg`;

    return (
        <ContCard className='col-6 animate__animated animate__fadeInUp'>

            <ContOverFlow className='card'>
                <div className='row'>
                    <ContImg className='col-sm-6'>
                        <img src={imagePath} className='card-img-top' alt={superhero} />
                    </ContImg>
                    <ContElement className='col-sm-6'>
                        <div className='card-body'>
                            <h5 className='card-title'>{superhero}</h5>
                            <p className='card-text'>{alter_ego}</p>
                            {
                                (alter_ego !== characters ) && 
                                <p className='text-muted'>{characters}</p>
                            }
                            <p className='card-text'>
                                <small className='text-muted'>{first_appearance}</small>
                            </p>
                            <Link to={`/hero/${id}`}>
                                Mas...
                            </Link>
                        </div>

                    </ContElement>

                </div>
            </ContOverFlow>

        </ContCard>

    )
};


const ContCard = styled.div`
overflow: hidden;
background-color: #002;
border-radius:1rem;

`

const ContOverFlow = styled.div`
background-color: #002;
border-radius:1rem;
overflow: hidden;
width:100%;

`
const ContImg = styled.div`
box-shadow: 10px 0px 7px 0px rgba(255,255,255,0.2);

`
const ContElement = styled.div`

`