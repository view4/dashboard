import React from "react";
import { List, Typography, Divider } from 'antd';

import ColorfulIcon from "./ColorfulIcon";



const data = [
  'Racing car sprays burning fuel into crowd.',
  'Japanese princess to wed commoner.',
  'Australian walks 100km after outback crash.',
  'Man charged over missing wedding girl.',
  'Los Angeles battles huge wildfires.',
];

const ActivitiesList = () => {

  return (
    <div className="db-home-section">
      <div>
        <h3>
          Recent Activities
        </h3>
      </div>
      <List
        header={<div>Header</div>}
        footer={<div>Footer</div>}
        bordered
        dataSource={data}
        renderItem={item => (
          <List.Item>
            <ColorfulIcon />
            <Typography.Text mark>[ITEM]</Typography.Text> {item}
          </List.Item>
        )}
      />
    </div>
  );
};

export default ActivitiesList;
