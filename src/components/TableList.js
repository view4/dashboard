import React from "react";
import { Table } from "antd";

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
  },
  {
    title: 'Type',
    dataIndex: 'propType',
    key: 'propType',
  },
];


const TableList = ({ data }) => {

  return (
    <>
      <Table dataSource={data} columns={columns} />;
    </>
  )
};

export default TableList;
