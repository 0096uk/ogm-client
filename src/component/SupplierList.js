import axios from "axios";
import { useState, useEffect } from "react";

import { url } from "../common/constants";

import "../css/lists.css";

import { toast } from 'react-toastify';

const SuppliersList = () => {
  const [supplier, setsupplier] = useState([]);
  const [delsupplier, setdelsupplier] = useState([]);
  //const url = 'http://localhost:8080'
  useEffect(() => {
    getAllsuppliers();
  }, [delsupplier]);

  const getAllsuppliers = () => {
    axios.get(url + "/supplier/allsuppliers").then((response) => {
      const result = response.data;
      if (result.status === "success") setsupplier(result.data);
      else toast.error("error while loading data");
    });
  };
  return (
    <div className="list_mart">
      <h3>All suppliers</h3>
      <table className="table table-stripped table-bordered">
        <thead>
          <tr>
            <th>supplier Id</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Phone No</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {supplier.map((c) => {
            return (
              <tr>
                <td>{c.supplierId}</td>
                <td>{c.firstName}</td>
                <td>{c.lastName}</td>
                <td>{c.email}</td>
                <td>{c.phone}</td>

                <td>
                  <button
                    onClick={() => {
                      //  const url = "http://localhost:8080/supplier/delete";
                      axios
                        .delete(url + "/supplier/delete/" + c.supplierId)
                        .then((response) => {
                          const result = response.data;
                          if (result.status === "success") {
                            setdelsupplier(result.data);
                            toast.success("supplier deleted successfully");
                          } else {
                            toast.error(
                              "Can't delete!! some products associated with supplier"
                            );
                          }
                        });
                    }}
                  >
                    delete supplier
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

export default SuppliersList;
