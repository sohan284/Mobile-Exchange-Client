import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import Footer from '../../../Shared/Footer';
import Header from '../../../Shared/Header';

const UpdateProduct = ({ id }) => {
    const navigate = useNavigate()
    const [img] = useState();
    const { productId } = useParams();
    const [product, setProduct] = useState();
    useEffect(() => {
        const url = `https://mobile-exchange.onrender.com/product/${productId}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setProduct(data))
    })
    const handleUpdateProduct = () => {
        const data = {
            name: document.getElementById('name').value,
            price: parseInt(document.getElementById('price').value) ,
            disc: {
                color : document.getElementById('color').value,
            },
            img : img 
        }
        fetch(`https://mobile-exchange.onrender.com/product/manage/${productId}`, {
            method: 'PUT',
            headers: {
                'content-type': "application/json"
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
               toast.success('Product Updated')
               navigate('/manageProduct')
            })
    }
    return (
        <div>
            <Header></Header>
            <hr className='my-5' />
            <div  className= 'border-slate-300 my-10 w-[60%] mx-auto  rounded-lg shadow-xl border-2 container'>
                <h2 className='text-center text-xl text-primary my-5 font-bold'>Update Product</h2>
                <div className='flex flex-col mx-5 my-5'>
                    <div className='flex justify-evenly'>
                    <div>
                            <h1 className='font-bold pl-1 text-primary text text-[10px]'>Brand</h1>
                            <input disabled className=' w-24 my-1 text-xs  shadow-lg border rounded-md p-1'
                                id='place_origin'
                                type="text"
                              value={product?.disc?.brand}
                                placeholder={product?.disc?.brand}
                            />
                        </div>
                        <div>
                            <h1 className='font-bold pl-1 text-primary text-[10px]'>Model</h1>
                            <input disabled className='w-24 my-1 text-xs  shadow-lg border rounded-md p-1'
                                id='model_number'
                                type="text"
                                value={product?.disc?.model_number}
                                placeholder={product?.disc?.model}
                            />
                        </div>
                    </div>
                    <h1 className='font-bold pl-1 text-primary text-[10px]'>Name</h1>
                    <input className='mb-2 shadow-lg border rounded-md p-1'
                        name='Name'
                        id='name'
                        defaultValue={product?.name}
                        placeholder={product?.name}
                    />
                    <h1 className='font-bold pl-1 text-primary text-[10px]'>Price</h1>
                    <input className='mb-2 shadow-lg border rounded-md p-1'
                        name='price'
                        id='price'
                        defaultValue={product?.price}
                        placeholder={product?.price}
                    />
                    <h1 className='font-bold pl-1 text-primary text-[10px]'>Color</h1>
                    <input className='mb-2 shadow-lg border rounded-md p-1'
                        name='Name'
                        id='color'
                        defaultValue={product?.disc?.color}
                        placeholder={product?.disc?.color}
                    />
                    <h1 className='font-bold pl-1 text-primary text-[10px]'>Image URL</h1>
                    <input className='mb-5 shadow-lg border rounded-md p-1'
                        name='img'
                        type="text"
                        placeholder={product?.img}
                    />
                    <button onClick={handleUpdateProduct} className='btn btn-sm font-bold button border-none'>Update Product</button>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default UpdateProduct;