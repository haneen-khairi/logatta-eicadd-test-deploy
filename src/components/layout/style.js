export const navMobile = {
    position:"absolute",top: '0', left:"0", height:"100vh", width:"100%", backgroundColor:"common.white",display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center", gap:"2rem", zIndex:"9999"
}

export const styleIconFooter = {
    borderRadius: '50%',
    padding:{xs:'.3rem', sm: '.5rem'} ,
    transition: 'all 400ms ease',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: 'fit-content',
    backgroundColor:"common.white",
    'svg': {
        color:'common.primary'
    },
    '&:hover': {
      transition: 'all 400ms ease',
      backgroundColor:"common.primary",
        'svg': {
            color:'common.white'
        }
    },
  };
export const contactIconFooter = {
    borderRadius: '50%',
    padding: '.5rem',
    transition: 'all 400ms ease',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: 'fit-content',
    backgroundColor:"common.primary",
    height:"fit-content",
    'svg': {
        color:'common.white'
    },
    '&:hover': {
      transition: 'all 400ms ease',
      backgroundColor:"common.white",
        'svg': {
            color:'common.primary'
        }
    },
  };

  export const buttonFooterList = 
  {fontWeight: '400',color:"common.darkGray", width:"fit-content",transition: 'all 400ms ease', '&:hover': { backgroundColor:"transparent", color:"common.white",transition: 'all 400ms ease', transform:"translateX(5px)" 
}}
  export const buttonContact = {
    fontWeight: '400', color:"common.darkGray", width:"fit-content" ,'&:hover': { backgroundColor:"transparent"}
}

export const buttonWhite = 
{color:"common.primary", width:"fit-content", backgroundColor:"common.white", p:{xs:".5rem 1rem",sm:".5rem 1.5rem"}, borderRadius:"8px", '&:hover': { backgroundColor:"common.white"}}
