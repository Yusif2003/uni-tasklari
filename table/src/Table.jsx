import { Button, Table } from 'antd';
import { useEffect, useState } from 'react';
import { getAllSuppliers } from './api/requests';

const columns = [
    {
        title: 'ID',
        dataIndex: 'id',
    },

    {
        title: 'Name',
        dataIndex: 'customerId',
        sorter: (a, b) => {
            if (a.customerId < b.customerId) {
                return -1
            }
            if (a.customerId > b.customerId) {
                return 1
            }
            return 0
        },

    },
    {
        title: 'Order',
        dataIndex: 'orderDate',
        sorter: (a, b) => {
            if (a.orderDate < b.orderDate) {
                return -1
            }
            if (a.orderDate > b.orderDate) {
                return 1
            }
            return 0
        },
    },
    {
        title: 'ShipVia',
        dataIndex: 'shipVia',
        sorter: (a, b) => {
            if (a.shipVia < b.shipVia) {
                return -1
            }
            if (a.shipVia > b.shipVia) {
                return 1
            }
            return 0
        },
    },
    {
        title: 'Delete'

    },
{
    title: 'Update'
}
  ];
const onChange = (pagination, filters, sorter, extra) => {
    console.log('params', pagination, filters, sorter, extra);
};
const Tabled = () => {
    let [orders, setOrders] = useState([])
    useEffect(() => {
        getAllSuppliers().then((data) => {
            setOrders(data);
            // console.log(data);
        });
    }, [])
    return (
        <Table columns={columns} dataSource={orders} onChange={onChange} />
    )
}

export default Tabled