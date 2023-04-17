import React from 'react'
import loginpic from './Images/Login.jpg'

export default function Login() {
  return (
    <>
        <section className='signin'>
        <div className='container mt-5'>
            <div className="signin-content">
            <div className="signin-image">
                    <figure>
                        <img src={loginpic} alt="registration Pic" />
                    </figure>
                
                </div>
                <div className="signin-form">
                    <h2 className='form-title'>Login</h2>
                    <form className='register-form' id='register-form'>
                        

                        <div className="form-group">
                            <label htmlFor="email">
                            <i class="zmdi zmdi-email material-icons-name"></i>
                            </label>

                            <input type="email" name="email" id="email" autoComplete='off' placeholder='Your Email'/>   
                        </div>


                        <div className="form-group">
                            <label htmlFor="password">
                            <i class="zmdi zmdi-lock material-icons-name"></i>
                            </label>

                            <input type="password" name="password" id="password" autoComplete='off' placeholder='Your Password'/>   
                        </div>



                        <div className="form-group">
                            <input type="submit" name='signin' id='signin' className='form-submit' value={"Login"} /> 
                            <p className='login-link my-3'>Don't have an account? <a
                            href='/login'>Sign Up</a></p>
                        </div>
{/*                         
                        <div className="form-group">
                        <p className="signin-image-link">Already have an account? <NavLink to="/login">Login</NavLink></p>
                        </div> */}
                        


                    </form>
                    </div>
                

       
            </div>
        </div>
        </section>

    </>
  )
}
