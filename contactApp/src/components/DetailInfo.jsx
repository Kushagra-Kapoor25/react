import React from "react";
import ContactInfoImage from "./ContactInfoImage";

function DetailInfo(props) {
  return (
    <div className="mt-2">
      <span className="inline-flex">
        <ContactInfoImage type={props.type} />
        {props.info}
      </span>
    </div>
  );
}

export default DetailInfo;
