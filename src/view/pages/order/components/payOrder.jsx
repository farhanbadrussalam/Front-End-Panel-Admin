import { Button, Col, Form, Input, Row } from "antd";
import React from "react";

export default function PayOrder() {
    return (
        <div className="custom-pay-order">
            <Form style={{display: 'flex'}}>
                <Input className="inputForm" style={{flex: 2, marginTop: '0px'}} placeholder="Kode Kupon" />
                <Button type="text" className="btn-text">Terapkan</Button>
            </Form>
            <Row style={{marginTop: '20px', fontSize: '14px'}}>
                <Col span={12}>Sub total</Col>
                <Col span={12} style={{textAlign: 'right'}}>Rp.200.000</Col>
            </Row>
            <Row style={{marginTop: '8px', fontSize: '14px'}}>
                <Col span={12}>Potongan Diskon</Col>
                <Col span={12} style={{textAlign: 'right'}}>Rp.2000</Col>
            </Row>
            <Row style={{marginTop: '23px'}}>
                <Col span={12} style={{fontSize: '16px'}}>Total Bayar :</Col>
                <Col span={12} style={{textAlign: 'right', fontSize:'24px'}}>Rp.300.000</Col>
            </Row>
            
            <Row style={{marginTop: "24px"}}>
                <Button type="primary" size="middle" style={{backgroundColor: "#C7A659", width:"100%"}}>Lanjut ke pembayaran</Button>
            </Row>
        </div>
    )
}