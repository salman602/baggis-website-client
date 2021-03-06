import React, { useState } from 'react';
import { Button, Form, FormControl, InputGroup } from 'react-bootstrap';

const MakeAdmin = () => {
    const [email, setEmail] = useState('');

    const handleOnBlur = e => {
        setEmail(e.target.value);
    }

    const handleMakeAdmin = (e) => {
        e.preventDefault();
        const user = { email }
        fetch('https://pacific-coast-57410.herokuapp.com/users/admin', {
            method: 'PUT',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    alert('Added to the Admin panel successfully.')
                }
            })

    }
    return (
        <div>
            <h3 className="mb-3">Provide an user email to make admin</h3>
            <Form onSubmit={handleMakeAdmin} className="w-50 mx-auto">
                <InputGroup className="mb-3">
                    <FormControl
                        onBlur={handleOnBlur}
                        type="email"
                        placeholder="Email"
                        aria-label="Email"
                        aria-describedby="basic-addon2"
                    />
                    <Button type="submit" variant="outline-secondary" >
                        Make Admin
                    </Button>
                </InputGroup>
            </Form>

        </div>
    );
};

export default MakeAdmin;