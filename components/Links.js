import Link from "next/link";


export default function Links({links}){
        
    const makeSection=(links)=>( 
        links.map((s,i)=>(<div key={i} className="text-left flex-col justify-left items-center h-10 m-1 bg-purple-400 w-32">
                        <Link
                          className="text-xl my-0 py-0 mx-2"
                          href={s.href}
                          passHref={true}
                          scroll={false}
                          target="_blank"
                          rel="noopener noreferrer"
                        ><h1 className="text-red-600">{s.title}</h1></Link>
                  </div>)
        ))

    return(<>
            <div className="grid grid-col-1 justify-center bg-indigo-400 mt-4 mb-8 w-32">
                {makeSection(links)}
            </div>
          </>)
}