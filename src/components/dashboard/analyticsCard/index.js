import React from 'react'
import CardWrap from '../../common/CardWrap'
import CustomTypo from '../../common/CustomTypo/CustomTypo'
import styles from './styles.module.css'
export default function AnalyticsCard({
  title,
  value
}) {
  return (

    <div className={styles.main}>
      <CustomTypo variant={"h1"} fontWeight={600} fontSize={"1rem"}>{title}</CustomTypo>
      <CustomTypo variant={"subtitle1"} fontWeight={500} fontSize={"1rem"}>{value}</CustomTypo>
    </div>

  )
}
