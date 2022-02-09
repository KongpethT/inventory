import { Link } from "react-router-dom"
import { FcMenu, FcRight, FcLeft, FcPrint } from "react-icons/fc" //Flat Color Icons
import { AiFillPlusCircle } from "react-icons/ai"
import { VscVm } from "react-icons/vsc"
import { GiPc, GiCapitol, GiCheckedShield, GiBookshelf } from "react-icons/gi" //Game Icons

const Navbar = (req, res) => {
    return (
        <div>
            <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                <FcMenu className="fs-1" style={{ cursor: 'pointer' }} data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight" />
            </div>
            <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
                <div className="offcanvas-body">
                    <div className="nav-item">
                        {/**security */}
                        <ul>
                            <li>
                                <GiCheckedShield className="fs-3 text-info" /> <sub className="text-dark fs-6"><b>SECURITY</b></sub>
                            </li>
                            <li><Link to="/sales/new" className="dropdown-item"><FcRight /><VscVm className="fs-4 text-success" /> login</Link></li>
                            <li><Link to="/sales/new" className="dropdown-item"><FcLeft /><VscVm className="fs-4 text-success" /> logout</Link></li>
                        </ul>
                        {/** inventory*/}
                        <ul>
                            <hr className="dropdown-divider bg-dark" />
                            <li>
                                <GiCapitol className="fs-3 text-info" /> <sub className="text-dark fs-6"><b>ADD-INVENTORY</b></sub>
                            </li>
                            <li><Link to="/add/computer" className="dropdown-item"><GiPc className="fs-4 text-success" /> laptop / desktop / server</Link></li>
                            <li><Link to="/sales/new" className="dropdown-item"><VscVm className="fs-5 text-success" /> monitor</Link></li>
                            <li><Link to="/sales/new" className="dropdown-item"><FcPrint className="fs-5 text-success" /> printer</Link></li>
                            <li><Link to="/add/brand" className="dropdown-item"><AiFillPlusCircle className="fs-6 text-info" /> brand</Link></li>
                            <li><Link to="/add/model" className="dropdown-item"><AiFillPlusCircle className="fs-6 text-info" /> model</Link></li>
                            <li><Link to="/add/type" className="dropdown-item"><AiFillPlusCircle className="fs-6 text-info" /> type</Link></li>
                            <hr className="dropdown-divider bg-dark" />
                        </ul>
                        {/**report */}
                        <ul>
                            <li>
                                <GiBookshelf className="fs-3 text-info" /> <sub className="text-dark fs-6"><b>REPORTS-INVENTORY</b></sub>
                            </li>
                            <li><Link to="/sales/new" className="dropdown-item"><GiPc className="fs-4 text-success" /> laptop / desktop / server</Link></li>
                            <li><Link to="/sales/new" className="dropdown-item"><VscVm className="fs-5 text-success" /> monitor</Link></li>
                            <li><Link to="/sales/new" className="dropdown-item"><FcPrint className="fs-5 text-success" /> new printer</Link></li>
                        </ul>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Navbar