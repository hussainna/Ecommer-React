import React from 'react'
import { Company, ContactLink, popular, ProductLinksData, ServicesLink } from '../../data/Data'
import img from './payment.png'
import './footer.css'
function Footer() {
  return (
    <div className='footer'>
        <div className="container">
            <div className="grid-5">
                <div className="footerBox">
                    <h4>POPULAR CATEGORIES</h4>
                    <ul>
                        {popular.map((item,idx)=>(
                            <li key={idx}>
                                <a href="#">
                                   {item.link}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="footerBox">
                    <h4>PRODUCTS</h4>
                    <ul>
                        {ProductLinksData.map((item,idx)=>(
                            <li key={idx}>
                            <a href="#">
                               {item.link}
                            </a>
                        </li>
                        ))}
                    </ul>
                </div>
                <div className="footerBox">
                    <h4>OUR COMPANY</h4>
                    <ul>
                        {Company.map((item,idx)=>(
                            <li key={idx}>
                            <a href="#">
                               {item.link}
                            </a>
                        </li>
                        ))}
                    </ul>
                </div>
                <div className="footerBox">
                    <h4>SERVICES</h4>
                    <ul>
                        {ServicesLink.map((item,idx)=>(
                            <li key={idx}>
                            <a href="#">
                               {item.link}
                            </a>
                        </li>
                        ))}
                    </ul>
                </div>
                <div className="footerBox">
                    <h4>CONTACT</h4>
                    <ul>
                        {ContactLink.map((item,idx)=>(
                            <li key={idx} className='flex'>
                                {item.icon}
                            <a href="#">
                               {item.link}
                            </a>
                            
                        </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
        <div className="line"></div>
        <div className="bottomText">
            <img src={img} alt="" />
            <p>Copyright © Anon All Rights Reserved.</p>
        </div>
    </div>
  )
}

export default Footer