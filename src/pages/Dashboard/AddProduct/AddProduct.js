import React from 'react';
import { useForm } from "react-hook-form";
import './AddProduct.css'

const AddProduct = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        fetch('https://pacific-coast-57410.herokuapp.com/products', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    alert('Product added successfully.');
                    reset();
                }
            })


    };

    return (
        <div className="add-product">
            <h2 className="mb-4 custom-color">Add your product</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register("key")} placeholder="Key" /> <br />
                <input {...register("name")} placeholder="Product Name" /> <br />
                <input {...register("description")} placeholder="Description about product" /> <br />
                <input type="number" {...register("price")} placeholder="Price" /> <br />
                <input {...register("img")} placeholder="Image URL" /> <br />
                <input type="submit" value="Add Product" />
            </form>
        </div>
    );
};

export default AddProduct;