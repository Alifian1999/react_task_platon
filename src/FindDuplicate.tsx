import React, { useState } from "react";


const FindDuplicate : React.FC = () =>{

    const [state, setState] = useState<string>('')

    const HandleDuplicate : React.FC = () =>{
        let duplicate : any = {}
        const data : string[] = [...state]

        data.forEach((x:string)=> { 
            duplicate[x] = (duplicate[x] || 0) + 1 
        });

        let keys : string[] = Object.keys(duplicate)
        let values : number[] = Object.values(duplicate)
    
        return(
            <div className="flex flex-col">
                { keys.map((e:any, idx:number) =>
                <span key={idx}>The Number <b>{e}</b> appears {values[idx] === 1? 0 : values[idx] - 1} times</span>
                )}
            </div>
        )
    }

    return (
        <div className="flex flex-col">
            <h2 className="font-bold">Find Duplicate Value</h2>
            <input 
                placeholder="Type here ..." 
                type="text" 
                className="text-black-900 p-1 border-2 border-black w-[400px] m-auto mt-3 mb-2" 
                onChange={(e) =>setState(e.target.value)}
            />
            <HandleDuplicate/>
        </div>
    )
}

export default FindDuplicate