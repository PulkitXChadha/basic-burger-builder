import React from "react";

import classes from "./SideDrawer.module.css";
import Aux from "../../../hoc/Aux";
import Logo from "../../Logo/Logo";
import NavigationItems from "../NavigationItems/NavigationItems";
import Backdrop from "../../UI/Backdrop/Backdrop";

const sideDrawer = props => {
  let attachedClasses = [classes.SideDrawer, classes.Close].join(" ");
  if (props.open)
    attachedClasses = [classes.SideDrawer, classes.Open].join(" ");
  return (
    <Aux>
      <Backdrop clicked={props.closed} show={props.open} />
      <div className={attachedClasses}>
        <div className={classes.Logo}>
          <Logo />
        </div>
        <nav>
          <NavigationItems />
        </nav>
      </div>
    </Aux>
  );
};

export default sideDrawer;
