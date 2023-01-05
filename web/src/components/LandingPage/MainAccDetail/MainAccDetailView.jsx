import React, {useState} from 'react';
import '../../../css/LandingPage.css'
import {Button, Offcanvas} from "react-bootstrap";
import background from "../../../images/bg_funding_account.jpg";

export const MainAccDetailView = () => {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return(
    <div className = "container-md main-acc-container" style={{"backgroundImage": `url(${background})`}}>
      
      <div className="row m-2 font-color-dark">
        <div className="col-10"><h5>Main Funding Account</h5></div>
      </div>

      <div className="row p-2 m-2">
        
        <div className="col-3">
          <div className="row p-2 font-size-medium font-color-orange">Savings Account</div>
          <div className="row p-2 font-size-small font-color-grey">4567 **** **** 1234</div>
        </div>

        <div className="col-3">
          <div className="row p-2 font-size-medium font-color-orange">Available Funds</div>
          <div className="row p-2 font-size-small font-color-dark">$123,456.78</div>
        </div>

        <div className="col-6"></div>

      </div>
      
      <div className="row m-2">
        <Button onClick={handleShow} className="bg-secondary transfer-button">Transfer Money</Button>

        <Offcanvas show={show} onHide={handleClose} placement='end' className="home-container">
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>Fund Transfer</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <MoneyTransferForm />
          </Offcanvas.Body>
        </Offcanvas>
      </div>
    </div>
  )
}

export const MoneyTransferForm = () => {
  return (
    <div>
      <form className="money-transfer-form">
        <div className="money-transfer-form-fields font-size-small">
          <div className="row">
            <label className="font-color-orange"> Bank Name:</label>
          </div>
          <div className="row">
            <input type="text" name="name" className="money-transfer-form-inputs" />
          </div>
        </div>
        <div className="money-transfer-form-fields font-size-small">
          <div className="row">
            <label className="font-color-orange"> Account Name:</label>
          </div>
          <div className="row">
            <input type="text" name="name"  className="money-transfer-form-inputs" />
          </div>
        </div>
        <div className="money-transfer-form-fields font-size-small">
          <div className="row">
            <label className="font-color-orange"> Account Number:</label>
          </div>
          <div className="row">
            <input type="text" name="name"  className="money-transfer-form-inputs" />
          </div>
        </div>
        <div className="money-transfer-form-fields font-size-small">
          <div className="row">
            <label className="font-color-orange"> Amount:</label>
          </div>
          <div className="row">
            <input type="text" name="name"  className="money-transfer-form-inputs" />
          </div>
        </div>
        <div className="money-transfer-form-fields font-size-small">
          <div className="row">
            <label className="font-color-orange">Reference:</label>
          </div>
          <div className="row">
            <input type="text" name="name"  className="money-transfer-form-inputs" />
          </div>
        </div>
        <div>
          <input type="submit" className="btn-grey submit-btn" value="Submit" />
        </div>
      </form>
    </div>
  )
}


