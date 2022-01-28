import { heroes } from "../data/Heroes";


export const GetHeroesByName = (name = '') => {
    console.log({name})

    console.log('GetHeroesByName called');

    if (name.length === 0){
        return [];
    }
    name = name.toLowerCase();
    return heroes.filter(hero => hero.superhero.toLowerCase().includes(name));
}