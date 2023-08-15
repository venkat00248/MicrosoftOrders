import React from "react";
import "./OrderTable.scss";
export const OrderTable = () => {
  return (
    <div className="">
      <h4 style={{marginTop:"0px"}}>Items in this order (3)</h4>
      <hr />
      <div className="orderTableNavWrapper">
        <button className="btn-cancel">
          <i
            className="fa-solid fa-xmark cross"
            style={{ fontSize: "18px", color: "grey" }}
          ></i>
          cancel Order
        </button>
        <div className="orderTableNav">
          <div className="m-10">3 items</div>
          <div className="m-10">
            <i className="fa-solid fa-filter"    style={{ fontSize: "18px",color:"rgb(134 199 219)"}}></i> Filter
          </div>
          <div className="inputWrapper m-10">
            <i className="fa fa-search" style={{color:"rgb(134 199 219)", transform: "rotate(90deg)"}}></i>
            <input type="text" className=""  placeholder="Search" />
          </div>
          <div>
            <i className="fa-solid fa-cart-shopping" style={{ fontSize: "18px",color:"rgb(134 199 219)" , marginRight:"16px"}}></i>
          </div>
        </div>
      </div>
      <table
        id="example2"
        className="table table-striped"
        style={{ width: "100%" }}
      >
        <thead>
          <tr>
           <th style={{textAlign: "inherit"}}><input  type="checkbox"/></th>
            <th  style={{textAlign: "inherit"}}>
              Product name <i className="fa-solid fa-arrow-down"></i>
            </th>
            <th style={{textAlign: "inherit"}}>item staus</th>
            <th style={{textAlign: "inherit"}} >Quantity</th>
            <th  style={{textAlign: "inherit"}}>Subtotal</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><input  type="checkbox"/></td>
            <td> Microsoft</td>
            <td>Complete</td>
            <td>Ticket Device</td>
            <td>$xxx.xxx</td>
          </tr>
          <tr>
          <td><input  type="checkbox"/></td>
            <td>Microsoft</td>
            <td>Complete</td>
            <td>Ticket Device</td>
            <td>$xxx.xxx</td>
          </tr>
          <tr>
          <td><input  type="checkbox"/></td>
            <td>Microsoft</td>
            <td>Complete</td>
            <td>Ticket Device</td>
            <td>$xxx.xxx</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
