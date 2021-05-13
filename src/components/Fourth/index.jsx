import React from 'react'
import './Fourth.css'
import seven from '../../image/Group26.png'
import seven2 from '../../image/Group27.png'
import seven3 from '../../image/third.png'



export const Fourth =() => {
    return (
        <div className="block4">
            <div className="desktop">
            <p className="padd1 padd11" >DESKTOP AND MOBILE APP</p>
                <h1 className="padd1 padd22">Plan and manage</h1>
                <p className="padd1 padd33">Brute laoreet efficiendi id his, ea illum nonumes luptatum <br/>
                 pro. Usu atqui laudem an, insolens gubergren similique <br/>
                  est cu. Et vel modus congue vituperata. Solum patrioque <br/>
                   no sea. Mea ex malis mollis oporteat. Eum an expetenda <br/>
                    consequat.</p>
                    <div className='btn2'>
                        <span className="btn4" style={{
                            border: '',
                             width: '130.08px',
                             height: '25px',
                             textAlign:'center',
                             padding: '13px'
                             }}>
                            <p className='btn5'>
                                View video ➤
                            </p>
                        </span>
                        <span className='btn7'>
                            <p style={{padding: '13px', color: '#ADB4D2'}}>
                                See features
                            </p>
                        </span>
                    </div>
            </div>
            <div className="weatherApp">
               <img src={seven3} alt=""/>
            </div>
        </div>
    )
}