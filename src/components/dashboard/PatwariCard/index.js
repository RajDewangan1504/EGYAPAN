
import React from 'react'
import CardWrap from '../../common/CardWrap'
import CustomTypo from '../../common/CustomTypo/CustomTypo'
import styles from './styles.module.css'
import { PieChart } from '@mui/x-charts/PieChart';
export default function PatwariCard() {
  return (
    <div>
      <CardWrap>
      
        <div className={styles.main}>
        <div style={{height : 200 , width : 200}}>
        <PieChart
            colors={['red', 'blue', 'green']} // Use palette
            series={[
              {
                data: [
                  { value: 10, color: 'orange' }, // Use color property
                  { value: 20, color: 'red' }, // Use color property
                  { value: 30, color: 'green' }, // Use color property

                  // ...
                ],
              },
            ]}
            sx={{height : 200 , width : 50}}

          />
          </div>
          <div>
            <CustomTypo>Abhishek Sahu</CustomTypo>
          </div>
          <div>
            <CustomTypo>Halka Number : 16</CustomTypo>
          </div>
          <CustomTypo>Abhishek Sahu</CustomTypo>
          <CustomTypo>Abhishek Sahu</CustomTypo>

        </div>
      </CardWrap>
    </div>
  )
}


