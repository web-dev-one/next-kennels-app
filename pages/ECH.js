import { useState } from 'react';
import Head from 'next/head';
import Layout from '../components/Layout/Layout';
import { PaymentForm } from 'react-square-web-payments-sdk';
import MyShopping from '../components/Cart/MyShopping';


export default function PetSafeKennelsPage() {
    const [cartItems, setCartItems] = useState([]);
    const [showCheckout, setShowCheckout] = useState(false);
    const [showMyCart, setShowCart] = useState(false)

    const addToCart = (item) => {
        debugger
        setCartItems([...cartItems, item]);
    };

    const handleCheckout = () => {
        setShowCheckout(true);
    };

    const calculateTotal = () => {
        return cartItems.reduce((total, item) => total + item.price, 0);
    };

    const handleShowCart = () =>{
        return setShowCart(showMyCart ? false : true)
    }

    const handleDel = ({event, item}) =>{
        debugger
    }
    return (
        <Layout>
            <Head>
                <title>Pet Safe Kennels - Premium Dog Kennels</title>
            </Head>
            <div className="container mx-auto px-4">
                <h1 className="text-3xl font-bold mt-8 mb-4">Pet Safe Kennels</h1>
                {/* Product cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {/* Product Card 1 */}
                    <div className="bg-white rounded-lg shadow-md p-4">
                        <h2 className="text-xl font-semibold mb-2">Large Kennel</h2>
                        <p className="text-gray-600 mb-4">Perfect for big dogs.</p>
                        <button
                            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md"
                            onClick={() => addToCart({ name: 'Large Kennel', price: 499, id: Math.floor(Math.random()* 100) })}
                        >
                            Add to Cart
                        </button>
                    </div>
                    {/* Product Card 2 */}
                    <div className="bg-white rounded-lg shadow-md p-4">
                        <h2 className="text-xl font-semibold mb-2">Medium Kennel</h2>
                        <p className="text-gray-600 mb-4">Ideal for medium-sized dogs.</p>
                        <button
                            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md"
                            onClick={() => addToCart({ name: 'Medium Kennel', price: 399 })}
                        >
                            Add to Cart
                        </button>
                    </div>
                    {/* Product Card 3 */}
                    <div className="bg-white rounded-lg shadow-md p-4">
                        <h2 className="text-xl font-semibold mb-2">Small Kennel</h2>
                        <p className="text-gray-600 mb-4">Great for small breeds.</p>
                        <button
                            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md"
                            onClick={() => addToCart({ name: 'Small Kennel', price: 299 })}
                        >
                            Add to Cart
                        </button>
                    </div>
                </div>
                {/* Shopping Cart */}
                <div className="mt-8">
                    <h2 className="text-xl font-semibold mb-4">Shopping Cart</h2>
                    <ul className="divide-y divide-gray-200">
                        {cartItems.map((item, index) => (
                            <li key={index} className="flex justify-between items-center py-2">
                                <span>{item.name}</span>
                                <span>${item.price} <button className='bg-white rounded-xl shadow-md p-2 del'
                                    onClick={(event, item)=>handleDel({event, item})}
                                >x</button></span>

                            </li>
                        ))}
                    </ul>
                    {cartItems.length > 0 && (
                        <><button
                            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md mt-4"
                            onClick={handleCheckout}
                        >
                            Checkout 
                        </button>
                         <button
                         className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md mt-4"
                         onClick={handleCheckout}
                     >
                         👀Cart 
                     </button>
                     </>
                        )}
                        total: ${calculateTotal()}
                        {
                            setCartItems &&
                            <MyShopping items={cartItems}/>
                        }
                </div>
                {/* Payment Form */}
                {showCheckout && (
                    <PaymentForm
                        applicationId={process.env.NEXT_PUBLIC_Application_id}
                        cardTokenizeResponseReceived={(token, verifiedBuyer) => {
                            console.log('token:', token);
                            console.log('verifiedBuyer:', verifiedBuyer);
                            // Here you can handle the payment processing logic
                        }}
                        locationId={process.env.NEXT_PUBLIC_Location_id}
                    />
                )}
            </div>
        </Layout>
    );
}
