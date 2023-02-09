import React from 'react';
import { AiFillDelete } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import Footer from '../../../Shared/Footer';
import Header from '../../../Shared/Header';
import useProducts from './../../../Hooks/useProducts';

const ManageProduct = () => {
    const [products, setProduct] = useProducts();
    const navigate = useNavigate();

    const handleDeleteProduct = (id) =>{
        fetch(`https://mobile-exchange.onrender.com/product/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    const remaining = products.filter(product => product._id !== id);
                    setProduct(remaining);
                    toast('deleted')
                    
                }
            })
    }
    const handleUpdateProduct =(id)=>{
        navigate(`/manageProduct/${id}`);
    }
    return (
        <div>
            <Header></Header>
            <div   className='container my-10 border mx-auto'>
                <h1 className='text-center my-3 font-bold text-2xl text-primary'>Customise Product</h1>
                {
                    products.map(product => <div>
                        <div className='flex mx-2  hover:bg-secondary border text-primary my-2 p-1  justify-between items-center'>
                            <div className='flex my-5 items-center'>
                                <div className='h-12 w-12'>
                                    <img src={product.img} alt="" />
                                </div>
                                <h1 className='px-3 font-semibold'> {product.name}</h1>
                               
                            </div>
                            <div>
                                <button onClick={()=>handleUpdateProduct(product._id)} className='mr-5 btn btn-sm btn-ghost my-3 text-blue-500'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
                                </svg>
                                </button>
                                <button onClick={()=>handleDeleteProduct(product._id)} className='mr-5 btn btn-sm text-2xl btn-ghost my-3 text-red-500'><AiFillDelete></AiFillDelete>
                                </button>
                               

                            </div>
                        </div>

                    </div>)
                }
                
            </div>
            <Footer></Footer>
        </div>
    );
};

export default ManageProduct;