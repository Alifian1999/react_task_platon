import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouseUser } from '@fortawesome/free-solid-svg-icons'
import { faWarehouse } from '@fortawesome/free-solid-svg-icons'
import { faBagShopping } from '@fortawesome/free-solid-svg-icons'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { faUserCircle } from '@fortawesome/free-regular-svg-icons'
import { faCircleH } from "@fortawesome/free-solid-svg-icons"
import { faQuestionCircle } from "@fortawesome/free-regular-svg-icons" 
import { faEnvelope } from "@fortawesome/free-solid-svg-icons"
import { faChartSimple } from '@fortawesome/free-solid-svg-icons'
import { faHandHoldingDollar } from '@fortawesome/free-solid-svg-icons'
import { faChevronUp } from '@fortawesome/free-solid-svg-icons'
import { faEllipsisVertical } from '@fortawesome/free-solid-svg-icons'

import PieChartsComponent from '../components/PieChartsComponent'
import BarChartComponent from '../components/BarChartComponent'

import '../assets/styling/components/dashboard.css'



const Dashboard : React.FC = () =>{

    return(
        <div className='h-full w-full flex overflow-x-hidden'>
           <div className='dashboard-left flex flex-col w-1/4 p-1'>
                <div className='h-1/6 flex justify-start items-center'>
                    <FontAwesomeIcon className='ml-2 bg-blue-300 p-2 rounded-full' icon={faCircleH} size='3x' color='white' />
                    <span className='font-bold ml-1 text-2xl text-blue-300'>ospital</span>
                </div>
                <div className='flex flex-col justify-start mt-8'>
                    <div className='flex mb-6 justify-start items-center p-3 bg-blue-200 active-menu'>
                        <FontAwesomeIcon className='pr-4 h-[20px] w-[20px]' icon={faHouseUser}/>
                        <span className='font-semibold'>Homepage</span>
                    </div>
                    <div className='flex mb-6 justify-start items-center p-3 '>
                        <FontAwesomeIcon className='pr-4 h-[20px] w-[20px]' icon={faBagShopping}/>
                        <span className='font-semibold'>Sales</span>
                    </div>
                    <div className='flex mb-6 justify-start items-center p-3 '>
                        <FontAwesomeIcon className='pr-4 h-[20px] w-[20px]' icon={faWarehouse}/>
                        <span className='font-semibold'>Inventory </span>
                    </div>
                    <div className='flex mb-6 justify-start items-center p-3 '>
                        <FontAwesomeIcon className='pr-4 h-[20px] w-[20px]' icon={faCartShopping}/>
                        <span className='font-semibold'>Purchase</span>
                    </div>
                    <div className='flex mb-6 justify-start items-center p-3 '>
                        <FontAwesomeIcon className='pr-4 h-[20px] w-[20px]' icon={faUserCircle}/>
                        <span className='font-semibold'>User Management</span>
                    </div>
                </div>
           </div>
           <div className='dashboard-right w-full flex-col bg-green-50 h-fit    '>
                <div className='w-full bg-white flex justify-end items-center'>
                    <FontAwesomeIcon className='mr-5 w-[24px h-[24px]' color='gray' icon={faQuestionCircle}/>
                    <FontAwesomeIcon className='mr-5 w-[24px h-[24px]' color='gray' icon={faEnvelope}/>
                    <div className='flex p-2'>
                        <div className='bg-gray-400 min-w-[30px] min-h-[30px] rounded-full m-auto'/>
                        <div className='flex flex-col ml-3'>
                            <span className='font-bold text-gray-500 text-xs mr-5'>Alifian Alfirazi</span>
                            <span className='font-bold text-gray-500 text-xs mr-5 text-start'>Owner</span>
                        </div>
                    </div>
                </div>
                <div className='flex flex-col justify-center p-5'>
                    <div className='flex flex-col'>
                        <h1 className='text-lg font-bold flex justify-left mb-4'>Order Statistic</h1>
                        <div className='flex justify-start'>
                            <div className='flex p-3 bg-white mb-5 h-fit rounded-md shadow w-[170px] flex justify-around mr-6'>
                                <div className='flex flex-col justify-between mr-4'>
                                    <span className='text-xs font-bold'>Total Selling</span>
                                    <span className='flex justify-left text-xl font-bold mt-4'>890</span>
                                </div>
                                <div className='flex flex-col justify-center items-center'>
                                    <FontAwesomeIcon icon={faChevronUp} color='blue'/>
                                    <span className='text-xs text-blue-500'>20.5% </span>
                                </div>
                            </div>
                            <div className='flex  p-3 bg-white rounded-md  h-fit shadow w-[170px] flex justify-around mr-6 flex-col items-start'>
                                <span className='text-xs font-bold'>Expired Inventory</span>
                                <span className='flex justify-left text-xl font-bold mt-4'>5</span>
                            </div>
                            <div className='flex  p-3 bg-white rounded-md  h-fit shadow w-[170px] flex justify-around mr-6 flex-col items-start'>
                                <span className='text-xs font-bold'>Out of Stock Inventory</span>
                                <span className='flex justify-left text-xl font-bold mt-4'>12</span>
                            </div>
                        </div>
                    </div>
                    <div className='flex justify-start items-start mt-6'>
                        <div className='flex flex-col p-3 bg-white rounded-md shadow w-[600px] flex justify-between items-start mr-6'>
                            <span>Sales Purchase</span>
                            <BarChartComponent/>
                        </div>
                        <div className='flex flex-col'>
                            <div className='flex pl-5 pr-5 pt-8 pb-8 bg-white mb-5 h-fit rounded-md shadow w-[250px] justify-between items-start mr-6'>
                                <FontAwesomeIcon size='3x' color='blue' icon={faChartSimple} />
                                <div className='flex flex-col'>
                                    <span className='font-semibold text-md'>Total Transaksi</span>
                                    <span>RP. 80.000.000</span>
                                </div>
                            </div>
                            <div className='flex pl-5 pr-5 pt-8 pb-8 bg-white mb-5 h-fit rounded-md shadow w-[250px] justify-between items-start mr-6'>
                                <FontAwesomeIcon size='3x' color='blue' icon={faBagShopping}/>
                                <div className='flex flex-col'>
                                    <span className='font-semibold text-md'>Sales</span>
                                    <span>289</span>
                                </div>
                            </div>
                            <div className='flex pl-5 pr-5 pt-8 pb-8 bg-white mb-5 h-fit rounded-md shadow w-[250px] justify-between items-start mr-6'>
                                <FontAwesomeIcon size='3x' color='blue' icon={faHandHoldingDollar} />
                                <div className='flex flex-col items-end'>
                                    <span className='font-semibold text-md'>Purchase</span>
                                    <span>289</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='flex h-fit p-4'>
                    <div className='flex p-3 pt-8 pb-8 bg-white mb-5 h-fit rounded-md shadow w-[450px] flex-col justify-between items-start mr-6'>
                        <div className='flex justify-between w-full pl-4 pr-4 mb-4'>
                            <span className='font-bold text-xl'>INVENTORY</span>
                            <FontAwesomeIcon icon={faEllipsisVertical} color='gray' className='w-[30px] h-[24px]'/>
                        </div>
                        <div className='w-full'>
                            <div className='flex justify-between pl-6 pr-6 mt-3 text-gray-500 font-semibold w-full'>
                                <span>New Order</span>
                                <span className='bg-green-300 rounded-lg w-[30px] h-[30px] flex justify-center'>10</span>
                            </div>
                            <div className='flex justify-between pl-6 pr-6 mt-3 text-gray-500 font-semibold w-full'>
                                <span>Prepare Order</span>
                                <span className='bg-green-300 rounded-lg w-[30px] h-[30px] flex justify-center'>2</span>
                            </div>
                            <div className='flex justify-between pl-6 pr-6 mt-3 text-gray-500 font-semibold w-full'>
                                <span>Waiting Pickup</span>
                                <span className='bg-green-300 rounded-lg w-[30px] h-[30px] flex justify-center'>3</span>
                            </div>
                            <div className='flex justify-between pl-6 pr-6 mt-3 text-gray-500 font-semibold w-full'>
                                <span>Sent</span>
                                <span className='bg-green-300 rounded-lg w-[30px] h-[30px] flex justify-center'>2</span>
                            </div>
                            <div className='flex justify-between pl-6 pr-6 mt-3 text-gray-500 font-semibold w-full'>
                                <span>Cancel</span>
                                <span className='bg-green-300 rounded-lg w-[30px] h-[30px] flex justify-center'>4</span>
                            </div>
                            <div className='flex justify-between pl-6 pr-6 mt-3 text-gray-500 font-semibold w-full'>
                                <span>Done</span>
                                <span className='bg-green-300 rounded-lg w-[30px] h-[30px] flex justify-center'>12</span>
                            </div>
                        </div>
                    </div>
                    <div className='flex p-3 pt-5 pb-8 bg-white mb-5 h-fit rounded-md shadow w-[450px] flex-col mr-6'>
                        <span className='flex justify-start font-bold text-xl'>Persentase Penjualan Obat</span>
                        <PieChartsComponent/>
                    </div>
                </div>
           </div>
        </div>
    )
}

export default Dashboard