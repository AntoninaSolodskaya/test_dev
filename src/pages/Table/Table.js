import React from "react";
import "./styles.css";

const arr1 = [
  { name: "Mike", age: "86", weight: "126" },
  { name: "Jim", age: "45", weight: "34" },
  { name: "Sam", age: "9", weight: "85" }
];

const arr2 = [
  { item: "table", color: "red", width: "444", height: "12" },
  { item: "sofa", color: "black", width: "355554", height: "344" },
  { item: "door", color: "white", width: "666", height: "4534" },
  { item: "window", color: "gray", width: "777", height: "435345" },
  { item: "floor", color: "yellow", width: "888", height: "45345" }
];

const arr = arr2;

const Table = () => {
  return (
    <div className="root">
      <table className="table">
        <thead className="thead">
          <tr className="table">
            {Object.keys(arr[0]).map(key => (
              <td>{key}</td>
            ))}
          </tr>
        </thead>
        <tbody>
          {arr.map(obj => (
            <tr>
              {Object.values(obj).map(val => (
                <td className="table">{val}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
