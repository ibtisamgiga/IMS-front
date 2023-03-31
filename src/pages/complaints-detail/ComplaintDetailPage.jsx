import { Typography } from '@mui/material'
import React from 'react'
import StatusHeader from '../../components/shared/header-with-status/StatusHeader'
import ImageText from '../../components/shared/image-with-text/ImageText'
import LabelText from '../../components/shared/text-with-label/LabelText'

function ComplaintDetailPage() {
  return (
    <div className='body'>
        <StatusHeader label={'Complaint ID :'}heading={'123'} status={'Pending'}/>
        <LabelText label={"Description"} 
        content=
        {'lorem ispsum lorem ispsum lorem ispsum lorem ispsum lorem ispsum lorem ispsum lorem ispsum lorem ispsum lorem ispsum lorem ispsum lorem ispsum lorem ispsum lorem ispsum lorem ispsum lorem ispsum lorem ispsum'}/>
         <Typography variant='h5'component={'h1'} sx={{fontWeight:'bold'}}>
          Complaint Submitted by
        </Typography>
        <ImageText image={''} name={"Empery Siphron"} email={"ali@gmail.com"} number={"02345677537"}/>
    
    </div>
  )
}

export default ComplaintDetailPage