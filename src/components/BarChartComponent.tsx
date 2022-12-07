import React, { useState }from 'react';
import { BarChart, Bar, Tooltip, XAxis, YAxis} from 'recharts';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUpRightDots } from '@fortawesome/free-solid-svg-icons';
import { faSquareCaretUp } from '@fortawesome/free-solid-svg-icons';
import { faSquareCaretDown } from '@fortawesome/free-solid-svg-icons';

const BarChartComponent = () => {
  const demoUrl = 'https://codesandbox.io/s/bar-chart-with-customized-event-4k1bd';

  let [state, setState] = useState<any>({
    data: [
      {
        name: 'Jan',
        pv: 2400,
        amt: 2400,
      },
      {
        name: 'Feb',
        pv: 1398,
        amt: 2210,
      },
      {
        name: 'Mar',
        pv: 9800,
        amt: 2290,
      },
      {
        name: 'Apr',
        pv: 3908,
        amt: 2000,
      },
      {
        name: 'Mei',
        pv: 4800,
        amt: 2181,
      },
      {
        name: 'Jun',
        pv: 3800,
        amt: 2500,
      },
      {
        name: 'Jul',
        pv: 3800,
        amt: 2500,
      },
      {
        name: 'Aug',
        pv: 3800,
        amt: 2500,
      },
      {
        name: 'Sep',
        pv: 8800,
        amt: 2500,
      },
      {
        name: 'Okt',
        pv: 7800,
        amt: 2500,
      },
      {
        name: 'Nov',
        pv: 1800,
        amt: 2500,
      },
      {
        name: 'Des',
        pv: 7800,
        amt: 2500,
      },
    ],
    activeIndex: 0,
  });

    const { activeIndex, data } = state;
    const activeItem = data[activeIndex];

    return (
      <div style={{ width: '100%' }}>
        <div className='flex bg-black w-fit jutify-center m-auto items-center rounded'>
            <FontAwesomeIcon className='mr-1 w-[15px]' icon={faArrowUpRightDots} color='green'/>
            <span className='text-white font-semibold text-xs p-1'>23,5%</span>
        </div>
        <BarChart width={530} height={250} data={data}>
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Bar dataKey="pv" fill="#8884d8" />
        </BarChart>
        <div className='flex justify-evenly'>
            <div>
                <span>Target</span>
                <div className='flex justify-center items-center'>
                    <FontAwesomeIcon color='green' icon={faSquareCaretUp}/>
                    <span className='ml-2 text-sm font-semibold'>300</span>
                </div>
            </div>
            <div>
                <span>Last Week</span>
                <div className='flex justify-center items-center'>
                    <FontAwesomeIcon color='red' icon={faSquareCaretDown} />
                    <span className='ml-2 text-sm font-semibold'>100</span>
                </div>
            </div>
            <div>
                <span>Last Month</span>
                <div className='flex justify-center items-center'>
                    <FontAwesomeIcon color='green' icon={faSquareCaretUp}/>
                    <span className='ml-2 text-sm font-semibold'>1000</span>
                </div>
            </div>
            <div>
                <span>This Year</span>
                <div className='flex justify-center items-center'>
                    <FontAwesomeIcon color='green' icon={faSquareCaretUp}/>
                    <span className='ml-2 text-sm font-semibold'>60</span>
                </div>
            </div>
        </div>
      </div>
    );
}

export default BarChartComponent
