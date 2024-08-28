import React, { useEffect, useState } from 'react';
import { SlBasketLoaded } from "react-icons/sl";
import { MdOutlineLightMode, MdNightlightRound } from "react-icons/md";
import { useNavigate } from 'react-router-dom';
import logo from '../images/logo.png';
import Badge from '@mui/material/Badge';
import { useDispatch, useSelector } from 'react-redux';
import DrawerComponents from './Drawer'; 
import { searchProducts } from '../redux/slices/productSlice';
import { MdSearch } from "react-icons/md";
import { MdFavoriteBorder } from "react-icons/md";
import { selectedTheme } from '../redux/slices/themeSlice';


const Header = () => {

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { products } = useSelector(store => store.basket);
  const { themes } = useSelector(store => store.theme)

  const [search, setSearch] = useState('');
  const [basket, setBasket] = useState(false);


  const searchChange = (e) => {
    setSearch(e.target.value);
    dispatch(searchProducts(e.target.value));
  };

  const changeBasket = () => {
    setBasket(prevState => !prevState);
  };


  return (
    <>
      <div className='flex items-center justify-between'>
        <div className='flex items-center'>
          <img onClick={() => navigate('/')} className='w-[90px] cursor-pointer' src={logo} alt="logo" />
          <p onClick={() => navigate('/')} className='text-xl'>MERT A.Ş.</p>
        </div>

        <div className='flex items-center gap-10 cursor-pointer'>
          <p onClick={() => navigate('/')}>Ana Sayfa</p>
          <p onClick={() => navigate('/products')}>Products</p>
          <p onClick={() => navigate('/')}>About</p>
          <p onClick={() => navigate('/')}>Contact</p>
        </div>

        <div className='flex items-center gap-5'>

          <div className={`relative border-1 rounded-lg ${themes ? '' : 'bg-white text-black'}`}>
            <MdSearch className='absolute bottom-2 left-2 text-xl' />
            <input
              className={`outline-none border-2 rounded-lg px-2 py-1 ps-8`}
              type="text"
              placeholder='Product Search'
              onChange={searchChange}
              value={search}
            />

          </div>

          <div className='flex items-center gap-7'>
            <Badge className='cursor-pointer' badgeContent={1} color="error">
              <MdFavoriteBorder className='text-3xl' color="action" />
            </Badge>

            <Badge
              badgeContent={products.length}
              color="error"
              onClick={changeBasket}
              className='cursor-pointer'
            >
              <SlBasketLoaded className='text-3xl' />
            </Badge>

            <div className='flex text-2xl cursor-pointer'>
              {themes
                ? <MdNightlightRound onClick={() => dispatch(selectedTheme())} />
                : <MdOutlineLightMode onClick={() => dispatch(selectedTheme())} />
              }
            </div>
          </div>

        </div>
      </div>


      <DrawerComponents open={basket} setBasket={setBasket} />
    </>

  );
};

export default Header;
