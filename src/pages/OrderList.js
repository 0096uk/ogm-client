import { url } from "../common/constants";

import React, { useState, useEffect } from "react";
import axios from "axios";
import { useStateValue } from "../component/StateProvider";
import Order from "../component/Order";
import {Navigate} from "react-router-dom";

function OrderList() {
  const [{ user }, dispatch] = useStateValue();

  return (
    <div>
    {user ? null : <Navigate to='/login'  replace={true} />}
      {user?.orderDtoList.map((order) => {
        return (
          <div className="order">
            <Order order={order} />
          </div>
        );
      })}
    </div>
  );
}

export default OrderList;
