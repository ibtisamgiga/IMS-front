import React from 'react'
import DetailHeader from '../../components/shared/details-header/DetailHeader'
import ImageText from '../../components/shared/image-with-text/ImageText'
import { Divider, Typography } from '@mui/material'
import dp from '../../components/shared/image-with-text/dummy'
import LabelText from '../../components/shared/text-with-label/LabelText'
function AdminDetailPage() {
  return (
    <div className='body'>
        <DetailHeader heading={"Admin Detail"}/>
        <ImageText image={dp} name={"Empery Siphron"} email={"ali@gmail.com"} number={"02345677537"}/>
        <Divider sx={{ borderBottomWidth: 4, marginTop: "20px" }} />
        <Typography variant='h5'component={'h1'} sx={{fontWeight:'bold'}}>
          Organization
        </Typography>
        <ImageText name={"Giga Labs Pvt"} email={"galabs@gmail.com"}/>
        <LabelText label={"Representative Name"} content={'John Doe'}/>
        <LabelText label={"Representative Contact No"} content={'03425617382'}/>
        <LabelText label={"Bio"} 
        content=
        {'lorem ispsum lorem ispsum lorem ispsum lorem ispsum lorem ispsum lorem ispsum lorem ispsum lorem ispsum lorem ispsum lorem ispsum lorem ispsum lorem ispsum lorem ispsum lorem ispsum lorem ispsum lorem ispsum'}/>
        <LabelText label={"Address"} content={'abc lahore pakistan'}/>
    </div>
  )
}

export default AdminDetailPage