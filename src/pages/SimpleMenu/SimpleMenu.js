import React, { useCallback } from "react";

import PropTypes from "prop-types";

import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";

const items = [
  { title: "delete", value: "Delete", id: 1 },
  { title: "copy", value: "Copy", id: 2 }
];

export const SimpleMenu = ({ removeTodo, getLabel, getValue }) => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleCloseMenu = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        aria-controls="simple-menu"
        aria-haspopup="true"
        onClick={handleClick}
      >
        Open Menu
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleCloseMenu}
      >
        {items &&
          items.map((item, i) => (
            <MenuItem onClick={handleCloseMenu} key={i}>
              {getValue(item)}
              {console.log(item)}
            </MenuItem>
          ))}
      </Menu>
    </div>
  );
};

SimpleMenu.propTypes = {
  getLabel: PropTypes.func,
  getValue: PropTypes.func
};

SimpleMenu.defaultProps = {
  getLabel: title => title.label,
  getValue: title => title.value
};
