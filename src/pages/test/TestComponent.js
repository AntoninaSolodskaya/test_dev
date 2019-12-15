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

// export default TestComponent;
// import React from "react";
// import { makeStyles } from "@material-ui/core/styles";
// import Table from "@material-ui/core/Table";
// import TableBody from "@material-ui/core/TableBody";
// import TableCell from "@material-ui/core/TableCell";
// import TableHead from "@material-ui/core/TableHead";
// import TableRow from "@material-ui/core/TableRow";
// import Paper from "@material-ui/core/Paper";
// import PropTypes from "prop-types";

// const useStyles = makeStyles({
//   root: {
//     width: "100%",
//     overflowX: "auto"
//   },
//   table: {
//     minWidth: 650
//   }
// });

// function createData(name, price, fat, carbs, protein) {
//   return { name, price, fat, carbs, protein };
// }

// const rows = [
//   createData("Sporting Goods", "$49.99", "Football", 24, 4.0),
//   createData("Ice cream sandwich", "$237", "Electronics", 24, 4.3),
//   createData("Eclair", "$16.0", "Electronics", 24, 6.0),
//   createData("Cupcake", "$305", "Football", 67, 4.3),
//   createData("Gingerbread", "$356", "Electronics", 49, 3.9)
// ];

// const Table = ({ name, price }) => {
//   const classes = useStyles();

//   return (
//     <Paper className={classes.root}>
//       <Table className={classes.table} aria-label="simple table">
//         <TableHead>
//           <TableRow>
//             <TableCell>Dessert (100g serving)</TableCell>
//             <TableCell align="right">Price</TableCell>
//             <TableCell align="right">Fat&nbsp;(g)</TableCell>
//             <TableCell align="right">Carbs&nbsp;(g)</TableCell>
//             <TableCell align="right">Protein&nbsp;(g)</TableCell>
//           </TableRow>
//         </TableHead>
//         <TableBody>
//           {rows.map(row => (
//             <TableRow key={row.name}>
//               <TableCell component="th" scope="row">
//                 {name}
//               </TableCell>
//               <TableCell align="right">{price}</TableCell>
//               <TableCell align="right">{row.fat}</TableCell>
//               <TableCell align="right">{row.carbs}</TableCell>
//               <TableCell align="right">{row.protein}</TableCell>
//             </TableRow>
//           ))}
//         </TableBody>
//       </Table>
//     </Paper>
//   );
// };

// Table.propTypes = {
//   name: PropTypes.string,
//   price: PropTypes.string,
//   fat: PropTypes.string,
//   carbs: PropTypes.number,
//   protein: PropTypes.number
// };

// Table.defaultProps = {
//   name: "name",
//   price: "deepblue"
// };

// export default Table;
