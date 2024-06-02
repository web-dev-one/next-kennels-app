

export default function DropDown({setSize}){

    return(<>
             <div className="mx-auto" onChange={(e)=>setSize(e.target.value)}>
                <label>Select Size
                 <select>
                   <option value="Small">Small</option>
                   <option value="Medium">Medium</option>
                   <option value="Large">Large</option>
                 </select>
                </label>
             </div>
           </>)
}