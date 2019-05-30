import React, { Component } from 'react'
import Logo from '../../Assets/logo.png'
import Img1 from '../../Assets/Girl-image-2-01@2x.png'
import Img2 from '../../Assets/Image 2@2x.png'
import Img3 from '../../Assets/Image 3@2x.png'
import Img4 from '../../Assets/output-onlinejpgtools@2x.png'
import './Landing.css'


export default class Landing extends Component {
    render() {
        return (
            <React.Fragment>
                <header className="landing-header">
                    <nav>
                        <div className="header-logo">
                            <img className='logo' src={Logo} alt="Logo"/>
                            <span className="logo-text yltxt">UP</span>
                            <span className="logo-text bltxt">FRONT</span>
                        </div>
                        <ul className="header-links"> 
                            <li>Partners</li>
                            <li>How it works</li>
                            <li>Login</li>
                            <li><button className="yltxt signup-btn">Sign up</button></li>
                        </ul>                    
                    </nav>
                </header>
                <section className="landing-section">
                    <div className='sec1'>
                        <div>
                            <div className='sec1-title'>
                                <span className="bltxt">What we </span>
                                <span className="yltxt">Do</span>
                                <span className="bltxt">?</span>
                            </div>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quod, repudiandae architecto eius at necessitatibus esse deleniti in a nesciunt rem.</p>
                            <button className="sec1-btn ylbg">Get started</button>
                             </div>
                        <div>
                            <img src={Img1} alt="img" className="picture"/>
                        </div>
                       
                    </div>
                    <div className='sec2'>
                        <div>
                            <img src={Img2} alt="img" className="picture"/>
                        </div>
                        <div>
                            <div className='sec2-title'>
                                <span className="bltxt">How it </span>
                                <span className="yltxt">Works</span>
                                <span className="bltxt">?</span>
                            </div>
                            <ul className='sec2-list'>
                                <li >Lorem ipsum dolor sit</li>
                                <li >Lorem ipsum dolor sit</li>
                                <li >Lorem ipsum dolor sit</li>
                            </ul>
                        </div>
                    </div>
                    <div className='sec3'>
                        <div>
                            <div className='sec3-title'>
                                <span className="bltxt">Our </span>
                                <span className="yltxt">Partners</span>
                                <span className="bltxt">?</span>
                            </div>
                            <img src={Img4} alt="img" className="picture1"/>
                        </div>
                        <div>
                            <img src={Img3} alt="img" className="picture"/>
                        </div>
                    </div>
                </section>
                <footer className="landing-footer">
                    <div className="yltxt">Lorem is simply</div>
                    <hr/>
                    <div className="footer-boxes">
                        <div className='box'>
                            <img src={Logo} alt="logo" className="logo"/>
                            <h4 className='ftitle'>Lorem Ipsum</h4>
                            <p className='fcontent'>lorem is simply dummy text</p>
                        </div>
                        <div className='box'>
                            <img src={Logo} alt="logo" className="logo"/>
                            <h4 className='ftitle'>Lorem Ipsum</h4>
                            <p className='fcontent'>lorem is simply dummy text</p>
                        </div>
                        <div className='box'>
                            <img src={Logo} alt="logo" className="logo"/>
                            <h4 className='ftitle'>Lorem Ipsum</h4>
                            <p className='fcontent'>lorem is simply dummy text</p>
                        </div>
                        <div className='box'>
                            <img src={Logo} alt="logo" className="logo"/>
                            <h4 className='ftitle'>Lorem Ipsum</h4>
                            <p className='fcontent'>lorem is simply dummy text</p>
                        </div>
                    </div >
                    <div className='footer1'>
                    <div className="footer-contact">
                    <i className="fas fa-phone-volume"> +91XXXXXXXXXX</i>
                    </div>
                    <div className="footer-social">
                        <span >Follow us on social media </span>
                        <i className="fab fa-facebook-square"></i>
                        <i className="fab fa-instagram"></i>
                        <i className="fab fa-linkedin"></i>
                    </div>
                    </div>
                </footer>
            </React.Fragment>
        )
    }
}

