import { useEffect, useState } from "react";

import { List, Skeleton, Avatar } from "antd";

const ContactList = ({ data }) => {
  return (
    <>
      <List
        itemLayout="horizontal"
        dataSource={data}
        renderItem={(item) => (
          <>
            <List.Item
              actions={[
                <a key="list-loadmore-edit">edit</a>,
                <a key="list-loadmore-more">more</a>,
              ]}
            >
              <Skeleton avatar title={false} loading={item.loading} active>
                <List.Item.Meta title={item.name} description={item.value} />
                <div>{item.status}</div>
              </Skeleton>
            </List.Item>
          </>
        )}
      />
    </>
  );
};

export default function () {
  const [contacts, setContacts] = useState([
    {
      id: 1,
      name: "Line",
      value: "@wo-best-wishes-1",
      status: 1,
    },
    {
      id: 2,
      name: "Line",
      value: "@wo-best-wishes-1",
      status: 1,
    },
  ]);

  useEffect(() => {
    // set dummy contacts using api
  }, []);

  return (
    <>
      <ContactList data={contacts} />
    </>
  );
}
