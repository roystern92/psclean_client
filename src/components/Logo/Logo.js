import React from "react";
import classes from "./Logo.module.css";
import { NavLink } from "react-router-dom";

const logo = props => (
  <div className={classes.Container}>
    <NavLink exact to={"/"}>
      <div className={classes.Logo}>
        <img src={require("../../assets/images/logo.png")} alt="text" />
      </div>
    </NavLink>
  </div>
);

export default logo;
