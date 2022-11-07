import { useRichEditorData } from "../../../api/website-settings/richEditorApiTemplate";

import ReactQuill from "react-quill";
import { Typography, Spin, Button } from "antd";

import "react-quill/dist/quill.snow.css";

export default function PrivacyPolicies() {
  const { data, loading, method } = useRichEditorData("privacy-policies");

  return (
    <>
      <div className="custom_website-settings">
        <Typography.Title level={4}>Kebijakan Privasi</Typography.Title>
        {loading ? (
          <Spin />
        ) : (
          <>
            <ReactQuill
              theme="snow"
              value={data.value}
              onChange={(e) => data.setValue(e)}
            />
            <div style={{ display: "flex", justifyContent: "flex-end" }}>
              <Button
                type="primary"
                danger
                size="small"
                onClick={method.update}
              >
                Simpan
              </Button>
            </div>
          </>
        )}
      </div>
    </>
  );
}
