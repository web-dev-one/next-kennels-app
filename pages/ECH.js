
import { useState, useRef } from 'react';
import Head from 'next/head';
import Image from 'next/image'
import Layout from '../components/Layout/Layout';

import { PaymentForm, 
         CreditCard, 
         GooglePay, 
         SquarePaymentsForm, 
         CreditCardInput } from 'react-square-web-payments-sdk';

import ColorPicker from '../components/Cart/ColorPicker';
import SizePicker from '../components/Cart/SizePicker'
import styles from '../components/Cart/ColorPicker.module.css'; // Import CSS module
// import { submitPayment } from "../actions/actions";


const APP_ID = process.env.NEXT_PUBLIC_Application_ID
const LOCAL_ID = process.env.NEXT_PUBLIC_Location_id

export default function PetSafeKennelsPage() {

   
    const [cartItems, setCartItems] = useState([]);
    const [showCheckout, setShowCheckout] = useState(false);
    const [showMyCart, setShowCart] = useState(false)
    
    const [selectedColorLarge, setSelectedColorLarge] = useState('');
    const [selectedColorMedium, setSelectedColorMedium] = useState('');
    const [selectedColorSmall, setSelectedColorSmall] = useState('');

    const [hexColorLarge, setHexLarge] = useState('');
    const [hexColorMedium, setHexMedium] = useState('');
    const [hexColorSmall, setHexSmall] = useState('');

    const [selectedSize, pickSize] = useState('');

    let [kennel$, set$]= useState(0);

    const lRef = useRef(selectedColorLarge);
    const mRef = useRef(selectedColorMedium);
    const sRef = useRef(selectedColorSmall);

    const addToCart = (item) => {
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

    const handleColorSelect = ({event, color, hex}) => {
        
        let size = event.target.parentElement.parentElement.parentElement.parentElement.parentElement.id
        
        if (size == 'Large'){
            setSelectedColorLarge(color)
            setHexLarge(hex)
        }
        else if (size == 'Medium'){ 
            setSelectedColorMedium(color)
            setHexMedium(hex) 
        } else { 
            setSelectedColorSmall(color)
            setHexSmall(hex)
        }
      };

      const handleSizeSelect = ({event, size, price}) =>{
        pickSize(size);
        set$(price);
      }
      
      const showSize = (size) =>{
        if (size === 'XL'){
            return <h1 className='inline mx-auto text-red-400'>Extra Large</h1>
          } else if (size === 'L'){
            return <h1 className='inline mx-auto text-red-400'>Large</h1>
          } else if (size === 'M'){
            return <h1 className='inline mx-auto text-red-400'>Medium</h1>
          } else { 
            return <h1 className='inline mx-auto text-red-400'>Small</h1>
        }
      }
      
      const showPhrase =()=>{
        if (selectedSize == 'XL' || selectedSize == 'L'){
            return "Pefect for Big dogs"
        } 
        else if (selectedSize  == 'M'){
            return 'Worlds Happiest Dog Kennel'
        }
        else { return 'Protection you can purchase'}
      }
      
    return (
        <Layout>
            <Head>
                <title>Pet Safe Kennels - Premium Dog Kennels</title>
            </Head>
            <div className="flex-col justify-center mx-auto w-full">
                <h1 className="text-3xl font-bold mt-8 mb-4">{showPhrase()}</h1>
                {/* Product cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-4 w-1/3 mx-auto">
                    {/* Product Card 1 */}
                    <div className="bg-white rounded-lg shadow-md p-12 pl-6 mt-20">
                        <h2 className="text-xl font-semibold mb-2"><>{selectedSize ? showSize(selectedSize) : ''} Kennel</></h2>
                        <p className="text-gray-600 mb-4 mx-auto">{showPhrase()}.</p>
                        <span className="inline-flex mb-4 total">{kennel$ == 0 ? '' : `$${kennel$}`}<p ref={lRef} className={`mx-2 font-bold text-${lRef.current}`}>{lRef.current != '' ? selectedColorLarge : ''}</p></span><br></br>
                        <span id="Large" className='flex-col lg:flex-col h-24 space-x-8 mx-auto'>
                        <Image 
                            src="/Loomis-Kennel-Box-md.jpg"
                            width={300}
                            height={50}
                            className='rounded-lg'
                        />
                        <span className='inline-block mx-2'>
                        <ColorPicker
                        selectedColor={selectedColorLarge}
                        hexColor={hexColorLarge}
                        setSelectedColor={setSelectedColorLarge}
                        handleColorSelect={handleColorSelect}
                        />
                        <SizePicker 
                            selectedSize={selectedSize}
                            pickSize={pickSize}
                            handleSizeSelect={handleSizeSelect}
                        />
                        {/* <p ref={lRef} className={`ml-0 text-xs font-bold align-bottom text-${lRef.current}`}>{lRef.current != '' ? selectedColorLarge : ''}</p> */}
                        </span>
                        <br/>
                        <button
                            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md"
                            onClick={() => addToCart({ name: selectedSize, price: kennel$, id: Math.floor(Math.random()* 100), color: selectedColorLarge, hex: hexColorLarge, size: selectedSize })}
                        >
                            Add to Cart
                        </button>
                        </span>
                    </div>
                    {/* Product Card 2 */}
                    {/* <div className="bg-white rounded-lg shadow-md p-4 mt-20">
                        <h2 className="text-xl font-semibold mb-2">Medium Kennel</h2>
                        <p className="text-gray-600 mb-4">Ideal for every dog.</p>
                        <span className="inline-flex mb-4 total">${2800}<p ref={mRef} className={`mx-2 font-bold text-${mRef.current}`}>{mRef.current != '' ? selectedColorMedium : ''}</p></span><br></br>
                        <span id="Medium" className='flex space-x-8'>
                        <Image 
                            src="/coyote-kennel-peoria.jpg"
                            width={150}
                            height={150}
                            className='rounded-lg'
                        />
                          <span className='inline-block mx-2'>
                        <ColorPicker
                        hexColor={hexColorMedium}
                        selectedColor={selectedColorMedium} 
                        setSelectedColor={setSelectedColorMedium}
                        handleColorSelect={handleColorSelect}
                        />
                        </span>
                        <button
                            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md"
                            onClick={() => addToCart({ name: 'Medium Kennel', price: 2800,  id: Math.floor(Math.random()* 100), color: selectedColorMedium, hex: hexColorMedium })}
                        >
                            Add to Cart
                        </button>
                        </span>
                    </div> */}
                    {/* Product Card 3 */}
                    {/* <div className="bg-white rounded-lg shadow-md p-4 mt-20 resize-none">
                        <h2 className="text-xl font-semibold mb-2">Small Kennel</h2>
                        <p className="text-gray-600 mb-4">Great for small breeds.</p>
                        <span className="inline-flex mb-4 total">${2200}<p ref={sRef} className={`mx-2 font-bold text-${sRef.current}`}>{sRef.current != '' ? selectedColorSmall : ''}</p></span><br></br>

                        <span className='flex space-x-8'>
                        <Image 
                            src="/coyote-kennel-peoria.jpg"
                            width={150}
                            height={150}
                            className='xs:w-full lg:w-1/4 flex-shrink-0 rounded-lg resize-none'
                        />
                        <ColorPicker
                        id={"Small"}
                        selectedColor={selectedColorSmall} 
                        setSelectedColor={setSelectedColorSmall}
                        handleColorSelect={handleColorSelect}
                        />
                        <button
                            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md resize-none"
                            onClick={() => addToCart({ name: 'Small Kennel', price: 2200,  id: Math.floor(Math.random()* 100), color: selectedColorSmall, hex: hexColorSmall })}
                        >
                            Add to Cart
                        </button>
                        </span>
                    </div> */}
                </div> 
                {/* Shopping Cart */}
                <div className="w-2/6 mt-8 mx-auto">
                    <h2 className="text-xl font-semibold mb-4">Shopping Cart</h2>
                    <ul className="divide-y divide-gray-200">
                        {cartItems.map((item, index) => (
                            <li key={index} className="flex justify-left items-center p-2">
                                <span>{showSize(item.size)}</span>
                                <span
                                    style={{ backgroundColor: item.hex }}
                                    className={styles.cartColor}
                                    alt={item.color} // Alt tag added with color name
                                 />
                                <span>${item.price} <button className='bg-white rounded-xl shadow-md p-2 del mx-auto'
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
                        applicationId={ APP_ID }
                        locationId={LOCAL_ID}
                        cardTokenizeResponseReceived={async (token, buyer) => {
                            const response = await fetch("../actions/actions", {
                                method: "POST",
                                headers: {
                                  "Content-type": "application/json",
                                },
                                body: JSON.stringify({
                                  sourceId: token.token,
                                }),
                              });
                              console.log(await response.json());
                          }
                        }
                        // cardTokenizeResponseReceived={async (token) => {
                        //     const result = await submitPayment(token.token);
                        //     console.log(result); } }
                       
                      >
                        <CreditCard buttonProps={{
                            css: {
                                 backgroundColor: "#771520",
                                 fontSize: "14px",
                                 color: "#fff",
                                 "&:hover": {
                                   backgroundColor: "#530f16",
                                 },
                               },  }}/>
                              
                     </PaymentForm>
                )}
            </div>
        </Layout>
    );
}
