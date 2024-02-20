import React, { useRef, useState } from 'react'
import CommonShadowBox from '../UICoponents/CommonShadowBox'
import Form from 'react-bootstrap/Form';

export default function ProfileSettings() {

    const [checkValue , setCheckValue] = useState();
    let checkRef = useRef(false);


    return (
        <CommonShadowBox className="profile-settings-wrapper">
            <div className='profile-settings'>
                <h4 className='title'>Platform Settings</h4>

                <Form className='account-settings'>
                    <span className=''> ACCOUNT </span>
                    <Form.Check type="switch" ref={checkRef} id="custom-switch-1" label="Email me when someone follows me" defaultChecked />
                    <Form.Check type="switch" id="custom-switch-2" label="Email me when someone answers on my post" />
                    <Form.Check type="switch" id="custom-switch-3" label="Email me when someone mentions me" defaultChecked />
                </Form>

                <Form className='application-settings'>
                    <span className=''> APPLICATION </span>
                    <Form.Check type="switch" id="custom-switch-4" label="New launches and projects" />
                    <Form.Check type="switch" id="custom-switch-5" label="Monthly product updates" />
                    <Form.Check type="switch" id="custom-switc-6" label="Subscribe to newsletter" defaultChecked />
                </Form>
            </div>
        </CommonShadowBox>
    )
}
