import * as React from "react";
import Button from "@mui/material/Button";
import { Divider } from "@mui/material";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import IconButton from "@mui/material/IconButton";
import { ListItemIcon } from "@mui/material";
import PopupState, { bindTrigger, bindMenu } from "material-ui-popup-state";
import EditIcon from "@mui/icons-material/Edit";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
export default function MenueButton() {
  return (
    <PopupState variant="popover" popupId="demo-popup-menu">
      {(popupState) => (
        <React.Fragment>
          <IconButton
            sx={{
              background: "#5184ec",
              color: "#ffffff",
              borderRadius: "11px",
              height: "43px",
              width: "45px",
            }}
            variant="contained"
            {...bindTrigger(popupState)}
          >
            <MoreVertIcon />
          </IconButton>
          <Menu {...bindMenu(popupState)}>
            <MenuItem sx={{ color: "#5184ec" }} onClick={popupState.close}>
              <ListItemIcon sx={{ color: "#5184ec" }}>
                <EditOutlinedIcon />
              </ListItemIcon>
              Edit
            </MenuItem>
            <Divider />
            <MenuItem sx={{ color: "red" }} onClick={popupState.close}>
              <ListItemIcon sx={{ color: "red" }}>
                <DeleteOutlineOutlinedIcon />
              </ListItemIcon>
              Delete
            </MenuItem>
          </Menu>
        </React.Fragment>
      )}
    </PopupState>
  );
}
