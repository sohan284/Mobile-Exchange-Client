import React, { useState } from 'react';
import { toast } from 'react-toastify';
import Footer from '../../../Shared/Footer';
import Header from '../../../Shared/Header';

const AddProduct = () => {
    const [pvalue, setPValue] = useState();
    const [name, setName] = useState();
    const [price, setPrice] = useState();
    const [color, setColor] = useState();
    const [Ram, setRam] = useState();
    const [productType, setProductType] = useState();
    const [placeOrigin, setPlaceOrigin] = useState();
    const [modelNumber, setModelNumber] = useState();
    const [size, setSize] = useState();
    const [productMaterial, setProductMaterial] = useState();
    const [img, setImg] = useState();

    const handleAddProduct = event => {
        const data = {
            p_id: parseInt(pvalue),
            name: name,
            price: parseInt(price),
            Color: parseInt(color),
            
            disc: {
                product_type: productType,
                place_origin: placeOrigin,
                ram: Ram,
                product_metarial: productMaterial,
                color: color,
                size: size
            },
            img: img

        }
        const url = `https://mobile-exchange.onrender.com/product`;
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                setName('');
                setColor('')
                setRam('');
                setModelNumber('')
                setPrice();
                setPlaceOrigin();
                toast.success("Product Successfully Added")
            })
    };
    return (
        <div>
            <Header></Header>
            <div   className=' my-10 border-slate-200 text-primary mx-auto  shadow-xl border container'>
                <h2 className='text-center text-xl text-primary my-5 font-bold'>Add Product</h2>
                <form className='flex flex-col mx-5 my-5'>
               
                    <h1 className='font-bold pl-1 text-[10px]'>Name</h1>
                    <input className='mb-1 shadow-lg border text-black rounded-md p-1'
                        name='Name'
                        type="Name"
                        required
                        onChange={(e) => setName(e.target.value)}
                        placeholder='Name'
                    />
                   <div className='flex  justify-center'>
                   <div className='flex flex-col lg:flex-row lg:justify-evenly'>
                        <div className='px-1'>
                            <h1 className='font-bold pl-1 text-[10px]'>Price</h1>
                            <input className='mb-1 shadow-lg border text-black rounded-md p-1'
                                name='Price'
                                type="Number"
                                onChange={(e) => setPrice(e.target.value)}
                                placeholder='Price'
                            />
                        </div>
                        <div className='px-1'>
                            <h1 className='font-bold pl-1 text-[10px]'>Color</h1>
                            <input className='mb-1 shadow-lg border text-black rounded-md p-1'
                                name='color'
                                type="Number"
                                onChange={(e) => setColor(e.target.value)}
                                placeholder='color'
                            />
                        </div>
                        <div className='px-1'>
                            <h1 className='font-bold pl-1 text-[10px]'>ram</h1>
                            <input className='mb-1 shadow-lg border  text-black  rounded-md p-1'
                                name='ram'
                                type="text"
                                onChange={(e) => setRam(e.target.value)}
                                placeholder='Ram'
                            />
                        </div>
                        <div className='px-1'>
                            <h1 className='font-bold pl-1 text-[10px]'>Model</h1>
                            <input className='mb-1 shadow-lg border  text-black  rounded-md p-1'
                                name='model_number'
                                type="text"
                                onChange={(e) => setModelNumber(e.target.value)}
                                placeholder='model_number'
                            />
                        </div>
                        <div className='px-1'>
                            <h1 className='font-bold pl-1 text-[10px]'>Origin</h1>
                            <input className='mb-1 shadow-lg border  text-black  rounded-md p-1'
                                name='place-origin'
                                type="text"
                                onChange={(e) => setPlaceOrigin(e.target.value)}
                                placeholder=''
                            />
                        </div>
                    </div>

                   </div>

                    <h1 className='font-bold pl-1 text-[10px]'>Image URL</h1>
                    <input className='mb-1 shadow-lg border text-black rounded-md p-1'
                        name='img'
                        type="text"
                        onChange={(e) => setImg(e.target.value)}
                        placeholder='URL'
                    />
                   
                    <button onClick={handleAddProduct} className='btn btn-sm font-bold button border-none'>Add Product</button>
                </form>



            </div>
            <Footer></Footer>
        </div>
    );
};
export default AddProduct;