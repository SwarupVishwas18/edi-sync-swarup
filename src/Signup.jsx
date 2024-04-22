import { Link } from 'react-router-dom'
import './assets/css/login.css'
import bulb from './assets/img/bulb.png'
import rect from './assets/img/Rectangle-login.svg'
function Signup() {
    return (
        <div className="login">
            <div className="bulb-img">
                <img src={bulb} alt="Bulb Image" />

            </div>

            <div className="signup-container">
                <h1 className="title" style={{ fontSize: "4rem" }}>Signup</h1>
                <form action="">
                    <div className="input">
                        <input type="text" id='username' placeholder='Username' />
                    </div>
                    <div className="input">
                        <input type="text" id='username' placeholder='PRN Number' />
                    </div>
                    <div className="input">
                        <input type="text" id='username' placeholder='Password' />
                    </div>

                    <div className="input">
                        <select name="" id="">
                            <option value="0">Type</option>
                            <option value="0">Student</option>
                            <option value="0">Guide</option>
                        </select>
                    </div>

                    <div className="input">
                        <input type="text" id='username' placeholder='Team Name' />
                    </div>

                    <div className="input">
                        <button>Register</button>
                    </div>

                    <div>
                        Already Here? <Link className='link' to='/login'>Login</Link>
                    </div>
                </form>
            </div>

            <div className="background-rectangle">
                <img src={rect} width="400px" alt="" />
            </div>
        </div>
    )
}

export default Signup