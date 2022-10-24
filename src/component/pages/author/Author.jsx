import React from 'react'
import { AuthorData } from '../../data/Data'
import './author.css'
function Author() {
  return (
    <div className='author container S-flex'>
        {AuthorData.map((item,idx)=>(
          <div key={idx} className="authorCol">
            <img src={item.img} alt="" />
            <div className="authorText">
              <span>{item.job}</span>
              <h4>{item.name}</h4>
              <p>{item.desc}</p>
            </div>

          </div>
        ))}
    </div>
  )
}

export default Author