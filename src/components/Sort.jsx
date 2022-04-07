import { useState } from "react";
function Sort({ onSortChange }) {
  const [sortName, setSortName] = useState(false);
  const [sortWeight, setSortWeight] = useState(false);

  function sortNameHandler() {
    !sortName ? setSortName(true) : setSortName(false);
    if (!sortName) {
      return onSortChange(`name`);
    } else if (sortName) {
      return onSortChange(`not name`);
    }
  }
  function sortWeightHandler() {
    !sortWeight ? setSortWeight(true) : setSortWeight(false);
    if (!sortWeight) {
      return onSortChange(`weight`);
    } else if (sortWeight) {
      return onSortChange(`not weight`);
    }
  }

  return (
    <div>
      <div>
        <button onClick={() => sortNameHandler()} id="name" value="name">
          Sort By Name ({sortName ? `Sorted` : `Not Sorted`})
        </button>
      </div>
      <div>
        <button onClick={() => sortWeightHandler()} id="weight" value="weight">
          Sort By weight({sortWeight ? `Sorted` : `Not Sorted`})
        </button>
      </div>
    </div>
  );
}

export default Sort;