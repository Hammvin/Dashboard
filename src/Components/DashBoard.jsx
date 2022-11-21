import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './Dashboard.css';
import {AiOutlineFileDone, AiOutlineBell} from 'react-icons/ai';
import {FaRegUser} from 'react-icons/fa';
import {HiOutlineUserGroup, HiOutlineCurrencyDollar} from 'react-icons/hi'
import {GrPieChart} from 'react-icons/gr';
import {AiFillSignal} from 'react-icons/ai';
import {BsCircleFill, BsFillCircleFill} from 'react-icons/bs';
import Chart1 from '../Images/Chart1.jpeg';
import Chart2 from '../Images/Chart2.jpeg';

const DashBoard = () => {
  return (
    <div className="container-fluid">
      <div className="">
        <div className="row">
          <div className="top-bar">
            <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4"></div>
            <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4">
              <ul className="bar-list">
                <li className='today'>Today</li>
                <li>Week</li>
                <li>Month</li>
                <li>Quarter</li>
                <li>Year</li>
              </ul>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-2 col-lg-2 tracking">
              <div >
                <input type="date" className="calendar" />
              </div>
              <div className="bell"><AiOutlineBell size="1.5em"/></div>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-2 col-lg-2">
              <div className="account">
                <p>Your Name</p>
                <div className="circle">
                  <BsFillCircleFill size="2em"/>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-1 col-lg-1" ></div>
          <div className="col-xs-12 col-sm-12 col-md-3 col-lg-3">
            <div className="value-text">
              <div className="file"><AiOutlineFileDone  size="2em"/></div>
              <div className="flex-container">
                 <p className="key-text">Snapshot Value 1</p>
                <p>-420 from last month</p>
              </div>
              <div className="value">
              <p className="value-figure">33,672</p>
              </div>
            </div>

            <div className="revenue-text">
              <div>
                <HiOutlineCurrencyDollar size="2em"/>
              </div>
                <div className="flex-container">
                  <p className="key-text">Expected Revenue</p>
                  <p>+ $4,220 from last month</p>
                </div>
                <div className="value">
                  <p className="value-figure">$23,516</p>
                </div>
            </div>
          </div>

          <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4">
            <div className='containers'>
              <div className="container">
                <div className="report">
                  <p className="figures">1,387</p>
                  <p className="text">Total One</p>
                </div>
                <div className="icon-wrap">
                 <GrPieChart className="icon" size="3em"/>
                </div>
              </div>

              <div className="container">
                <div className="report"> 
                  <p className="figures">75%</p>
                  <p className="text">Percent 2</p>
                </div>
                <div className="icon-wrap">
                 <AiFillSignal className="icon" size="3em"/>
                </div>
              </div>
            </div>

            <div className="containers">
              <div className="container">
                <div className="report">
                  <p className="figures">5,849</p>
                  <p className="text">Total Users</p>
                </div>
                <div className="icon-wrap">
                 <FaRegUser className="icon" size="3em"/>
                </div>
              </div>

              <div className="container">
                <div className="report">
                  <p className="figures">634</p>
                  <p className="text">Total Groups</p>
                </div>
                <div className="icon-wrap">
                 <HiOutlineUserGroup className="icon" size="3em"/>
                </div>
              </div>
            </div>
          </div>

          <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4 graph">
            <div className="main-chart">
              <div className="rating">
              <p className="rating-text">Ratings & Feedback</p>
              </div>
              <div className="">
                <div>
                  <ul className="lists">
                    <li className="excellent"><BsCircleFill color='#41EF78'/>Excellent</li>
                    <li className="good"><BsCircleFill color='#0E1378'/>Good</li>
                    <li className="fair"><BsCircleFill color='#E7F41C'/>Fair</li>
                    <li className="poor"><BsCircleFill color='#F4291C '/>Poor</li>
                  </ul>
                </div>
                <div className="image">
                  <img src={Chart2} className="chart chart-image1" alt="Pie" />
                </div>
              </div>
            </div>

            <div className="main-chart main-chart2">
              <p className="team-text">Team A vs Team B</p>
              <div className="chart-box">
                <ul className="list2">
                  <li className='teamA'><BsCircleFill color='#57F3E5'/> Team A</li>
                  <li className="teamB"><BsCircleFill color="#1735DE"/>Team B</li>
                </ul>
                <div className="image">
                  <img src={Chart1} className="chart chart-image2" alt="Pie" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DashBoard