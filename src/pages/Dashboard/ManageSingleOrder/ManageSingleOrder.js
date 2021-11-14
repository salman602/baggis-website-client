import React from 'react';
import { Button, Spinner } from 'react-bootstrap';
const ManageSingleOrder = (props) => {
    const { order, setAllOrders } = props;

    const handleStatusChange = id => {
        const orderItem = { ...order }
        console.log(id);
        fetch(`https://pacific-coast-57410.herokuapp.com/orders/${id}`, {
            method: 'PUT',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(orderItem)
        })
            .then(res => res.json())
            .then(data => {

                console.log(data)
                if (data.modifiedCount > 0) {
                    alert('Order shipped successfullly');
                }
            })
    }
    return (
        <tr>
            <td>{order.name}</td>
            <td>{order.email}</td>
            <td>{order.productName}</td>
            <td>{order.quantity}</td>
            <td>{order.address}</td>
            <td>{order.phone}</td>
            <td className="text-center">
                <Button onClick={() => handleStatusChange(order._id)}>{order.status}</Button>
            </td>
        </tr>
    );
};

export default ManageSingleOrder;