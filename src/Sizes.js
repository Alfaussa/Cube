import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import './index.css';
import { InputNumber, Space} from 'antd';


ReactDOM.render(
  <Space direction="vertical">
    <InputNumber addonBefore="X"/>
    <InputNumber addonBefore="Y"/>
    <InputNumber addonBefore="Z"/>
  </Space>,
  document.getElementById('container'),
);
