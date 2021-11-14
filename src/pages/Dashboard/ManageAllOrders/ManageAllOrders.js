import React, { useState, useEffect } from 'react';
import { Table } from 'react-bootstrap';
import ManageSingleOrder from '../ManageSingleOrder/ManageSingleOrder';

const ManageAllOrders = () => {
    const [allOrders, setAllOrders] = useState([]);
    useEffect(() => {
        fetch('https://pacific-coast-57410.herokuapp.com/orders')
            .then(res => res.json())
            .then(data => setAllOrders(data))
    }, []);


    return (
        <div>
            <Table striped bordered hover size="sm">
                <thead>
                    <tr>
                        <th>Customer Name</th>
                        <th>Customer Email</th>
                        <th>Product Name</th>
                        <th>Quantity</th>
                        <th>Address</th>
                        <th>Phone</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        allOrders.map(order => <ManageSingleOrder
                            key={order._id}
                            order={order}
                            setAllOrders={setAllOrders}
                        >

                        </ManageSingleOrder>)
                    }

                </tbody>
            </Table>
        </div>
    );
};

export default ManageAllOrders;