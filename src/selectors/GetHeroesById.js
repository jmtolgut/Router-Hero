import { heroes } from "../data/Heroes"




export const GetHeroesById = (id = '') =>{
console.log('GetHeroesById called');
    return heroes.find(hero => hero.id === id);
}