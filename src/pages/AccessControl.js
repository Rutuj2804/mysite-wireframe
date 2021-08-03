import { IconButton } from '@material-ui/core'
import {  AddCircleOutline, ArrowBackOutlined, Edit, RemoveCircleOutlineOutlined } from '@material-ui/icons'
import React, { useState } from 'react'
import HomeUpperBar from '../components/HomeUpperBar'
import { useHistory } from 'react-router-dom'
import './AccessControl.css'

const AccessControl = () => {

    const [ expandable, setExpandable ] = useState('');

    const history = useHistory();

    const handleChange = value => {
        if(expandable===value){
            setExpandable('');
        } else {
            setExpandable(value);
        }
    }

    return (
        <div className="accessControl__Wrapper">
            <HomeUpperBar/>
            <div className="accessControl__Options">
                <div className="d-flex align-items-center" onClick={()=>history.push('/')}><ArrowBackOutlined style={{fill: "rgba(0, 0, 0, 0.54)"}} /><p className="m-0 accessControl__Management">Management Team</p></div>
                <IconButton><Edit/></IconButton>
            </div>
            <div className="accessControl__SecondaryOptions">
                <div className="accessControl__LeftSideOptions" >
                    <div className="accessControl__Selected"><p>Access Control</p></div>
                    <div className="accessControl__NotSelected"><p>Assigned Members</p></div>
                </div>
            </div>
            <div className="accessControl__Table">
                <table  className="table">
                    <thead class="table-light">
                        <tr>
                            <th>Department/Role Name</th>
                            <th className="text-center" >Access Level</th>
                            <th className="text-center" >Summary</th>
                            <th className="text-center" >Last updated</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td> 
                                <div style={{ cursor: "pointer"}} onClick={()=>handleChange('budget')} >{expandable === 'budget'?<RemoveCircleOutlineOutlined />:<AddCircleOutline/>} Budget</div>
                                { expandable === 'budget' && <div className="accessControl__Popup">
                                    <p>All aspects in the bidding module</p>
                                    <div className="d-flex align-items-center">
                                        <div className="accessControl__PopupElement p-2 mx-2">
                                            <p>Access Control</p>
                                            <div className="accessControl__Element my-2">
                                                <input type="radio" aria-label="Radio button for following text input"/>
                                                <div>
                                                    <h6>All Access</h6>
                                                    <p>All Access Can access all items</p>
                                                </div>
                                            </div>
                                            <div className="accessControl__Element my-1">
                                                <input type="radio" aria-label="Radio button for following text input"/>
                                                <div>
                                                    <h6>Restrict Access</h6>
                                                    <p>Restricted Access Can access only assigned or created items</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="accessControl__PopupElementRight p-2">
                                            <p>Permissions</p>
                                            <div class="form-check">
                                                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                                                <label class="form-check-label" for="flexCheckDefault">
                                                View items in access
                                                </label>
                                            </div>
                                            <div class="form-check">
                                                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                                                <label class="form-check-label" for="flexCheckDefault">
                                                Edit items in access
                                                </label>
                                            </div>
                                            <div class="form-check">
                                                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                                                <label class="form-check-label" for="flexCheckDefault">
                                                Create items in access
                                                </label>
                                            </div>
                                            <div class="form-check">
                                                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                                                <label class="form-check-label" for="flexCheckDefault">
                                                Delete items in access
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                </div>}
                            </td>
                            <td className="text-center" ><button>All Access</button></td>
                            <td className="text-center" >
                                <div className="summary_Specifications">
                                    <p>View | Create | Edit | Delete </p>
                                </div>
                            </td>
                            <td className="text-center" >1 min ago</td>
                            <td className="text-center" >
                                <div class="form-check form-switch">
                                    <input class="form-check-input" type="checkbox" id="flexSwitchCheckDefault" checked />
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td> 
                            <div style={{ cursor: "pointer"}} onClick={()=>handleChange('bidding')} >{expandable === 'bidding'?<RemoveCircleOutlineOutlined />:<AddCircleOutline/>} Bidding</div>
                            { expandable==='bidding' && <div className="accessControl__Popup">
                                    <p>All aspects in the bidding module</p>
                                    <div className="d-flex align-items-center">
                                        <div className="accessControl__PopupElement p-2 mx-2">
                                            <p>Access Control</p>
                                            <div className="accessControl__Element my-2">
                                                <input type="radio" aria-label="Radio button for following text input"/>
                                                <div>
                                                    <h6>All Access</h6>
                                                    <p>All Access Can access all items</p>
                                                </div>
                                            </div>
                                            <div className="accessControl__Element my-1">
                                                <input type="radio" aria-label="Radio button for following text input"/>
                                                <div>
                                                    <h6>Restrict Access</h6>
                                                    <p>Restricted Access Can access only assigned or created items</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="accessControl__PopupElementRight p-2">
                                            <p>Permissions</p>
                                            <div class="form-check">
                                                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                                                <label class="form-check-label" for="flexCheckDefault">
                                                View items in access
                                                </label>
                                            </div>
                                            <div class="form-check">
                                                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                                                <label class="form-check-label" for="flexCheckDefault">
                                                Edit items in access
                                                </label>
                                            </div>
                                            <div class="form-check">
                                                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                                                <label class="form-check-label" for="flexCheckDefault">
                                                Create items in access
                                                </label>
                                            </div>
                                            <div class="form-check">
                                                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                                                <label class="form-check-label" for="flexCheckDefault">
                                                Delete items in access
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                </div>}
                            </td>
                            <td className="text-center" ><button className="no_access">No Access</button></td>
                            <td className="text-center" >
                                <div className="summary_Specifications">
                                    -
                                </div>
                            </td>
                            <td className="text-center" >1 min ago</td>
                            <td className="text-center" >
                                <div class="form-check form-switch">
                                    <input class="form-check-input" type="checkbox" id="flexSwitchCheckDefault"/>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td> 
                            <div style={{ cursor: "pointer"}} onClick={()=>handleChange('vendor')} >{expandable === 'vendor'?<RemoveCircleOutlineOutlined />:<AddCircleOutline/>} Vendor Portal</div>
                            { expandable === 'vendor' && <div className="accessControl__Popup">
                                    <p>All aspects in the bidding module</p>
                                    <div className="d-flex align-items-center">
                                        <div className="accessControl__PopupElement p-2 mx-2">
                                            <p>Access Control</p>
                                            <div className="accessControl__Element my-2">
                                                <input type="radio" aria-label="Radio button for following text input"/>
                                                <div>
                                                    <h6>All Access</h6>
                                                    <p>All Access Can access all items</p>
                                                </div>
                                            </div>
                                            <div className="accessControl__Element my-1">
                                                <input type="radio" aria-label="Radio button for following text input"/>
                                                <div>
                                                    <h6>Restrict Access</h6>
                                                    <p>Restricted Access Can access only assigned or created items</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="accessControl__PopupElementRight p-2">
                                            <p>Permissions</p>
                                            <div class="form-check">
                                                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                                                <label class="form-check-label" for="flexCheckDefault">
                                                View items in access
                                                </label>
                                            </div>
                                            <div class="form-check">
                                                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                                                <label class="form-check-label" for="flexCheckDefault">
                                                Edit items in access
                                                </label>
                                            </div>
                                            <div class="form-check">
                                                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                                                <label class="form-check-label" for="flexCheckDefault">
                                                Create items in access
                                                </label>
                                            </div>
                                            <div class="form-check">
                                                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                                                <label class="form-check-label" for="flexCheckDefault">
                                                Delete items in access
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                </div>}
                            </td>
                            <td className="text-center" ><button className="restricted">Restricted Access</button></td>
                            <td className="text-center" >
                                <div className="summary_Specifications">
                                <p>View | Create</p>
                                </div>
                            </td>
                            <td className="text-center" >1 min ago</td>
                            <td className="text-center" >
                                <div class="form-check form-switch">
                                    <input class="form-check-input" type="checkbox" id="flexSwitchCheckDefault" checked />
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td> 
                            <div style={{ cursor: "pointer"}} onClick={()=>handleChange('purchase')} >{expandable === 'purchase'?<RemoveCircleOutlineOutlined />:<AddCircleOutline/>} Purchase Order/ Work order</div>
                            { expandable==='purchase' && <div className="accessControl__Popup">
                                    <p>All aspects in the bidding module</p>
                                    <div className="d-flex align-items-center">
                                        <div className="accessControl__PopupElement p-2 mx-2">
                                            <p>Access Control</p>
                                            <div className="accessControl__Element my-2">
                                                <input type="radio" aria-label="Radio button for following text input"/>
                                                <div>
                                                    <h6>All Access</h6>
                                                    <p>All Access Can access all items</p>
                                                </div>
                                            </div>
                                            <div className="accessControl__Element my-1">
                                                <input type="radio" aria-label="Radio button for following text input"/>
                                                <div>
                                                    <h6>Restrict Access</h6>
                                                    <p>Restricted Access Can access only assigned or created items</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="accessControl__PopupElementRight p-2">
                                            <p>Permissions</p>
                                            <div class="form-check">
                                                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                                                <label class="form-check-label" for="flexCheckDefault">
                                                View items in access
                                                </label>
                                            </div>
                                            <div class="form-check">
                                                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                                                <label class="form-check-label" for="flexCheckDefault">
                                                Edit items in access
                                                </label>
                                            </div>
                                            <div class="form-check">
                                                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                                                <label class="form-check-label" for="flexCheckDefault">
                                                Create items in access
                                                </label>
                                            </div>
                                            <div class="form-check">
                                                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                                                <label class="form-check-label" for="flexCheckDefault">
                                                Delete items in access
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                </div>}
                            </td>
                            <td className="text-center" ><button className="restricted">Restricted Access</button></td>
                            <td className="text-center" >
                                <div className="summary_Specifications">
                                <p>View | Create</p>
                                </div>
                            </td>
                            <td className="text-center" >1 min ago</td>
                            <td className="text-center" >
                                <div class="form-check form-switch">
                                    <input class="form-check-input" type="checkbox" checked id="flexSwitchCheckDefault"/>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td> 
                            <div style={{ cursor: "pointer"}} onClick={()=>handleChange('organisational')} >{expandable === 'organisational'?<RemoveCircleOutlineOutlined />:<AddCircleOutline/>} Organisational Profile</div>
                            { expandable === 'organisational' && <div className="accessControl__Popup">
                                    <p>All aspects in the bidding module</p>
                                    <div className="d-flex align-items-center">
                                        <div className="accessControl__PopupElement p-2 mx-2">
                                            <p>Access Control</p>
                                            <div className="accessControl__Element my-2">
                                                <input type="radio" aria-label="Radio button for following text input"/>
                                                <div>
                                                    <h6>All Access</h6>
                                                    <p>All Access Can access all items</p>
                                                </div>
                                            </div>
                                            <div className="accessControl__Element my-1">
                                                <input type="radio" aria-label="Radio button for following text input"/>
                                                <div>
                                                    <h6>Restrict Access</h6>
                                                    <p>Restricted Access Can access only assigned or created items</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="accessControl__PopupElementRight p-2">
                                            <p>Permissions</p>
                                            <div class="form-check">
                                                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                                                <label class="form-check-label" for="flexCheckDefault">
                                                View items in access
                                                </label>
                                            </div>
                                            <div class="form-check">
                                                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                                                <label class="form-check-label" for="flexCheckDefault">
                                                Edit items in access
                                                </label>
                                            </div>
                                            <div class="form-check">
                                                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                                                <label class="form-check-label" for="flexCheckDefault">
                                                Create items in access
                                                </label>
                                            </div>
                                            <div class="form-check">
                                                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                                                <label class="form-check-label" for="flexCheckDefault">
                                                Delete items in access
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                </div>}
                            </td>
                            <td className="text-center" ><button>All Access</button></td>
                            <td className="text-center" >
                                <div className="summary_Specifications">
                                    <p>View | Create | Edit | Delete </p>
                                </div>
                            </td>
                            <td className="text-center" >1 min ago</td>
                            <td className="text-center" >
                                <div class="form-check form-switch">
                                    <input class="form-check-input" checked type="checkbox" id="flexSwitchCheckDefault"/>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td> 
                            <div style={{ cursor: "pointer"}} onClick={()=>handleChange('permissions')} >{expandable === 'permissions'?<RemoveCircleOutlineOutlined />:<AddCircleOutline/>} Permissions & Access Control</div>
                            { expandable === 'permissions' && <div className="accessControl__Popup">
                                    <p>All aspects in the bidding module</p>
                                    <div className="d-flex align-items-center">
                                        <div className="accessControl__PopupElement p-2 mx-2">
                                            <p>Access Control</p>
                                            <div className="accessControl__Element my-2">
                                                <input type="radio" aria-label="Radio button for following text input"/>
                                                <div>
                                                    <h6>All Access</h6>
                                                    <p>All Access Can access all items</p>
                                                </div>
                                            </div>
                                            <div className="accessControl__Element my-1">
                                                <input type="radio" aria-label="Radio button for following text input"/>
                                                <div>
                                                    <h6>Restrict Access</h6>
                                                    <p>Restricted Access Can access only assigned or created items</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="accessControl__PopupElementRight p-2">
                                            <p>Permissions</p>
                                            <div class="form-check">
                                                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                                                <label class="form-check-label" for="flexCheckDefault">
                                                View items in access
                                                </label>
                                            </div>
                                            <div class="form-check">
                                                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                                                <label class="form-check-label" for="flexCheckDefault">
                                                Edit items in access
                                                </label>
                                            </div>
                                            <div class="form-check">
                                                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                                                <label class="form-check-label" for="flexCheckDefault">
                                                Create items in access
                                                </label>
                                            </div>
                                            <div class="form-check">
                                                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                                                <label class="form-check-label" for="flexCheckDefault">
                                                Delete items in access
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                </div>}
                            </td>
                            <td className="text-center" ><button className="no_access">No Access</button></td>
                            <td className="text-center" >
                                <div className="summary_Specifications">
                                    <p></p>
                                </div>
                            </td>
                            <td className="text-center" >1 min ago</td>
                            <td className="text-center" >
                                <div class="form-check form-switch">
                                    <input class="form-check-input" type="checkbox" id="flexSwitchCheckDefault"/>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default AccessControl