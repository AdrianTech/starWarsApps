import React from "react";
const ShowInfo = ({ info }): JSX.Element => {
  let styles = "showInfo";
  if (info.state) {
    styles += " modalActive";
  }
  return <div className={styles}>{info.text}</div>;
};
export default ShowInfo;
