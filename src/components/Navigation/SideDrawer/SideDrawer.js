import React from "react";

import classes from "./SideDrawer.css";

import Aux from "../../../hoc/Aux/Aux";
import Backdrop from "../../UI/Backdrop/Backdrop";
import Logo from "../../Logo/Logo";
import NavigationItems from "../NavigationItems/NavigationItems";

const SideDrawer = (props) => {
  let attachedClasses = [classes.SideDrawer, classes.Closed]
  if (props.open) {
    attachedClasses = [classes.SideDrawer, classes.Open]
  }
  return (
    <Aux>
      <Backdrop show={props.open} onClick={props.closed} />
      <div className={attachedClasses.join(" ")}>
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

export default SideDrawer;