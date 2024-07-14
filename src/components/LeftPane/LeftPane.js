import React from 'react'
import './leftPane.css';
import MarkUnreadChatAltIcon from '@mui/icons-material/MarkUnreadChatAlt';
import PeopleIcon from '@mui/icons-material/People';
import RssFeedIcon from '@mui/icons-material/RssFeed';
import FlagIcon from '@mui/icons-material/Flag';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import BuildIcon from '@mui/icons-material/Build';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

export default function LeftPane() {
  return (
    <div className="leftPaneBox">
      <div className="leftPaneContainer">
        <div className="leftPaneMenu">
            <li className="leftPaneMenuItem">
              <MarkUnreadChatAltIcon className='leftPaneMenuIcon'/>
              <span className="leftPaneText">Messages</span>
            </li>
            <li className="leftPaneMenuItem">
              <PeopleIcon className='leftPaneMenuIcon'/>
              <span className="leftPaneText">Groups</span>
            </li>
            <li className="leftPaneMenuItem">
              <RssFeedIcon className='leftPaneMenuIcon'/>
              <span className="leftPaneText">Feed</span>
            </li>
            <li className="leftPaneMenuItem">
              <FlagIcon className='leftPaneMenuIcon'/>
              <span className="leftPaneText">Pages</span>
            </li>
            <li className="leftPaneMenuItem">
              <CalendarMonthIcon className='leftPaneMenuIcon'/>
              <span className="leftPaneText">Events</span>
            </li>
            <li className="leftPaneMenuItem">
              <BuildIcon className='leftPaneMenuIcon'/>
              <span className="leftPaneText">Settings</span>
            </li>
            <li className="leftPaneMenuItem">
              <SportsEsportsIcon className='leftPaneMenuIcon'/>
              <span className="leftPaneText">Games</span>
            </li>
            <li className="leftPaneMenuItem">
              <NewspaperIcon className='leftPaneMenuIcon'/>
              <span className="leftPaneText">News</span>
            </li>
            <li className="leftPaneMenuItem">
              <WorkOutlineIcon className='leftPaneMenuIcon'/>
              <span className="leftPaneText">Jobs</span>
            </li>
            <li className="leftPaneMenuItem">
              <AddShoppingCartIcon className='leftPaneMenuIcon'/>
              <span className="leftPaneText">Market</span>
            </li>

            <hr/>

            <div className="pagesYouLiked">
              <h3>Pages You Liked</h3>
            </div>

            <div className="pageList">
              <li className="pageListItem">
                <img src="/images/1.jpg" alt="" className="pagePic" />
                <span className="PageName">CA Creation</span>
              </li>
              <li className="pageListItem">
                <img src="/images/1.jpg" alt="" className="pagePic" />
                <span className="PageName">CA Creation</span>
              </li>
              <li className="pageListItem">
                <img src="/images/1.jpg" alt="" className="pagePic" />
                <span className="PageName">CA Creation</span>
              </li>
              <li className="pageListItem">
                <img src="/images/1.jpg" alt="" className="pagePic" />
                <span className="PageName">CA Creation</span>
              </li>
              <li className="pageListItem">
                <img src="/images/1.jpg" alt="" className="pagePic" />
                <span className="PageName">CA Creation</span>
              </li>
              <li className="pageListItem">
                <img src="/images/1.jpg" alt="" className="pagePic" />
                <span className="PageName">CA Creation</span>
              </li>
              <li className="pageListItem">
                <img src="/images/1.jpg" alt="" className="pagePic" />
                <span className="PageName">CA Creation</span>
              </li>
              <li className="pageListItem">
                <img src="/images/1.jpg" alt="" className="pagePic" />
                <span className="PageName">CA Creation</span>
              </li>
              <li className="pageListItem">
                <img src="/images/1.jpg" alt="" className="pagePic" />
                <span className="PageName">CA Creation</span>
              </li>

            </div>
        </div>
      </div>
    </div>

  )
}
