import React, { useCallback } from "react";

import * as PropTypes from "prop-types";

import AcUnitIcon from "@material-ui/icons/AcUnit";
import IconButton from "@material-ui/core/IconButton";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";

export const SimpleMenu = ({ items, onClick, Icon, getLabel, getValue }) => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleOpen = useCallback(
    event => {
      setAnchorEl(event.currentTarget);
    },
    [setAnchorEl]
  );

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleClick = useCallback(
    value => () => {
      onClick(value);
      setAnchorEl(null);
    },
    [onClick, setAnchorEl]
  );

  return (
    <div>
      <IconButton onClick={handleOpen}>
        <AcUnitIcon />*{Icon ? <Icon /> : ""}
      </IconButton>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        {items &&
          items.map((item, i) => (
            <MenuItem onClick={handleClick(getValue(item))} key={i}>
              {getLabel(item)}
            </MenuItem>
          ))}
      </Menu>
    </div>
  );
};

SimpleMenu.propTypes = {
  items: PropTypes.array,
  getLabel: PropTypes.func,
  getValue: PropTypes.func
};

SimpleMenu.defaultProps = {
  items: [],
  getLabel: title => title.label,
  getValue: title => title.value
};
