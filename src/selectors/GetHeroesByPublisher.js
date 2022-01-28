import { heroes } from '../data/Heroes';


export const GetHeroesByPublisher = (publisher) => {

    const validPublishers = ['DC Comics', 'Marvel Comics'];

    if (!validPublishers.includes(publisher)) {
        throw new Error(`${publisher} is not a valid publisher`);

    }

    return heroes.filter(hero => hero.publisher === publisher);

}