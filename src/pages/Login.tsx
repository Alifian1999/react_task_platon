import Navbar from "../components/Navbar"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faLock } from "@fortawesome/free-solid-svg-icons"
import { faEnvelope } from "@fortawesome/free-solid-svg-icons"
import IconDoctors from '../assets/images/icon-doctors.png'

import '../assets/styling/components/login.css'

const Login : React.FC = () =>{
    const handleRegister = () =>{
        window.location.replace('/register')
    }
    return(
        <div className="h-full">
            <Navbar/>
            <div className="flex justify-evenly items-center bg-green-50 h-1/ waves">
                <div>
                    <div>
                        <b className='text-4xl font-normal leading-relaxed'>Selamat Datang</b> <br /> 
                        <b className='text-4xl font-normal '>Perangkat Lunak Farmasi</b> <br /> 
                        <span className="text-xl leading-10"> Sistem Manajemen Apotek Online</span>
                    </div>
                </div>
                <img src={IconDoctors} alt="doctors" className="w-[500px] object-contain"/>
            </div>
            <section className="bg-[#32D5F6] h-3/5 min-w-full">
                <div className="flex flex-col w-[600px] m-auto h-full pt-7">
                    <h1 className="font-bold text-xl">Silakan masuk ke dalam akun anda dan kelola apotek Anda.</h1>
                    <form action="" className="flex flex-col items-start m-auto h-1/2 mt-5">
                        <label htmlFor="email" className="font-semibold text-slate-600 text-left">EMAIL</label>
                        <div className="border-2 w-[300px] rounded-md bg-white flex flex-row">
                            <FontAwesomeIcon icon={faEnvelope} color='gray' className='m-auto pl-2 pr-1 bg-white'/>
                            <input type="text" id="email" className="w-full p-2 pl-1 focus:outline-none"/>
                        </div>
                        <label htmlFor="password" className="font-semibold text-slate-600">PASSWORD</label>
                        <div className="border-2 w-[300px] rounded-md bg-white flex flex-row">
                            <FontAwesomeIcon type="thin" icon={faLock} color='gray' className='m-auto pl-2 pr-1 bg-white'/>
                            <input type="password" id="password" className="w-full p-2 pl-1 focus:outline-none"/>
                        </div>
                        <div className="flex justify-between w-[300px] mt-3 mb-2">
                            <div className="flex items-center justify-start w-1/4">
                                <input type="checkbox" />
                                <span className="text-xs ml-1 mb-1">ingat saya</span>
                            </div>
                            <span className="text-red-600 text-sm">lupa password?</span>
                        </div>
                        <button className="w-[300px] bg-blue-600 p-2 rounded-lg font-bold text-white">MASUK</button>
                    </form>
                    <span className="m-auto mt-0 tracking-wider text-gray-500 font-medium text-sm">
                        Belum Registrasi? Silakan klik 
                        <b className="text-orange-500 cursor-pointer ml-1" onClick={handleRegister}>Daftar</b>
                    </span>
                </div>
            </section>
        </div>
    )
}

export default Login