function Filtered({ onGreasyChange }) {
    return (
      <div>
        <select onChange={(e) => onGreasyChange(e.target.value)}>
          <option value="all">All</option>
          <option value="greasy">Greased</option>
          <option value="not-greasy">Not Greased</option>
        </select>
      </div>
    );
  }
  
  export default Filtered;