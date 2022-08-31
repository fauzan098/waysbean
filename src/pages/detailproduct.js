import React from 'react'
import Navbaruser from '../components/navbaruser'

import Rectangle1 from '../assets/img/Rectangle1.svg'

import '../styles/detailproduct.css'

export default function detailproduct() {
  return (
    <>
    <Navbaruser/>
    <div className='container mt-5'>
        <div className='row'>
            <div className='col'>
                <img className='img-product' src={Rectangle1}/>
            </div>
            <div className='col'>
                <h2 className='card-title mt-4'>Guatemala Beans</h2>
                <p className='stock mt-2 mb-5'>Stock : 500</p>
                <p style={{textAlign: 'justify'}} className='content mt-5 mb-3 float end'>Hampir semua referensi sepakat mengatakan bahwa kopi pertama kali ditemukan di Ethiopia,
                    meskipun ada juga beberapa protes yang menyatakan bahwa Coffea arabica sebenarnya muncul pertama kali di bagian selatan Sudan.
                    Karena para gembala Ethiopia adalah manusia pertama yang mengonsumsi kopi—walau saat itu mereka baru mengonsumsi buah/cherry-nya saja,
                    maka gagasan tentang “Ethiopia sebagai tempat asal kopi” pun semakin kuat.</p>
                <div className='float-end'>
                    <p className='price mt-3 mb-5'>Rp.300.000</p>    
                </div>
                <button className='button-cart'>add cart</button>
            </div>
        </div>
    </div>
    </>
  )
}


