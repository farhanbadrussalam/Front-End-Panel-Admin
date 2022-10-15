import React from "react";

import SimpleCard from "./simpleCard";

export default function Cards({ name, quota, activeDate }) {
  return <SimpleCard name={name} quota={quota} activeDate={activeDate} />;
}
