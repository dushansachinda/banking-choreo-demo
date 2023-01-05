import React from 'react'
import '../../css/LandingPage.css'
import {SliderView} from "./Slider/SliderView";
import {MainAccDetailView} from "./MainAccDetail/MainAccDetailView";
import {AccountListView} from "./AccountList/AccountListView";
import {TransactionListView} from "./TransactionList/TransactionListView"
import {ExpenseView} from "./ExpenseView/ExpenseView"
import { Navbar } from '../common/Navbar';
import { Footer } from '../common/Footer';

export const LandingPage = () => {

  return(
    <>
      <Navbar selectedTabName="Overview" />
      <div className="container-md home-container">
        <div style={{height:'20%'}}>
          <div className="float-child mb-3" style={{width: "49%"}}>
            <SliderView />
          </div>
          <div className="float-child ps-3 mb-3" style={{width: "49%"}}>
            <MainAccDetailView />
          </div>
        </div>

        <div className="mb-3" style={{height:'20%'}}>
          <AccountListView />
        </div>
        
        <div style={{height:'60%'}}>
          <div className='float-child' style={{width:'50%'}}>
            <TransactionListView />
          </div>
          <div className='float-child' style={{width:'49%'}}>
            <ExpenseView/>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}