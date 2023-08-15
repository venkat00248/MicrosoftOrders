import React from "react";
import "./Order.scss";
import { OrderTable } from "../orderTable/OrderTable";
export const Order = () => {
  return (
    <div className="orderDetails">
       
      <h2 className="headerColor">Order Number ab12356899 </h2>
      <div className="wrapperOrder">
        <div className="one">
        <hr />
          <h3 className="rowHeaderColor">Order Details </h3>
          <div className="rowWrapper">
            <div className="orderRow1">
              <div className="details">
                <div className="itemHeader">Order Date</div>
                <div>jan 1 2023</div>
              </div>
              <div className="details">
                <div className="itemHeader">Order status</div>
                <div>In Progress</div>
              </div>
              <div className="details">
                <div>
                  <a  href="#">View Invoice</a>
                </div>
                <div>
                  <a href="#">Cancel order</a>
                </div>
              </div>
            </div>
            <div className="orderRow2">
              <div className="itemHeader">Total Cost</div>
              <div>$xxx.xxx</div>
            </div>
          </div>
        </div>
        <div className="one">
        <hr />
          <h3 className="rowHeaderColor">Payment Details</h3>
          <div className="rowWrapper">
            <div className="orderRow1">
              <div className="details">
                <div className="itemHeader">Billing profile</div>
                <div>Contoso LIC</div>
                <div><a href="#">Manage billing Profile</a></div>
              </div>
            </div>
            <div className="orderRow2">
              <div className="itemHeader">Paid with</div>
              <div>Visa *** *** *** 1234</div>
              <div><a href="#">Manage payment method</a></div>

            </div>
          </div>
        </div>
        <div className="one">
        <hr />
          <h3 className="rowHeaderColor">Related addresses</h3>
          <div className="rowWrapper">
            <div className="orderRow1">
              <div className="details">
                <div className="itemHeader">Sold-to address</div>
                <div className="address">Contoso LIC One Microsoft Way Redmond , WA 98052  USA</div>
              </div>
              <div className="details">
              <div className="itemHeader">Bill-to address</div>
                <div>Contoso LIC One Microsoft Way Redmond , WA 98052  USA</div>
              </div>
            </div>
            <div className="orderRow2">
            <div className="details">
              <div className="itemHeader">Shipping  address</div>
                <div>Contoso LIC One Microsoft Way Redmond , WA 98052  USA</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <OrderTable />
    </div>
  );
};
