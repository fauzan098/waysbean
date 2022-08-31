import React from 'react'
import Navbaruser from '../components/navbaruser'

import '../styles/detailcart.css'

import Rectangle2 from '../assets/img/Rectangle2.svg'
import Profile from '../assets/img/profilephoto.png'
import Icon from '../assets/img/Icon.svg'
import Qrcode from '../assets/img/qrcode.svg'

export default function Detailcart() {
  return (
    <>
    <Navbaruser/>
    <div className='container mt-5 mb-5' style={{width:'958px'}}>
        <div className='row mt-5'>
            <div className='col left'>
                <div className='row'>
                    <h2 className='fw-bolder ms-4' id='title-profile'>MY Profile</h2>
                    <div className='col float end mt-3' id='cart-profile'>
                        <img className='profile-img ms-4' src={Profile}/>
                    </div>
                    <div className='cart-user col mt-3'>
                        <h5 className='fs-5 fw-bolder' id='title-name'>Full Name</h5>
                        <p className='name fw-normal'>radif ganteng</p>
                        <h5 className=' fs-5 fw-bolder email' id='title-name'>Email</h5>
                        <p className='name fw-normal'>radifgans@mail.com</p>
                    </div>
                </div>
            </div>
            <div className='col right'>
                    <h2 className='fw-bolder' id='title-transaction'>My Transaction</h2>
                <div className='row mt-4' id='transaction'>
                    <div className='col'>
                        <div className='row'>
                            <div className='col-4 mt-1'>
                                <img className='img-product-detail' src={Rectangle2}/>
                            </div>
                            <div className='col-8'>
                                <div className='mb-2'></div>
                                <p id='name-product'>Guatemala Beans</p>
                                <div className='d-flex mt-1'>
                                    <p className='fw-bolder' id='day'>Saturday,</p>
                                    <p id='date'>5 march 2020</p>
                                </div>
                                <div>
                                    <p id='price'>Price : Rp.300.900</p>
                                    <p id='price'>Qty : 2</p>
                                    <p className='fw-bold' id='subtotal'>Sub Total : Rp.601.000</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col ms-auto'>
                        <div className='mb-2 ms-3' id='icon'>
                            <img id='logo-waysbeans-transaction' src={Icon}/>
                        </div>
                        <div className='mb-2 ms-4' id='icon'>
                            <img id='qrcode' src={Qrcode}/>
                        </div>
                        <div id='status-waitingapprove'>
                        </div>
                            <p id='name-status-waitingapprove'>Waiting Approve</p>
                    </div>
                </div>
                <div className='row mt-4' id='transaction'>
                    <div className='col'>
                        <div className='row'>
                            <div className='col-4 mt-1'>
                                <img className='img-product-detail' src={Rectangle2}/>
                            </div>
                            <div className='col-8'>
                                <div className='mb-2'></div>
                                <p id='name-product'>Guatemala Beans</p>
                                <div className='d-flex mt-1'>
                                    <p className='fw-bolder' id='day'>Saturday,</p>
                                    <p id='date'>5 march 2020</p>
                                </div>
                                <div>
                                    <p id='price'>Price : Rp.300.900</p>
                                    <p id='price'>Qty : 2</p>
                                    <p className='fw-bold' id='subtotal'>Sub Total : Rp.601.000</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col ms-auto'>
                        <div className='mb-2 ms-3' id='icon'>
                            <img id='logo-waysbeans-transaction' src={Icon}/>
                        </div>
                        <div className='mb-2 ms-4' id='icon'>
                            <img id='qrcode' src={Qrcode}/>
                        </div>
                        <div id='status-succsess'>
                        </div>
                            <p id='name-status-success'>succsess</p>
                    </div>
                </div>
                <div className='row mt-4' id='transaction'>
                    <div className='col'>
                        <div className='row'>
                            <div className='col-4 mt-1'>
                                <img className='img-product-detail' src={Rectangle2}/>
                            </div>
                            <div className='col-8'>
                                <div className='mb-2'></div>
                                <p id='name-product'>Guatemala Beans</p>
                                <div className='d-flex mt-1'>
                                    <p className='fw-bolder' id='day'>Saturday,</p>
                                    <p id='date'>5 march 2020</p>
                                </div>
                                <div>
                                    <p id='price'>Price : Rp.300.900</p>
                                    <p id='price'>Qty : 2</p>
                                    <p className='fw-bold' id='subtotal'>Sub Total : Rp.601.000</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col ms-auto'>
                        <div className='mb-2 ms-3' id='icon'>
                            <img id='logo-waysbeans-transaction' src={Icon}/>
                        </div>
                        <div className='mb-2 ms-4' id='icon'>
                            <img id='qrcode' src={Qrcode}/>
                        </div>
                        <div id='status-complete'>
                        </div>
                            <p id='name-status-complete'>complete</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}
