import React, { useState, useEffect } from 'react';

const ManageAllOrders = () => {
    const [allOrders, setAllOrders] = useState([]);
    useEffect(() => {
        fetch()
    }, [])
    return (
        <div>
            <h3>This is Manage all orders page only for admin</h3>
        </div>
    );
};

export default ManageAllOrders;