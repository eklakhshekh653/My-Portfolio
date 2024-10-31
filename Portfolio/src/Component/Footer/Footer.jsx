import React from 'react'
import '../Footer/Footer.css'

const Footer = () => {
    let handlefacbook = ()=>{
        let link = document.createElement('a');
        link.href='https://www.facebook.com/shekh.eklakh.7';
        link.target='blank';
        link.click()
    }
    let handleinsta = ()=>{
        let link = document.createElement('a');
        link.href='https://www.instagram.com/akhlaque_bth/';
        link.target='blank';
        link.click()
    }
    let handlelinkedin = ()=>{
        let link = document.createElement('a');
        link.href='https://www.linkedin.com/in/shekh-eklakh-520105198/';
        link.target='blank';
        link.click()
    }
    let handlex = ()=>{
        let link = document.createElement('a');
        link.href='https://x.com/ShekhEklakh';
        link.target='blank';
        link.click()
    }
  return (
    <div className="footer-container">
        <div className="footer">
        <div className="icon">
        <i className="fa-brands fa-linkedin linkedin" onClick={handlelinkedin}></i>
        <i className="fa-brands fa-facebook facebook" onClick={handlefacbook}></i>
        <i className="fa-brands fa-x-twitter x" onClick={handlex}></i>
        <i className="fa-brands fa-instagram insta" onClick={handleinsta}></i>
        <a href="https://mail.google.com/mail/?view=cm&fs=1&to=shekheklakh198@gmail.com&su=Your%20Subject&body=Hello%20there!" target="_blank"><button>Send Email</button></a>
        </div>

    </div>

        <div className="reserve">
        <small>All Right Reserve Developed & Maintained By <b>Shekh Eklakh</b></small>
        </div>
    </div>
  )
}

export default Footer