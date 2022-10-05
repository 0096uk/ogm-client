import { url } from "../common/constants";

import React, { useState, useEffect } from "react";
import axios from "axios";
import { useStateValue } from "./StateProvider";
import EmployeeOrder from "./EmployeeOrder";

import { toast } from 'react-toastify';

function EmployeeOrderList() {
  const [{ employee, employeeOrders }, dispatch] = useStateValue();
  const [empOrderList, setEmpOrderList] = useState([]);

  useEffect(() => {
    console.log(`all orders assigned to employee loaded`);
    //if (empOrderList == [])
    getEmployeeOrders();
  }, []);

  const getEmployeeOrders = () => {
    axios.get(url + "/employee/orders/" + employee.empId).then((response) => {
      const result = response.data;
      if (result.status === "success") {
        setEmpOrderList(result.data);
        dispatch({
          type: "SET_EMPLOYEE_ORDERS",
          employeeOrders: result.data,
        });
      } else {
        toast.error("error while loading orders");
      }
    });
  };

  return (
    <div>
      {employeeOrders.map((order) => {
        return (
          <div className="order">
            <EmployeeOrder order={order} />
          </div>
        );
      })}
    </div>
  );
}

export default EmployeeOrderList;
