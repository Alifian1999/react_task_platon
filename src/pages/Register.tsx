import Navbar from "../components/Navbar"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faMapLocation } from "@fortawesome/free-solid-svg-icons"
import { faFileCircleCheck } from "@fortawesome/free-solid-svg-icons"
import { faCloudArrowUp } from "@fortawesome/free-solid-svg-icons"
import { faFileInvoice } from "@fortawesome/free-solid-svg-icons"
import '../assets/styling/components/register.css'
import Select from 'react-select'

import { useState } from "react"


const Register : React.FC = () =>{
    const [process, setProcess] = useState<boolean>(false)

    const RegisterForm : React.FC = () =>{
        return(
            <div className="border-[1px] w-[400px] rounded-xl h-fit p-7 flex flex-col items-start bg-white">
                <h1 className="mb-3 font-bold">Input Data Perusahaan</h1>
                <div className="flex flex-col w-full">
                    <input  className="mb-3 border-[1px] border-gray-300 rounded p-1 placeholder-black text-md font-medium focus:outline-none" type="text" placeholder="Email*"/>
                    <input  className="mb-3 border-[1px] border-gray-300 rounded p-1 placeholder-black text-md font-medium focus:outline-none" type="text" placeholder="Kata Sandi*"/>
                    <input  className="mb-3 border-[1px] border-gray-300 rounded p-1 placeholder-black text-md font-medium focus:outline-none" type="text" placeholder="Konfirmasi Kata Sandi*"/>
                    <div className="flex justify-between w-full mt-3">
                        <div className="flex items-center justify-start w-full">
                            <input type="checkbox" />
                            <span className="text-xs ml-3 text-start">
                                Dengan membuat akun, 
                                <b className="text-orange-300 mr-1 ml-1">
                                Anda menyetujui Ketentuan <br/>
                                Penggunaan dan Pemberitahuan Privasi 
                                </b>
                                aplikasi OLIN
                            </span>
                        </div>
                    </div>
                    <div className="flex justify-around">
                        <button onClick={()=>setProcess(false)} className="mb-3 border-[1px] border-gray-300 rounded-md p-1 focus:outline-none mt-10 bg-white font-semibold text-gray-400 w-full m-1">Kembali</button>
                        <button className="mb-3 border-[1px] border-gray-300 rounded-md p-1 focus:outline-none mt-10 bg-orange-500 font-bold text-white w-full m-1">Register</button>
                    </div>
                </div>
            </div>
        )
    }

    return(
        <div className={process?"waves-side-register h-full w-full" : "waves-side-pendaftaran"}>
            <Navbar/>
            <div className="w-full flex justify-around mt-5">
                <div className="flex flex-col mt-10 w-1/4">
                    <div className="flex justify-start items-center">
                        <FontAwesomeIcon  className="text-1xl bg-blue-500 p-3" style={{ borderRadius:'50%'}} color='white' icon={faMapLocation}/>
                        <span className="ml-2 font-bold text-sm">Pendaftaran Sarana</span>
                    </div>
                    <div className={process? "divider-after w-fit" : "divider-before w-fit" }/>
                    <div className="flex justify-start items-center w-full">
                        <FontAwesomeIcon className={process? "text-1xl bg-blue-500 p-3" : "text-1xl bg-gray-400 p-3"} style={{ borderRadius:'50%'}} color='white' icon={faFileCircleCheck} />
                        <span className={process? "ml-2 font-bold text-sm text-black" : "ml-2 font-bold text-sm text-gray-400"}>Register</span>
                    </div>
                </div>
                    { process?
                    <RegisterForm />
                    :
                    <div className="border-[1px] w-[400px] rounded-xl h-fit p-7 flex flex-col items-start bg-white">
                        <h1 className="mb-3 font-bold">Input Data Perusahaan</h1>
                        <div className="flex flex-col w-full">
                            <Select className="mb-3 text-start" placeholder='Bidang Usaha*'/>
                            <input  className="mb-3 border-[1px] border-gray-300 rounded p-1 focus:outline-none" type="text" placeholder="Nama Perusahaan*"/>
                            <input  className="mb-3 border-[1px] border-gray-300 rounded p-1 focus:outline-none" type="text" placeholder="NPWP Perusahaan*"/>
                            <input  className="mb-3 border-[1px] border-gray-300 rounded p-1 focus:outline-none" type="text" placeholder="Alamat Sesuai NPWP*"/>
                            <Select className="mb-3 text-start" placeholder='Provinsi'/>
                            <Select className="mb-3 text-start" placeholder='Kote/Kabupaten' />
                            <Select className="mb-3 text-start" placeholder='Kecamatan'/>
                            <input  className="mb-3 border-[1px] border-gray-300 rounded p-1 focus:outline-none" type="text" placeholder="Kode Pos*"/>

                            <div className="flex flex-col">
                                <h2 className="font-bold mb-4 flex justify-start">Upload Kelengkapan Data</h2>
                                <div className="flex flex-col border-[1px] border h-fit rounded">
                                    <div className="flex justify-start items-center bg-blue-500 rounded p-2">
                                        <FontAwesomeIcon icon={faFileInvoice} color="white"/>
                                        <span className="text-white ml-3">NIB *</span>
                                    </div>
                                    <div className="flex flex-col p-5 rounded">
                                        <FontAwesomeIcon icon={faCloudArrowUp} size='2x'/>
                                        <span className="font-bold mt-2 text-sm">Unggah NIB Valid</span>
                                    </div>
                                </div>
                            </div>
                            <button 
                                className="mb-3 border-[1px] border-gray-300 rounded-md p-1 focus:outline-none mt-10 bg-orange-500 font-bold text-white"
                                onClick={() => setProcess(true)}
                                >
                                Selanjutnya
                            </button>
                        </div>
                    </div>
                    }
            </div>
        </div>
    )
}

export default Register