// import React from "react";

import { message } from 'antd';

const Message = (type, msg) => {
  type === "success" ?
  message.success(msg) :
  type === "error" ? 
  message.error(msg) : 
  message.warning(msg);
}

export default Message;
