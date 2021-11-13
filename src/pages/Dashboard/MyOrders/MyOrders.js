import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import './MyOrders.css'
import useAuth from '../../../hooks/useAuth';
// import useOrders from '../../../hooks/useOrders';


const MyOrders = () => {
    const trashBox = <FontAwesomeIcon icon={faTrashAlt} />;
    const { user } = useAuth();
    const [myOrders, setMyOrders] = useState([]);
    // const [orders] = useOrders();
    useEffect(() => {
        const url = `https://pacific-coast-57410.herokuapp.com/orders/${user.email}`;
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setMyOrders(data)
            })
    }, [user.email]);


    const handleCancelOrder = id => {
        const proceed = window.confirm('Are you sure , You want to Cancel Order?');
        if (proceed) {
            const url = `https://pacific-coast-57410.herokuapp.com/orders/${id}`
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert('Order canceled successfully');
                        const remainingOrders = myOrders.filter(order => order._id !== id);
                        setMyOrders(remainingOrders);
                    }
                })
        }
    }

    return (
        <div>
            <Table striped bordered hover size="sm">
                <thead>
                    <tr>
                        <th>Product Name</th>
                        <th>Unit Price</th>
                        <th>Quantity</th>
                        <th>Address</th>
                        <th>Phone</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        myOrders.map(order => <tr
                            key={order._id}
                        >
                            <td>{order.productName}</td>
                            <td>{order.unitprice}</td>
                            <td>{order.quantity}</td>
                            <td>{order.address}</td>
                            <td>{order.phone}</td>
                            <td className="text-center">
                                <button className="border-0 text-danger bg-transparent" onClick={() => handleCancelOrder(order._id)}>{trashBox}</button>
                            </td>

                        </tr>)
                    }

                </tbody>
            </Table>
        </div>
    );
};

export default MyOrders;