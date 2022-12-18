import { Col, Form, Input, InputNumber } from "antd";
import TextArea from "antd/lib/input/TextArea";
import React from "react";

export default function FormOrder() {
    return (
        <Col className="costum-form-order">
            <div className="title">Order Information</div>

            <Form size="middle" layout="horizontal">
                <Input className="inputForm" placeholder="Nama Pemesan" />
                <InputNumber className="inputForm" placeholder="Nomor Telepon" style={{width: '100%'}} />
                <Input className="inputForm" placeholder="Nama Pemesan" />
                <TextArea className="inputForm" placeholder="Catatan" rows={5}/>
            </Form>
        </Col>
    )
}