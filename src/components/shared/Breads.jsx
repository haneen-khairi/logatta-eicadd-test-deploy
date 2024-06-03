import React from 'react'
import { Breadcrumbs, Button, Typography } from '@mui/material';
import Link from 'next/link';

const Breads = ({ links }) => {
    const lastElement = links[links.length - 1];
  return (
    <Breadcrumbs separator='|' aria-label='breadcrumb' sx={{ color:"#621493", "a:hover": {textDecoration:"underline !important"}}}>
          {links.slice(0, -1).map(link => (
            <Link href={link.url} key={link.id} style={{ color:"white", textDecoration:"none"}}>
              <Typography variant='h5' color='#621493' sx={{textTransform:"capitalize"}}>{link.name}</Typography>
            </Link>
          ))}
          <Typography variant='h5' color='#621493' sx={{textTransform:"capitalize"}}>
            {lastElement.name}
          </Typography>
    </Breadcrumbs>
  )
}

export default Breads