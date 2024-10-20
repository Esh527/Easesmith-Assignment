import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faSquareThreads } from '@fortawesome/free-brands-svg-icons';
import { faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import './footer.css'

const Footer = () => {
  return (
    <div >
        <div className='footer-inner-container-one'>
      <div>
        <h4>SUBSCRIBE TO OUR NEWSLETTER</h4>
        <p>Lorem ipsum dolor sit amet. Aut ipsam illum et nostrum quidem aut necesbus enim</p>
        <input placeholder='Enter Your Email Address '/><br></br>
        <button>SUBSCRIBE</button>
      </div>
      <div>
        <h4>About us</h4>
        <ul>
            <li>Our Story</li>
            <li>Blogs</li>
            <li>Careers</li>
            <li>Contact Us</li>
            <li>Help & Support</li>
        </ul>
      </div>
      <div>
        <h4>Our Services</h4>
        <ul>
            <li>Book Maali</li>
            <li>Plant Day Care</li>
            <li>Rent Plants</li>
            <li>Plants & Pots</li>
            <li>Gardening Tools</li>
        </ul>

      </div>
      <div>
        <h4>Useful Links</h4>
        <ul>
            <li>My Account</li>
            <li>Orders & Returns</li>
            <li>Track Order</li>
            <li>Terms & Conditions</li>
            <li>Privacy Policy</li>
            <li>Return, Refund & Replacement Policy</li>
        </ul>
      </div>

      <div>
        <h4>GET IN TOUCH</h4>
        <address>Address: F-262, First Floor, Sushant Lok Phase-III, Sector-57, Gurgaon, Haryana, India 122003</address>
        <p>Call:
+919958287272</p>
<p>Email: care@chaperoneplants.com</p>
      </div>
      </div>
      <div className='footer-inner-container-two'>
    <h1>CHAPERONE</h1>
    <p>Lorem ipsum dolor sit amet. Aut ipsam illum et nostrum quidem aut necessitatibus enim ut internos accusantium a numquam autem ab rerum omnis. Non molestiae ratione et laborum doloribus aut molestiae voluptates ut porro excepturi sit molestiae obcaecati qui quis beatae est voluptatem eius. Et architecto nihil id labore omnis hic iste deleniti et porro aspernatur.</p>
    <div>
        <h1>Follow us on</h1>
        <FontAwesomeIcon icon={faInstagram} size="2x" style={{margin:"4px", padding:"5px"}} />
        <FontAwesomeIcon icon={faFacebook} size="2x" style={{margin:"4px", padding:"5px"}}/>
        <FontAwesomeIcon icon={faSquareThreads} size="2x" style={{margin:"4px", padding:"5px"}} />
        <FontAwesomeIcon icon={faYoutube} size="2x" style={{margin:"4px", padding:"5px"}}/>
        <FontAwesomeIcon icon={faLinkedin} size="2x" style={{margin:"4px", padding:"5px"}}/>
    </div>
    <hr className='horizontal'/>
    <p>© 2023, chaperone.com All rights reserved.</p>
    </div>

    </div>
    
  )
}

export default Footer
