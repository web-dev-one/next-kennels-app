import Image from "next/image"

export default function CoyoteService(){

    return( <>
            <div className="flex-column justify-center w-96 mx-auto">
              <h1 className="fs-1 text-xl fw-bolder text-orange-500">Pet Safe Kennels Coyote Services</h1>
              <Image 
                src={"/arizona.coyote.jpg"}
                height={500}
                width={500}
                className="mx-auto"
              />
              <p className="fs-1 text-xl fw-bolder text-red-500">We specialize in building kennels that are guaranteed to protect your pets from coyotes.</p>
              <p className="fs-1 text-xl fw-bolder text-red-600">With our expertise, your animals will be safe and sound.</p>
              <p className="fs-1 text-xl fw-bolder text-red-500">We take pride in our record - our service has never lost a pet to a coyote.</p>
              <p className="fs-1 text-xl fw-bolder text-red-400">Not only do we prioritize safety, but we also offer luxury and aesthetics.</p>
              <p className="fs-1 text-xl fw-bolder text-orange-800">Your home will look better than ever with our beautifully crafted kennels.</p>
              <p className="fs-1 text-xl fw-bolder text-orange-900">Trust Pet Safe Kennels to keep your pets safe and your home beautiful!</p>
            </div>
             <div className="flex w-80 justify-center mx-auto">
             <Image 
               src={"/coyote-kennel.jpg"}
               width={300}
               height={300}
               alt="coyote proof kennel"
               />
                <Image 
               src={"/coyote-kennel-scottsdale.jpg"}
               width={300}
               height={300}
               alt="coyote proof kennels installed in scottsdale"
               />
                   <Image 
               src={"/coyote-kennel-peoria.jpg"}
               width={300}
               height={300}
               alt="coyote proof kennels installed in peoria"
               />
               </div>
            </>
            )
}