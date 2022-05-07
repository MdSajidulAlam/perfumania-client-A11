import React, { useRef } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import toast from 'react-hot-toast';
import auth from '../../firebase.init';
import './AddItem.css'

const AddItem = () => {
    const [user] = useAuthState(auth)
    // const nameRef=useRef()
    // const emailRef=useRef()
    const productNameRef = useRef()
    const photoURLRef = useRef()
    const descriptionRef = useRef()
    const priceRef = useRef()
    const quantityRef = useRef()
    const supplierRef = useRef()


    const handleAddItem = e => {
        e.preventDefault()
        const email = user.email
        const name = productNameRef.current.value
        const picture = photoURLRef.current.value
        const about = descriptionRef.current.value
        const price = priceRef.current.value
        const quantity = quantityRef.current.value
        const supplier = supplierRef.current.value

        const newItem = { email, name, price, picture, about, supplier, quantity }
        console.log(newItem);
        const url = 'https://secure-retreat-97587.herokuapp.com/addItem'
        console.log(url);
        fetch(url, {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(newItem)
        })
            .then(res => res.json())
            .then(data => {
                toast.success('Item added')
            })

    }

    return (
        <div className='w-25  addItem-container mx-auto my-5'>
            <form onSubmit={handleAddItem}>
                <div className='p-3'>
                    <input className='p-2 rounded-pill w-100 input-field' value={user?.email} type="email" name='email' readOnly />
                </div>


                <div className='p-3'>
                    <input ref={productNameRef} className='border-0 p-2 rounded-pill w-100 input-field' type="text" name='productName' placeholder='Product Name' />
                </div>
                <div className='p-3'>
                    <input ref={supplierRef} className='border-0 p-2 rounded-pill w-100 input-field' type="text" name='supplierName' placeholder='Supplier Name' />
                </div>
                <div className='p-3'>
                    <input ref={photoURLRef} className='border-0 p-2 rounded-pill w-100 input-field' type="text" name='image' placeholder='URL' />
                </div>

                <div className='p-3'>
                    <textarea ref={descriptionRef} className='border-0 rounded w-100 p-2 input-field' name="Description" id="" cols="10" rows="10" placeholder='Description'></textarea>
                </div>

                <div className='p-3'>
                    <input ref={priceRef} className='border-0 p-2 rounded-pill  w-100 input-field' type="number" name="Price" placeholder='Enter Price' />
                </div>

                <div className='p-3'>
                    <input ref={quantityRef} className=' border-0 p-2 rounded-pill w-100 input-field' type="number" name="Quantity" placeholder='Enter Quantity' />
                </div>

                <div className='d-flex justify-content-center align-items-center p-3'>
                    <input className='btn btn-primary' type="submit" value="Add Product" />
                </div>
            </form>
        </div>
    );
};

export default AddItem;