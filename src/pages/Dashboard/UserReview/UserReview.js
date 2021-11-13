import React from 'react';
import { Form } from 'react-bootstrap';
import { useForm } from "react-hook-form";
import useAuth from '../../../hooks/useAuth';


const UserReview = () => {
    const { user } = useAuth();
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        fetch('https://pacific-coast-57410.herokuapp.com/reviews', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(order => {
                if (order.insertedId) {
                    alert('Your order processed successfully');
                    reset();
                }
            })

    };
    return (
        <div>
            <h3>this is review page.</h3>
            <Form onSubmit={handleSubmit(onSubmit)}>
                {
                    user?.email && <div>
                        <input {...register("name")} defaultValue={user?.displayName} readOnly />
                        <input {...register("email")} defaultValue={user?.email} readOnly />
                    </div>
                }
                <input type="number" {...register("rating", { min: 1, max: 5 })} placeholder="Rating out of 5" />
                <Form.Control {...register("review")} as="textarea" rows={3} placeholder="Please write your feedback here." />
                <input type="submit" />
            </Form>
        </div>
    );
};

export default UserReview;