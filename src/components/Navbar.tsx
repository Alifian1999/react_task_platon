import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faQuestionCircle } from "@fortawesome/free-regular-svg-icons" 
import { faCircleH } from "@fortawesome/free-solid-svg-icons"

const Navbar : React.FC = () =>{
    return(
        <div className="flex justify-between bg-gray-100 pr-7 pl-7 pt-3 pb-3">
            <FontAwesomeIcon icon={faCircleH} className='flex self-center text-3xl'/>
            <div className="flex">
                <FontAwesomeIcon icon={faQuestionCircle} className='mr-2 text-xl flex self-center'/>
                <span className="font-normal text-xs flex self-center">Pusat Bantuan</span>
            </div>
        </div>
    )
}

export default Navbar