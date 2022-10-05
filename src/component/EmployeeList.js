import axios from "axios";
import { useState, useEffect } from "react";
import "../css/lists.css";
import { url } from "../common/constants";
import { toast } from 'react-toastify';

const EmployeesList = () => {
  const [employee, setemployee] = useState([]);
  const [delemployee, setdelemployee] = useState([]);

  useEffect(() => {
    getAllemployees();
  }, [delemployee]);

  const getAllemployees = () => {
    axios.get(url + "/employee/allemployees").then((response) => {
      const result = response.data;
      if (result.status === "success") setemployee(result.data);
      else toast.error("error while loading data");
    });
  };
  return (
    <div className='list_mart'>
      <h3>All employees</h3>
      <table className='table table-stripped table-bordered'>
        <thead>
          <tr>
            <th>employee Id</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Phone No</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {employee.map((c) => {
            return (
              <tr>
                <td>{c.empId}</td>
                <td>{c.firstName}</td>
                <td>{c.lastName}</td>
                <td>{c.email}</td>
                <td>{c.phone}</td>

                <td>
                  <button
                    onClick={() => {
                      // const url1 = url + "/employee/delete/"
                      axios.delete(url + "/employee/delete/" + c.empId).then((response) => {
                        const result = response.data;
                        if (result.status === "success") {
                          setdelemployee(result.data);
                          toast.success("employee deleted successfully");
                        }
                        else{
                          toast.error("Can't delete!! Some orders assigned to employee")
                        }
                      });
                    }}
                    disabled={c.role === 'admin' ? true : false}  style={c.role === 'admin' ? {opacity:0.8}: {color:1}}
                  >
                    delete employee
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default EmployeesList;
