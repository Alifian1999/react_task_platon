import { useState } from "react";

interface IState {
    id : string,
    name : string,
    order_id : string,
    product_id : string,
    price : number,
    qty : number,
}

const CalculateTotalPrice = () =>{
    const [state, setState] = useState<any[]>([])
    const [inputValue, setInputValue] = useState<IState>({
        id : '',
        name : '',
        order_id : '',
        product_id : '',
        price : 0,
        qty : 0,
    })

    const handleOnChange = (e:any) =>{
        let key = e.target.name;
        let value = e.target.value
        setInputValue({
            ...inputValue,
            [key] : value,
            id : Math.random().toString(36).substr(2, 5),
            order_id : Math.random().toString(36).substr(2, 5),
            product_id : Math.random().toString(36).substr(2, 5)
        })
    };

    const handleSubmit = () =>{
        setState([
            ...state,
            inputValue,
        ])
       
        setInputValue({
            id : '',
            name : '',
            order_id : '',
            product_id : '',
            price : 0,
            qty : 0,
        })
    };

    function GrandTotalPrice({data}:any) : JSX.Element{
        const totalPrice : number = data.reduce((total:any, current:IState) =>{  
            return total + (current.price * current.qty)
        },0)
        return <h2>TOTAL PRICE ORDERS : {totalPrice.toLocaleString()}</h2>
    }    

    return(
        <div className="flex flex-col">
            <div className=" w-80 flex flex-col m-auto">
                <label className="font-bold" htmlFor="name">Product Name</label>
                <input onChange={handleOnChange} 
                    id='name'
                    value={inputValue.name}
                    required 
                    name="name" className=" text-black-900 p-[2px] m-1 border-[1px] border-black" type="text" placeholder="product name" />
                
                <label className="font-bold" htmlFor="price">Price</label>
                <input onChange={handleOnChange} 
                    id='price'
                    value={inputValue.price}
                    required 
                    name="price" className=" text-black-900 p-[2px] m-1 border-[1px] border-black" type="number" placeholder="price" />
                
                <label className="font-bold" htmlFor="qty">QTY</label>
                <input onChange={handleOnChange} 
                    id='qty'
                    value={inputValue.qty}
                    required 
                    name="qty" className=" text-black-900 p-[2px] m-1 border-[1px] border-black" type="number" placeholder="qty"/>
                <button onClick={() =>handleSubmit()} className=" text-black-900 p-[4px] m-1 border-2 border-black mt-5">Submit</button>
            </div>
            <div className="flex flex-col justify-evenly">
                {state.length > 0?
                    <GrandTotalPrice data={state}/>
                    : 
                    <h2>TOTAL PRICE ORDERS : 0</h2>
                }
                <div className="flex justify-center">
                    {state.length > 0?
                        state.map((e:any, idx:number) =>
                        <div className="flex flex-col mt-7 m-2" key={idx}>
                            <h2 className="font-bold">Product Detail</h2>
                            <span>ID : {e.id}</span>
                            <span>ORDER ID : {e.order_id}</span>
                            <span>PRODUCT : {e.product_id}</span>
                            <span>NAME : {e.name}</span>
                            <span>PRICE : {parseInt(e.price).toLocaleString()}</span>
                            <span>QTY : {e.qty}</span>
                            <h3>SUB TOTAL PRICE: {(parseInt(e.price) * parseInt(e.qty)).toLocaleString()}</h3>
                        </div>
                        )
                        :
                        null
                    }
                </div>
            </div>
        </div>
    )
}

export default CalculateTotalPrice