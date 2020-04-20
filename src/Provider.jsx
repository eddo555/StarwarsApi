import React, { useState } from "react";
import Context from "./Context";

const provider = props => {
  const [state, setState] = useState({
    companyName: "DHL Delivery Package",
    recipientName: "Mr Adekoya Damola Felix",
    package: "MacBook Pro retina Display (20Kg)",
    deliveryStatus: "Delivery In Progress..."
  });
  return (
    <Context.Provider
      value={{
        data: state,
        updateDeliveryStatus: () => {
          setState({ ...state, deliveryStatus: "Delivered" });
        }
      }}
    >
      {props.children}
    </Context.Provider>
  );
};

export default provider;
