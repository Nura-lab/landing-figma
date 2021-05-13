import React from 'react'
import './Fifth.css'
import homebtn from '../../image/2.png'
import filesbtn from '../../image/3.png'
import meetingsbtn from '../../image/4.png'
import downloadbtn from '../../image/5.png'

export const Fifth = () => {
    return (
        <div className='mainB'>
            {/* 1 */}
            <div className='blockA'>
                <p className="titleA">ABOUT US</p>
                <h2 className="titleB" style={{paddingTop: '20px'}}>Read about our app</h2>
            </div>
            {/* 2 */}
            <div className="blockB">
                {/* 1 */}
                <div className="blockBA">
                    <span className='circleA'>
                        <img className="img1" style={{alignItems: 'center', paddingTop: '26px'}} src={homebtn} alt=""/>
                    </span>
                    <h3 className="line1">Overview</h3>
                    <p className="text1">Brute laoreet efficiendi id <br/>
                     his, ea illum nonumes <br/>
                      luptatum pro.</p>
                </div>
                {/* 2 */}
                <div className="blockBC">
                    <span className='circleA'>
                        <img className="img2" style={{alignItems: 'center', paddingTop: '26px'}} src={filesbtn} alt=""/>
                    </span>
                    <h3 className='line1'>Files</h3>
                    <p className='text1'>No vim nulla vitae <br/>
                     intellegat. Ei enim error <br/>
                      ius, solet atomorum conceptam ex has.</p>
                </div>
                {/* 3 */}
                <div className="blockBD">
                <span className='circleA'>
                        <img className="img3" style={{alignItems: 'center', paddingTop: '26px'}} src={meetingsbtn} alt=""/>
                    </span>
                    <h3 className='line1'>Meeting chats</h3>
                    <p className="text1">Vim ne tacimates <br/>
                     neglegentur. Erat diceret <br/>
                      omittam at est.</p>
                </div>
                {/* 4 */}
                <div className="blockBE">
                <span className='circleA'>
                        <img className="img4" style={{alignItems: 'center', paddingTop: '26px'}} src={downloadbtn} alt=""/>
                    </span>
                    <h3 className='line1'>Save events</h3>
                    <p className="text1">Nisl idque mel ea, <br/>
                     nominati voluptatum.</p>
                </div>
            </div>
            {/* 3 */}
            <div className="blockC">
                <div className='btn22'>
                    <span className="text22">Read more</span>
                </div>
                <div className='btn23'>
                    OR
                </div>
                <div className='btn24'>
                    <span className='text23'>Get started</span>
                </div>
            </div>
        </div>
    )
}