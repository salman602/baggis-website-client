import React, { useState, useEffect } from 'react';
import { Table } from 'react-bootstrap';

const ManageAllOrders = () => {
    const [allOrders, setAllOrders] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/orders')
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
                        allOrders.map(order => <tr
                            key={order._id}
                        >
                            <td>{order.name}</td>
                            <td>{order.email}</td>
                            <td>{order.productName}</td>
                            <td>{order.quantity}</td>
                            <td>{order.address}</td>
                            <td>{order.phone}</td>
                            <td className="text-center">
                                Pending
                            </td>

                        </tr>)
                    }

                </tbody>
            </Table>
        </div>
    );
};

export default ManageAllOrders;