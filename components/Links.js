import Link from "next/link";


export default function Links({links}){
        console.log(links)
    const makeSection=(links)=>( 
        links.map((s,i)=>(<div key={i} className="text-left flex-col justify-left items-center mt-2 bg-purple-400 h-24 my-3 w-32">
                        <Link
                          className="text-xl h-24 my-3 mx-2"
                          href={s.href}
                          passHref={true}
                          scroll={false}
                          target="_blank"
                          rel="noopener noreferrer"
                        ><h1 className="text-red-600">{s.title}</h1></Link>
                  </div>)
        ))

    return(<>
            <div className="grid grid-col-1 justify-center bg-indigo-400 mt-5 w-32">
                {makeSection(links)}
            </div>
          </>)
}