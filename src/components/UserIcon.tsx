import React from "react";

import Tooltip from "@mui/material/Tooltip";


export default function UserIcon({
  text,
  fill = "#fafafa",
  size = 30,
  style = {},
  tooltip = false,
  ...props
}: {
  text?: string;
  fill?: string;
  size?: string | number;
  style?: object;
  tooltip?: any;
}) {
  return (
    <span
      style={{
        marginRight: "10px",
        width: size,
        height: size,
        borderRadius: "50%",
        backgroundColor: fill,
        textAlign: "center",
        lineHeight: size,
        padding: "3px",
        fontWeight: 500,
        color: "#ffffff",
        ...style,
      }}
      {...props}
    >
      {text && text.toUpperCase()}
    </span>
  );
}
