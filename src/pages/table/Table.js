import React from "react";

const Table = () => {
  const data = [
    {
      category: "Sporting Goods",
      price: "$49.99",
      stocked: true,
      name: "Football"
    },
    {
      category: "Sporting Goods",
      price: "$9.99",
      stocked: true,
      name: "Baseball"
    },
    {
      category: "Sporting Goods",
      price: "$29.99",
      stocked: false,
      name: "Basketball"
    },
    {
      category: "Electronics",
      price: "$99.99",
      stocked: true,
      name: "iPod Touch"
    },
    {
      category: "Electronics",
      price: "$399.99",
      stocked: false,
      name: "iPhone 5"
    },
    {
      category: "Electronics",
      price: "$199.99",
      stocked: true,
      name: "Nexus 7"
    }
  ];

  let tableTemplate;

  const makeColumns = row => {
    return (
      <td>
        {row.category} {row.price} {row.name}
      </td>
    );
  };

  tableTemplate = data.map((row, i) => {
    return <tr key={i}>{makeColumns(row)}</tr>;
  });

  return (
    <table>
      <tbody>{tableTemplate}</tbody>
    </table>
  );
};

export default Table;
