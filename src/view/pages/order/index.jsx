import { LeftOutlined } from "@ant-design/icons";
import React from "react";  
import DetailOrder from "./components/detailOrder";
import FormOrder from "./components/formOrder";
import PayOrder from "./components/payOrder";

export default function Order() {
    return (
    <div className="custom-order-container">
      <div className="order-container">
        <div style={{width: "100%"}}>
            <header>
                <span className="action"><LeftOutlined /></span>
                <span className="title">Orderan Saya</span>
                <span className="action">&nbsp;</span>
            </header>
            <div className="custom-order-content">
                <DetailOrder/>
                <FormOrder />
                <PayOrder />
            </div>
        </div>
      </div>
    </div>
    )
}