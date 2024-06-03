import React, {useState, useEffect} from "react"
import FlipTitle from './FlipTitle'
import DropDown from './DropDown'
export default function PaymentLinks(){

        const [show, setShow] = useState(true);
        const [size, setSize] = useState('Small');
        const [price, setPrice] = useState(1400);
        const [link, setLink] = useState("https://square.link/u/qmPMRRcF?src=embed");
        console.log("SIZE", size)

        const showMyPrice = () =>{
          if (size === 'Small'){
            setPrice(1400)
          }
          if (size === 'Medium'){
            setPrice(1700)
          }
          if (size === 'Large'){
            setPrice(2200)
          }
        }

        const setMyLink = () =>{
          if (size === 'Small'){
            setLink("https://square.link/u/qmPMRRcF")
          }
          if (size === 'Medium'){
            setLink("https://square.link/u/yIhrXS5X")
          }
          if (size === 'Large'){
            setLink("https://square.link/u/NXZnLkjl")
          }
        }

        useEffect(()=>{
            showMyPrice()
            setMyLink()
        })
        
        const medPrice = 1700

        return(<>
                  <div className="container flex-col mx-auto button my-5 h-1/2 mt-10 pt-10 w-2/6 static mobileKennel">
                  <div className='flex-col price mx-auto static mt-10'>
                    <FlipTitle show={show} setShow={setShow} />
                    <p className="text-center text-lg text-gray-700 mt-5 montserrat tsd">
                     Step into the realm of unmatched quality and security with our premium pet kennels, backed by two decades of excellence in craftsmanship.
                    </p>
                    <p className="text-center text-lg text-gray-700 mt-3 montserrat tsd">
                     Available in three sizes to accommodate pets of all breeds and sizes, our kennels are designed to meet the diverse needs of your furry family members.
                    </p>
                    <p className="text-center text-lg text-gray-700 mt-3 montserrat tsd">
                     Each kennel is constructed with a robust 14-gauge steel frame, meticulously welded and reinforced to withstand the test of time.
                    </p>
                    <p className="text-center text-lg text-gray-700 mt-3 montserrat tsd">
                     The walls and roof are adorned with Del Mar panels, offering both durability and aesthetic appeal.
                    </p>
                    <p className="text-center text-lg text-gray-700 mt-3 montserrat tsd">
                     And with an assortment of captivating colors to choose from, including Polar White, Hawaiian Blue, Desert Beige, and more, you can customize your pet's sanctuary to reflect your personal style and preferences.
                    </p>
                    <p className="text-center text-lg text-gray-700 mt-3 montserrat tsd">
                     Experience the pinnacle of pet protection with our premium kennels—where quality, craftsmanship, and peace of mind converge to create a haven your furry companions will adore.
                    </p>
                    <DropDown setSize={setSize}/>
                    <p className='mx-auto montserrat tsd gn'>${price}</p>
                    <img className="mx-auto rounded" src={'/smallKennel.jpg'} alt="starter kit" height={"300px"} width={"400px"}/>
                    <a target="_blank" href={link} className="justify-center mx-auto buy pb-8 mb-8">Buy now</a>
                    </div>
                    </div>
               </>)
}