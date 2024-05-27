
export default function FlipTitle({show, setShow}){

    return(<>
            <h1 onClick={(e)=>{
               return  show ? setShow(false) : setShow(true) 
            }} className={`h-1/3 w-3/5 mx-auto fs-3 button static mt-10 py-10 montserrat text-yellow-400 drop-shadow-2xl cursor-pointer ${show ? '' : 'hidden'}`}>Premium Kennel Sanctuary</h1>
              <img onClick={(e)=>{
               return  show ? setShow(false) : setShow(true) 
            }} src={'/low-Profile-Dog-Kennel-card.jpg'} className={`h-28 w-3/5 mx-auto fs-3 button static mt-8 pt-5 montserrat text-green-400 drop-shadow-2xl ${show ? 'hidden': ''}`} />

          </>)
}