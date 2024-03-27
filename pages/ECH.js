import { useState } from 'react';
import Head from 'next/head';
import Image from 'next/image'
import Layout from '../components/Layout/Layout';
import { PaymentForm } from 'react-square-web-payments-sdk';
import ColorPicker from '../components/Cart/ColorPicker';
import styles from '../components/Cart/ColorPicker.module.css'; // Import CSS module


export default function PetSafeKennelsPage() {
    const [cartItems, setCartItems] = useState([]);
    const [showCheckout, setShowCheckout] = useState(false);
    const [showMyCart, setShowCart] = useState(false)
    const [selectedColor, setSelectedColor] = useState('');
    const [hexColor, setHex] = useState('');

    const addToCart = (item) => {
        debugger
        setCartItems([...cartItems, item]);
    };

    const handleCheckout = () => {
        setShowCheckout(true);
    };

    const calculateTotal = () => {
        let total = cartItems.reduce((total, item) => total + item.price, 0);
        return <span className='total'>{total}</span>
    };

    const handleShowCart = () =>{
        return setShowCart(showMyCart ? false : true)
    };

    const handleDel = ({event}) =>{
        let id = event.target.id
        setCartItems(cartItems.filter(i=>i.id != parseInt(id)))
    };

    const handleColorSelect = (color) => {
        setSelectedColor(color.color);
        setHex(color.hex);
      };
    
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
                    <div className="bg-white rounded-lg shadow-md p-4 mt-20">
                        <h2 className="text-xl font-semibold mb-2">Large Kennel</h2>
                        <p className="text-gray-600 mb-4">Perfect for big dogs.</p>
                        <span className="mb-4 total">${3400}</span><br></br>
                        <span className='flex space-x-8'>
                        <Image 
                            src="/coyote-kennel-peoria.jpg"
                            width={150}
                            height={150}
                            className='rounded-lg'
                        />
                        <ColorPicker 
                        selectedColor={selectedColor} 
                        setSelectedColor={setSelectedColor}
                        handleColorSelect={handleColorSelect}
                       
                        />
                        <button
                            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md"
                            onClick={() => addToCart({ name: 'Large Kennel', price: 3400, id: Math.floor(Math.random()* 100), color: selectedColor, hex: hexColor })}
                        >
                            Add to Cart
                        </button>
                        </span>
                    </div>
                    {/* Product Card 2 */}
                    <div className="bg-white rounded-lg shadow-md p-4 mt-20">
                        <h2 className="text-xl font-semibold mb-2">Medium Kennel</h2>
                        <p className="text-gray-600 mb-4">Ideal for every dog.</p>
                        <span className="mb-4 total">${2800}</span><br></br>
                        <span className='flex space-x-8'>
                        <Image 
                            src="/coyote-kennel-peoria.jpg"
                            width={150}
                            height={150}
                            className='rounded-lg'
                        />
                        <ColorPicker 
                        selectedColor={selectedColor} 
                        setSelectedColor={setSelectedColor}
                        handleColorSelect={handleColorSelect}
                       
                        />
                        <button
                            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md"
                            onClick={() => addToCart({ name: 'Medium Kennel', price: 2800,  id: Math.floor(Math.random()* 100), color: selectedColor, hex: hexColor })}
                        >
                            Add to Cart
                        </button>
                        </span>
                    </div>
                    {/* Product Card 3 */}
                    <div className="bg-white rounded-lg shadow-md p-4 mt-20">
                        <h2 className="text-xl font-semibold mb-2">Small Kennel</h2>
                        <p className="text-gray-600 mb-4">Great for small breeds.</p>
                        <span className="mb-4 total">${2200}</span><br></br>
                        <span className='flex space-x-8'>
                        <Image 
                            src="/coyote-kennel-peoria.jpg"
                            width={150}
                            height={150}
                            className='rounded-lg'
                        />
                        <ColorPicker 
                        selectedColor={selectedColor} 
                        setSelectedColor={setSelectedColor}
                        handleColorSelect={handleColorSelect}
                       
                        />
                        <button
                            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md"
                            onClick={() => addToCart({ name: 'Small Kennel', price: 2200,  id: Math.floor(Math.random()* 100), color: selectedColor, hex: hexColor })}
                        >
                            Add to Cart
                        </button>
                        </span>
                    </div>
                </div>
                {/* Shopping Cart */}
                <div className="mt-8">
                    <h2 className="text-xl font-semibold mb-4">Shopping Cart</h2>
                    <ul className="divide-y divide-gray-200">
                        {cartItems.map((item, index) => (
                            <li key={index} className="flex justify-left items-center p-2">
                                <span>{item.name}</span>
                                <span
                                    style={{ backgroundColor: item.hex }}
                                    className={styles.cartColor}
                                    alt={item.color} // Alt tag added with color name
                                 />
                                <span>${item.price} <button className='bg-white rounded-xl shadow-md p-2 del'
                                    id={item.id} onClick={(event)=>handleDel({event})}
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
                     </>
                        )}
                        total: ${calculateTotal()}
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
