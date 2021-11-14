import React from 'react';
import { Form } from 'react-bootstrap';
import { useForm } from "react-hook-form";
import useAuth from '../../../hooks/useAuth';
import './UserReview.css';


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
            .then(feedback => {
                if (feedback.insertedId) {
                    alert('Thank you for your valueable feedback');
                    reset();
                }
            })

    };
    return (
        <div className="user-review">
            <h2 className="mb-4 custom-color">Please Rate us</h2>
            <Form onSubmit={handleSubmit(onSubmit)}>
                {
                    user?.email && <div>
                        <input {...register("name")} defaultValue={user?.displayName} readOnly /> <br />
                        <input {...register("email")} defaultValue={user?.email} readOnly /> <br />
                    </div>
                }
                <input type="number" {...register("rating", { min: 1, max: 5 })} placeholder="Rating out of 5" /> <br />
                <Form.Control {...register("review")} as="textarea" rows={3} placeholder="Please write your feedback here." /> <br />
                <input type="submit" value="Rate" />
            </Form>
        </div>
    );
};

export default UserReview;