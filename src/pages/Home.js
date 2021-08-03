import { Button, IconButton } from '@material-ui/core'
import { Add, DeleteOutline, Edit, VisibilityOutlined } from '@material-ui/icons'
import React from 'react'
import { useHistory } from 'react-router-dom'
import HomeUpperBar from '../components/HomeUpperBar'
import './Home.css'

const Home = () => {

    const history = useHistory();

    return (
        <div className="home__Wrapper">
            <HomeUpperBar/>
            <div className="home__Options">
                <Button onClick={()=>history.push('/access-control')} ><Add/> Add Role</Button>
                <IconButton><Edit/></IconButton>
                <IconButton><DeleteOutline/></IconButton>
            </div>
            <div className="home__Table">
                <table  className="table">
                    <thead class="table-light">
                        <tr>
                            <th>Department/Role Name</th>
                            <th className="text-center" >Access Level</th>
                            <th className="text-center" >No of members</th>
                            <th className="text-center" >Last updated</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr onClick={()=>history.push('/access-control')}>
                            <td>Management Role</td>
                            <td className="text-center" ><button>All Access</button></td>
                            <td className="text-center" >4</td>
                            <td className="text-center" >1 min ago</td>
                            <td className="text-center" ><VisibilityOutlined/></td>
                        </tr>
                        <tr>
                            <td>Procurement Team</td>
                            <td className="text-center" ><button className="restricted">Restricted Access</button></td>
                            <td className="text-center" >8</td>
                            <td className="text-center" >1 min ago</td>
                            <td className="text-center" ><VisibilityOutlined/></td>
                        </tr>
                        <tr>
                            <td>Project Team</td>
                            <td className="text-center" ><button className="restricted">Restricted Access</button></td>
                            <td className="text-center" >16</td>
                            <td className="text-center" >1 min ago</td>
                            <td className="text-center" ><VisibilityOutlined/></td>
                        </tr>
                        <tr>
                            <td>IT Team</td>
                            <td className="text-center" ><button className="restricted">Restricted Access</button></td>
                            <td className="text-center" >4</td>
                            <td className="text-center" >1 min ago</td>
                            <td className="text-center" ><VisibilityOutlined/></td>
                        </tr>
                        <tr>
                            <td>Super Admin</td>
                            <td className="text-center" ><button>All Access</button></td>
                            <td className="text-center" >1</td>
                            <td className="text-center" >1 min ago</td>
                            <td className="text-center" ><VisibilityOutlined/></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Home