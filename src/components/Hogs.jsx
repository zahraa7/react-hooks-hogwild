import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

import Filtered from "./Filtered";
import Sort from "./Sort";

function Hogs({ hogs }) {
  const [moreInfo, setMoreInfo] = useState(false);
  const [greasSelector, setGreasSelector] = useState(`all`);
  const [sort, setSort] = useState(``);
  console.log(sort);

  function hogInfoHandler() {
    return !moreInfo ? setMoreInfo(true) : setMoreInfo(false);
  }

  const displayItem = hogs.filter((hog) => {
    if (greasSelector === `greasy`) {
      return hog.greased ? hog : null;
    } else if (greasSelector === `not-greasy`) {
      return !hog.greased ? hog : null;
    } else if (greasSelector === `all`) {
      return hog;
    } else {
      return null;
    }
  });

  const displayItemSorted = [...displayItem].sort((a, b) => {
    if (sort === `weight`) {
      return a[sort] - b[sort];
    } else if (sort === `not weight`) {
      return b[sort] - a[sort];
    } else {
      return null;
    }
  });

  // sort by name is working but when both sort by weight and name used together, the sorting kind of clash together

  // if (sort === `name`) {
  //   return a[sort] > b[sort] ? 1 : -1;
  // } else if (sort === `not name`) {
  //   return a[sort] < b[sort] ? 1 : -1;
  // } else

  return (
    <div ui grid container>
      <Sort onSortChange={(e) => setSort(e)} />
      <Filtered onGreasyChange={(e) => setGreasSelector(e)} />
      {displayItemSorted.map((hog) => {
        return (
          <div
            className="ui eight wide column"
            key={uuidv4()}
            onClick={() => hogInfoHandler()}
          >
            <h1>{hog.name}</h1>
            <img src={hog.image} alt="hog" />
            <section className={moreInfo ? "" : `hidden`}>
              <h1>{hog.specialty}</h1>
              <h1>{hog.greased ? "Greased" : "Not Greased"}</h1>
              <h1>{hog.weight}</h1>
            </section>
            <h1>________________________________________</h1>
          </div>
        );
      })}
    </div>
  );
}

export default Hogs;