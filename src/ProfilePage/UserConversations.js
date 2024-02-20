import React from 'react'
import CommonShadowBox from '../UICoponents/CommonShadowBox';
import userImage from '../Images/user-image.png'

export default function UserConversations() {
    return (
        <CommonShadowBox className="profile-convertation-wrapper">
            <ul className='profile-convertation-items'>
                <h4 className='title'>Conversations</h4>
                <li className='profile-convertation-item'>
                    <div className='user-profile'>
                        <div className='user-image'>
                            <img src={userImage} />
                        </div>
                        <div className='user-details'>
                            <p className='user-name'>Esthera Jackson</p>
                            <p className='user-chat'> Hi! I need more informations </p>
                        </div>
                    </div>
                    <a href="#" > REPLY </a>
                </li>
                <li className='profile-convertation-item'>
                    <div className='user-profile'>
                        <div className='user-image'>
                            <img src={userImage} />
                        </div>
                        <div className='user-details'>
                            <p className='user-name'>Esthera Jackson</p>
                            <p className='user-chat'> Hi! I need more informations </p>
                        </div>
                    </div>
                    <a href="#" > REPLY </a>
                </li>
                <li className='profile-convertation-item'>
                    <div className='user-profile'>
                        <div className='user-image'>
                            <img src={userImage} />
                        </div>
                        <div className='user-details'>
                            <p className='user-name'>Esthera Jackson</p>
                            <p className='user-chat'> Hi! I need more informations </p>
                        </div>
                    </div>
                    <a href="#" > REPLY </a>
                </li>
                <li className='profile-convertation-item'>
                    <div className='user-profile'>
                        <div className='user-image'>
                            <img src={userImage} />
                        </div>
                        <div className='user-details'>
                            <p className='user-name'>Esthera Jackson</p>
                            <p className='user-chat'> Hi! I need more informations </p>
                        </div>
                    </div>
                    <a href="#" > REPLY </a>
                </li>
                <li className='profile-convertation-item'>
                    <div className='user-profile'>
                        <div className='user-image'>
                            <img src={userImage} />
                        </div>
                        <div className='user-details'>
                            <p className='user-name'>Esthera Jackson</p>
                            <p className='user-chat'> Hi! I need more informations </p>
                        </div>
                    </div>
                    <a href="#" > REPLY </a>
                </li>
            </ul>
        </CommonShadowBox>
    )
}
