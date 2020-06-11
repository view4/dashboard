import React from "react";
import { Table } from "antd";

import Avatar from "./Avatar";

const BlankField = () => <span className="blank-tb-val"> Not-Available </span>

const dataSource = [
  {
    key: '1',
    name: 'Mike',
    age: 32,
    address: '10 Downing Street',
  },
  {
    key: '2',
    name: 'John',
    age: 42,
    address: '10 Downing Street',
  },
];

const columns = [
  {
    title: 'Address',
    dataIndex: 'address',
    key: 'address',
  },
  {
    title: 'Price',
    dataIndex: 'askingPrice',
    key: 'askingPrice',
  },
  {
    title: 'State',
    dataIndex: 'status',
    key: 'status',
  },
  {
    title: 'Sale Price',
    dataIndex: 'sellingPrice',
    key: 'sellingPrice',
    render: price => <> {price || <BlankField/>}</>
  },
  {
    title: 'Type',
    dataIndex: 'propertyType',
    key: 'propertyType',
  },
  {
    title: 'Team',
    dataIndex: 'team',
    key: 'team',
    render: team => (
      <div className={"avatar-table-row"}>
        {
          team && team.map((name, i) => <Avatar letter={name.slice(0,1)} key={i}/>
        )}
      </div>
    )
  },
];


const TableList = ({ data }) => {

  return (
    <>
      <Table dataSource={data} columns={columns}/>
    </>
  )
};

export default TableList;
