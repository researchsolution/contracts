import React, { useEffect, useState } from "react";
import {
  Container,
  Row,
  Col,
  Navbar,
  Nav,
  Button,
  NavDropdown,
  Table,
} from "react-bootstrap";
import logo from "./Fino_Finance_logo.png";
import homeIcon from "./img/home.png";
import stakeIcon from "./img/stake.png";
import saleIcon from "./img/sale.png";
import todoIcon from "./img/todo.png";
import socialIcon from "./img/social.png";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import { useMoralis, useChain } from "react-moralis";
import Dashboard from "./components/dashboard";
import Presale from "./components/presale";

function App() {
  
  const { enableWeb3, authenticate, isAuthenticated, user, logout } = useMoralis();
  const { switchNetwork, chainId, chain, account } = useChain();
  const [show, setShow] = useState(false);
  useEffect(()=>{
    enableWeb3();
  },[])
  return (
    <>
    <div className="mainWrap">
      <div className="header">
        <Container fluid>
          <Row>
            <Col lg="12">
              <Navbar bg="dark" expand="lg" fixed="top">
                <Container fluid>
                  <Navbar.Brand href="/">
                    <img src={'https://www.finodao.com/assets/images/logo/logo.png'} style={{"width": "100px", height: "30px"}} alt="" />
                    {/* <h2 className="comname">Company name</h2> */}
                  </Navbar.Brand>
                  <Navbar.Toggle aria-controls="basic-navbar-nav" />
                  <Navbar.Collapse id="basic-navbar-nav" className="navBarTop">
                    <Nav className="me-auto">

                      <Nav.Link className="wallet" onClick={() => user?logout():setShow(true)}>{user?'0x…' + account?.slice(account?.length-4,account?.length):'Connect wallet'}</Nav.Link>
                    </Nav>
                  </Navbar.Collapse>
                </Container>
              </Navbar>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="body-content">
        <Container fluid>
          <Row>
            <Col lg="2">
              <div className="left-nav">
                <ul>
                  <li>
                    <a className={window.location.pathname=='/'?"active":""} href="/">  <img src={homeIcon} style={{"width": "16px", height: "16px"}} alt="" />Home</a>
                  </li>
                  {/* <li>
                    <a href="javascript:;"><img src={stakeIcon} style={{"width": "16px", height: "16px"}} alt="" />Stake</a>
                  </li> */}
                  <li>
                    <a className={window.location.pathname=='/presale'?"active":""} href="/presale"><img src={saleIcon} style={{"width": "16px", height: "16px"}} alt="" />Claim</a>
                  </li>
                  {/* <li>
                    <a href="javascript:;"><img src={todoIcon} style={{"width": "16px", height: "16px"}} alt="" />Todo</a>
                  </li>
                  <li>
                    <a href="javascript:;"><img src={socialIcon} style={{"width": "16px", height: "16px"}} alt="" />Social</a>
                  </li> */}
                  <li>
                    <a href="https://www.twitter.com/Fino_DAO"><img src={todoIcon} style={{"width": "16px", height: "16px"}} alt="" />Twitter</a>
                  </li>
                  <li>
                    <a href="https://t.me/finofinance"><img src={socialIcon} style={{"width": "16px", height: "16px"}} alt="" />Telegram</a>
                  </li>
                </ul>
              </div>
            </Col>
            <Router>
              <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/presale" element={<Presale />} />
              </Routes>
            </Router>
          </Row>
        </Container>
      </div>
    </div>
      {show && (<div className="modal-content"><div _ngcontent-ftt-c38="" className="modal-header"><h4 _ngcontent-ftt-c38="" className="modal-title">Connect Wallet</h4><button _ngcontent-ftt-c38="" type="button" aria-label="Close" className="close" onClick={()=> setShow(false)}><span _ngcontent-ftt-c38="" aria-hidden="true">×</span></button></div><div _ngcontent-ftt-c38="" className="modal-body"><div _ngcontent-ftt-c38="" className="wallet-btn" onClick={async()=>{await authenticate();switchNetwork('0x38');setShow(false);}}><div _ngcontent-ftt-c38="" className="metamask"><img _ngcontent-ftt-c38="" alt="" src="https://portify-assets.s3.ap-south-1.amazonaws.com/icons/metamask.webp" /> &nbsp; Metamask </div><i _ngcontent-ftt-c38="" className="ng-i angle-right"><svg role="img" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="angle-right" className="svg-inline--fa fa-angle-right fa-w-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512"><path fill="currentColor" d="M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34z"></path></svg></i></div><div _ngcontent-ftt-c38="" className="wallet-btn" onClick={()=>{authenticate({provider: 'walletconnect'});setShow(false)}}><div _ngcontent-ftt-c38="" className="walletconnect"><svg viewBox="0 0 40 40" width="40px" color="text" xmlns="http://www.w3.org/2000/svg" className="sc-bdvvtL AYuRC"><path d="M8.68096 12.4756C14.9323 6.39698 25.0677 6.39698 31.3191 12.4756L32.0714 13.2071C32.384 13.511 32.384 14.0038 32.0714 14.3077L29.4978 16.8103C29.3415 16.9622 29.0881 16.9622 28.9318 16.8103L27.8965 15.8036C23.5354 11.563 16.4647 11.563 12.1036 15.8036L10.9948 16.8817C10.8385 17.0336 10.5851 17.0336 10.4288 16.8817L7.85517 14.3791C7.54261 14.0752 7.54261 13.5824 7.85517 13.2785L8.68096 12.4756ZM36.6417 17.6511L38.9322 19.8783C39.2448 20.1823 39.2448 20.675 38.9322 20.979L28.6039 31.022C28.2913 31.3259 27.7846 31.3259 27.472 31.022C27.472 31.022 27.472 31.022 27.472 31.022L20.1416 23.8942C20.0634 23.8182 19.9367 23.8182 19.8586 23.8942C19.8586 23.8942 19.8586 23.8942 19.8586 23.8942L12.5283 31.022C12.2157 31.3259 11.709 31.3259 11.3964 31.022C11.3964 31.022 11.3964 31.022 11.3964 31.022L1.06775 20.9788C0.755186 20.6749 0.755186 20.1821 1.06775 19.8782L3.35833 17.6509C3.6709 17.347 4.17767 17.347 4.49024 17.6509L11.8208 24.7789C11.8989 24.8549 12.0256 24.8549 12.1038 24.7789C12.1038 24.7789 12.1038 24.7789 12.1038 24.7789L19.4339 17.6509C19.7465 17.347 20.2533 17.347 20.5658 17.6509C20.5658 17.6509 20.5658 17.6509 20.5658 17.6509L27.8964 24.7789C27.9745 24.8549 28.1012 24.8549 28.1794 24.7789L35.5098 17.6511C35.8223 17.3471 36.3291 17.3471 36.6417 17.6511Z" fill="#3389FB"></path></svg> &nbsp; WalletConnect </div><i _ngcontent-ftt-c38="" className="ng-i angle-right"><svg role="img" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="angle-right" className="svg-inline--fa fa-angle-right fa-w-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512"><path fill="currentColor" d="M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34z"></path></svg></i></div>{/* <div _ngcontent-ftt-c38="" className="wallet-btn"><div _ngcontent-ftt-c38="" className="walletconnect"><img _ngcontent-ftt-c38="" src="https://dashboard.portify.app/assets/trust.png" alt="" style={{ width: "30px", height: "30px" }} /> &nbsp; Trust Wallet </div><i _ngcontent-ftt-c38="" className="ng-i angle-right"><svg role="img" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="angle-right" className="svg-inline--fa fa-angle-right fa-w-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512"><path fill="currentColor" d="M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34z"></path></svg></i></div><div _ngcontent-ftt-c38="" className="wallet-btn"><div _ngcontent-ftt-c38="" className="walletconnect"><img _ngcontent-ftt-c38="" alt="" style={{ width: "30px", height: "30px" }} src="https://portify-assets.s3.ap-south-1.amazonaws.com/icons/tokenpocket.webp" /> &nbsp; Token Pocket </div><i _ngcontent-ftt-c38="" className="ng-i angle-right"><svg role="img" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="angle-right" className="svg-inline--fa fa-angle-right fa-w-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512"><path fill="currentColor" d="M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34z"></path></svg></i></div><div _ngcontent-ftt-c38="" className="wallet-btn"><div _ngcontent-ftt-c38="" className="walletconnect"><img _ngcontent-ftt-c38="" alt="" style={{ width: "30px", height: "30px" }} src="https://portify-assets.s3.ap-south-1.amazonaws.com/icons/bitkeep.webp" /> &nbsp; Bitkeep </div><i _ngcontent-ftt-c38="" className="ng-i angle-right"><svg role="img" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="angle-right" className="svg-inline--fa fa-angle-right fa-w-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512"><path fill="currentColor" d="M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34z"></path></svg></i></div> */}</div></div>)}
    </>
  );
}

export default App;
