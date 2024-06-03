import { Box, Button, Card, CardContent, Tooltip, Typography } from '@mui/material'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import FormPopup from './FormPopup'
import MainModal from './MainModal'
import useTranslation from 'next-translate/useTranslation'

const CardItem = ({item}) => {
    const [open, setOpen] =useState(false)
    const { t } = useTranslation('common')
  return (
    <Card sx={{  boxShadow:"none", border: 'none', borderRadius:"0"}}>
        <CardContent sx={{ p:"0 !important",display:"flex", justifyContent: "center", alignItems:"center", flexDirection:"column"}}>
            <Link href={`/product-details/${item?.id}`} style={{textDecoration:"none"}}>
                <Box height={{xs:"10rem",sm:"17rem"}} position="relative">
                    <Image 
                        src={item?.image || ""}
                        alt="image-card"
                        style={{width:"100%", height:"100%"}}
                        layout='fill'
                        objectFit='cover'
                    />
                </Box>
                <Tooltip title={item?.title} arrow>
                    <Typography
                        variant='h4'
                        color='common.black'
                        textAlign={"center"} 
                        mb={{xs:".5rem",sm:"1.5rem"}} 
                        mt={{xs:".5rem",sm:".7rem"}}
                        href={`/product-details/${item?.id}`}
                        sx={{
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                        display: '-webkit-box',
                        WebkitLineClamp: '1',
                        WebkitBoxOrient: 'vertical',
                        }}
                    >
                        {item?.title}
                    </Typography>
                </Tooltip>
            </Link>
            <Button onClick={() => setOpen(true)}  sx={{color: "common.primary", border:"2px solid #E31806", width:"100%", borderRadius:"12px", py:".6rem"}} >
                {t('btnCard')}
            </Button>
        </CardContent>
        {open &&
            <MainModal open={open} setOpen={setOpen} iconImg='document3.svg'>
                <FormPopup setOpen={setOpen} />
            </MainModal>
        }
    </Card>
  )
}

export default CardItem