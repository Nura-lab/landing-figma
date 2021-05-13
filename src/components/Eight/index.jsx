import React from 'react'
import './Eight.css'
import avatar from '../../image/avatar.png'
import dots1 from '../../image/dots1.png'

export const Eight = () => {
    return (
        <div className='qts'>
           <div className='quotes1'>
                <h4 className='quotes3'>TESTIMONIALS</h4>
                <h2 className='quotes4'>Customers's quotes</h2>
                <p className='quotes5'>Brute laoreet efficiendi id his, ea illum nonumes <br/>
                 luptatum pro. Usu atqui laudem an.</p>
           </div>

           <div className='avatar'>
                <p className='avatar1'>Quidam vocibus eum ne, erat consectetuer <br/>
                 voluptatibus ut nam. Eu usu vidit tractatos, <br/>
                  vero tractatos ius an, in mel diceret <br/>
                   persecuti.</p>
                   <img className='avatarImg' src={avatar} alt=""/>
                <div className='avatarDot'>
                    <img src={dots1} alt=""/>
                </div>
           </div>
        </div>
    )
}