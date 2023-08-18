import React from 'react';
import {FaBars} from 'react-icons/fa';
import {FaSearch} from 'react-icons/fa';
import {FaCartPlus} from 'react-icons/fa';
import {FaUser} from 'react-icons/fa';
import Offcan from './Offcanvas';
function Search() {
  return (
    <div className='search'>
        
 {/* <a href={<Offcan/>}><FaBars/></a> */}
 <Offcan/>
 <form >
  <input type="text"  placeholder=" Search for items" name="search"/>
  <button className='searchbtn' type="submit"><FaSearch/></button>
</form>
  <a href="">
<FaCartPlus/> Cart
  </a>

  <a href="">
<FaUser/> Contact
  </a>

        
        </div>
  )
}

export default Search