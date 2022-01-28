import { Routes, Route } from 'react-router-dom';
import { NavbarNavegate } from "../components/ui/NavBar"
import { DcScreen } from '../components/dc/DcScreen';
import { MarvelScreen } from '../components/marvel/MarvelScreen';
import { SearchScreen } from '../components/search/SearchScreen';
import { HeroScreen } from '../components/heroes/HeroScreen';
import { Container } from 'react-bootstrap';

export const DashboardRoutes = () => {
    return (
        <>
            <NavbarNavegate />
            <Container className='container'>

                <Routes>
                    <Route path="marvel" element={<MarvelScreen />} />
                    <Route path="dc" element={<DcScreen />} />

                    <Route path="search" element={<SearchScreen />} />
                    <Route path="hero/:heroeId" element={<HeroScreen />} />

                    <Route path="/" element={<MarvelScreen />} />
                </Routes>

            </Container>

        </>
    )
}
