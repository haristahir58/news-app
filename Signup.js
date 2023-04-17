import React from 'react'
import Admin from "./Images/Admin.jpeg";
import './App.css';
import { NavLink } from "react-router-dom";

export default function Signup() {
  return (
   <>
        <section className='signup'>
        <div className='container mt-5'>
            <div className="signup-content">
            <div className="signup-image">
                    <figure>
                        <img src={Admin} alt="registration Pic" />
                    </figure>
                
                </div>
                <div className="signup-form">
                    <h2 className='form-title'>Sign up</h2>
                    <form className='register-form' id='register-form'>
                        
                        <div className="form-group">
                            <label htmlFor="name">
                            <i class="zmdi zmdi-account material-icons-name"></i>
                            </label>

                            <input type="text" name="name" id="name" autoComplete='off' placeholder='Your Name'/>   
                        </div>


                        <div className="form-group">
                            <label htmlFor="email">
                            <i class="zmdi zmdi-email material-icons-name"></i>
                            </label>

                            <input type="email" name="email" id="email" autoComplete='off' placeholder='Your Email'/>   
                        </div>



                        <div className="form-group">
                            <label htmlFor="phone">
                            <i class="zmdi zmdi-phone-in-talk material-icons-name"></i>
                            </label>

                            <input type="number" name="phone" id="phone" autoComplete='off' placeholder='Your Phone'/>   
                        </div>



                        <div className="form-group">
                            <label htmlFor="work">
                            <i class="zmdi zmdi-slideshow material-icons-name"></i>
                            </label>

                            <input type="text" name="work" id="work" autoComplete='off' placeholder='Your Profession'/>   
                        </div>



                        <div className="form-group">
                            <label htmlFor="password">
                            <i class="zmdi zmdi-lock material-icons-name"></i>
                            </label>

                            <input type="password" name="password" id="password" autoComplete='off' placeholder='Your Password'/>   
                        </div>



                        <div className="form-group">
                            <label htmlFor="cpassword">
                            <i class="zmdi zmdi-lock material-icons-name"></i>
                            </label>

                            <input type="password" name="cpassword" id="cpassword" autoComplete='off' placeholder='Confirm Your Password'/>   
                        </div>


                        <div className="form-group">
                            <input type="submit" name='signup' id='signup' className='form-submit' value={"register"} /> 
                            <p className='login-link my-3'>Already have an account? <a
                            href='/signup'>Login</a></p>
                        </div>
{/*                         
                        <div className="form-group">
                        <p className="signup-image-link">Already have an account? <NavLink to="/login">Login</NavLink></p>
                        </div> */}
                        


                    </form>
                    </div>
                

       
            </div>
        </div>
        </section>

   </>
  )
}
