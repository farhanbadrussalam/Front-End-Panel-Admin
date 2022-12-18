import { Button, Row } from "antd";
import Col from "antd/es/grid/col";
import React from "react";

export default function DetailOrder() {
    return (
        <div className="detail-order">
            <div className="title">Product yang dibeli</div>

            <Row className="description">
                <div className="images-order">
                    &nbsp;
                    <div className="sub-img">1:30</div>
                </div>
                <Col className="information-order">
                    <div className="info-title">Demo wedding 1</div>
                    <div className="info-desc">Laluna weeding halu</div>
                    <div className="info-price">Rp.100.000</div>
                    <Button type="primary" size="small" style={{backgroundColor: "#C7A659", marginTop: "5px"}}>Edit ucapan</Button>
                </Col>
            </Row>
        </div>
    )
}