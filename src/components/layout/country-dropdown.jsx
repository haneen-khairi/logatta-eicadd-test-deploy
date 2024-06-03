import React, { useState, useEffect } from 'react';
import { Menu, MenuItem, Button, Box, Typography } from '@mui/material';
import Image from 'next/image';

const CountryDropdown = () => {
  const countries = [
    { name: 'الأردن', flag: '/assets/images/jordan.png' },
    { name: 'الامارات', flag: '/assets/images/united.webp' },
  ];

  const [anchorEl, setAnchorEl] = useState(null);
  const [activeFlag, setActiveFlag] = useState(countries[0]);
  const open = Boolean(anchorEl);

  useEffect(() => {
    const storedCountry = localStorage.getItem('selectedCountry');
    if (storedCountry) {
      const parsedCountry = JSON.parse(storedCountry);
      setActiveFlag(parsedCountry);
    }
  }, []);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (country) => {
    setAnchorEl(null);
    setActiveFlag(country);
    localStorage.setItem('selectedCountry', JSON.stringify(country));
  };

  return (
    <div>
      <Box
        onClick={handleClick}
        sx={{ textTransform: 'none', display: 'flex', alignItems: 'center', cursor:'pointer', mx:'2rem' }}
      >
        <Image src={activeFlag.flag} alt={activeFlag.name} width={24} height={16} />
      </Box>
      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={() => setAnchorEl(null)}
        PaperProps={{
          style: {
            maxHeight: '200px',
            width: '250px',
          },
        }}
      >
        {countries.map((country, index) => (
          <MenuItem key={index} onClick={() => handleClose(country)} sx={{padding:"1rem"}}>
            <Box display="flex" alignItems="center">
              <Image src={country.flag} alt={country.name} width={28} height={18} />
              <Typography sx={{ ml: 1 }}>{country.name}</Typography>
            </Box>
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
};

export default CountryDropdown;
