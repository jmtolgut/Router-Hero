import { HeroCard } from "./HeroCard";
import { GetHeroesByPublisher } from "../../selectors/GetHeroesByPublisher";
import { useMemo } from "react";

export const HeroList = ({ publisher }) => {

  const heroes = useMemo(() => GetHeroesByPublisher(publisher), [publisher]);


  return (
    <div className="row rows-cols-1 row-cols-md-3 g-3 animate__animated animate__backInDown">
      {
        heroes.map(hero => (
          <HeroCard
            key={hero.id}
            {...hero}
          />

        ))
      }
    </div>
  )
};
