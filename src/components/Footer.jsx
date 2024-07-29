
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';
import './Footer.css';

export default function App() {
  return (
    
    <footer>
		<ul className="footer-options">
      <li className="footer-link"><a href="#" className="footer-linktext">Legal</a></li>
      <li className="footer-link"><a href="#" className="footer-linktext">Contact Us</a></li>
    </ul>
<span>© 2019 Developed by Pat. All Rights Reserved.</span>
	    </footer>
  );
}