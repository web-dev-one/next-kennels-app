import Image from "next/image";


export default function MyCity({id=1, name="Near You", img="/happy-dog.jpg", des="Installing the safest dog kennesl in America in Arizona", detail="Guaranteed to protect your pets."}){
   
    return(<>
            <div key={id} className="flex flex-col justify-center w-100 h-100 mx-auto mt-4 px-4">
            <h1 data-testid="city" className="fs-1 text-4xl text-red-500 text-center relative mt-14">{name}</h1>
            <h3 className="fs-1 text-xl text-sky-900 mx-auto">{des}</h3>
            <Image
             src={img}
             width={550}
             height={680}
             className="mx-auto justify-center"
             alt={`${name}`}
             quality={75}
             loading={"eager"}
            />
            <h4 className="bg-white fs-1 text-3xl text-sky-900 mx-auto h-100 mb-14 pb-3">{detail}</h4>
            </div>
          </>)
}