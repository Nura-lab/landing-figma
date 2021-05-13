import React from 'react'
import './Seven.css'
import blog from '../../image/blog.png'

export const Seven = () => {
    return (
        <div className="blog">
            <div className='blogA' >
                <h4 className='titleCC'>OUR RESOURCES</h4>
                <h2 className='titleCA'>Start reading our blog</h2>
            </div>
            <div >
                <img className="blogB" src={blog} alt=""/>
            </div>
        </div>
    )
}