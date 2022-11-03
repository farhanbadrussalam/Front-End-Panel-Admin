import { UploadOutlined, PlusOutlined } from "@ant-design/icons";
import { Button, message, Upload, Spin } from "antd";
import React, { useState } from "react";

const UploadButton = () => (
  <div>
    {loading ? <Spin size="large" /> : <PlusOutlined />}
    <div
      style={{
        marginTop: 8,
      }}
    >
      Upload
    </div>
  </div>
);

const UploadThumbnail = ({ fileSetter }) => {
  const [file, setFile] = useState([]);

  const handleUpload = () => {
    // You can use any AJAX library you like
    fetch("https://www.mocky.io/v2/5cc8019d300000980a055e76", {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then(() => {
        setFile([]);
        message.success("upload successfully.");
      })
      .catch(() => {
        message.error("upload failed.");
      })
      .finally(() => {
        setUploading(false);
      });
  };

  const props = {
    beforeUpload: (file) => {
      setFile([...file, file]);
      return false;
    },
  };
  return (
    <>
      <Upload {...props}>
        <Button icon={<UploadButton />}>Select File</Button>
      </Upload>
    </>
  );
};

export default UploadThumbnail;
