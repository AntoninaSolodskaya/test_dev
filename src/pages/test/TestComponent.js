import React, { useState, useCallback } from "react";

const TestComponent = () => {
  const initialCandies = ["snickers", "skittles", "twix", "milky way"];
  const [candies, setCandies] = useState(initialCandies);
  const dispense = useCallback(candy => {
    setCandies(allCandies => allCandies.filter(c => c !== candy));
  }, []);
  return (
    <div>
      <h1>Candy</h1>
      <div>
        <div>Available Candy</div>
        {candies.length === 0 ? (
          <button onClick={() => setCandies(initialCandies)}>go back</button>
        ) : (
          <ul>
            {candies.map(candy => (
              <li key={candy}>
                <button onClick={() => dispense(candy)}>delete</button> {candy}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default TestComponent;
