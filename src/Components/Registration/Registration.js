import React, { useState} from 'react'
import { useForm } from 'react-hook-form'
import secureAxios from '../../Config/secureAxios/secureAxios'
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
import { Slide, Zoom, Limit, Bounce } from 'react-toastify';
import 'bootstrap/dist/css/bootstrap.min.css'
import './Register.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser,faEye  } from "@fortawesome/free-solid-svg-icons";
const eye = <FontAwesomeIcon icon={faEye} />;





export default function Registration() {
    const { register, handleSubmit, getValues, formState: { errors } } = useForm();
    const [passwordShown, setPasswordShown] = useState(false);

    const [UserRegsitration, setUserRegsitration] = useState({
        full_name: "",
        password: "",
        email: ""
    })

    const togglePasswordVisiblity = () => {
        setPasswordShown(passwordShown ? false : true);
        
      };

    const handleChange = (e) => {

        setUserRegsitration({ ...UserRegsitration, [e.target.name]: e.target.value })

    }
    

    
    const onSubmit = async (data) => {
       await secureAxios.post('register/', UserRegsitration)
            .then(res => {

                console.log(res.data)
                localStorage.setItem('error', res.data.error)
                if(res.data.error === localStorage.getItem('error')){
                    toast.error(localStorage.getItem('error'), {
                        position: "top-center",
                        autoClose: 5000,
                        hideProgressBar: true,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,

                    });
                }
                else {
                    toast.success('Registered Successfully', {
                        position: "top-center",
                        autoClose: 5000,
                        hideProgressBar: true,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,


                    });
                }

            })
            .catch(error => {
                console.log(error.data)
            })
    }
    return (
        <>
           
            <div className="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header" style={{ backgroundColor: '#f6f9fc' }}>
                            <h5 className="modal-title" id="exampleModalLabel" style={{ color: '#fe696a' }}><FontAwesomeIcon icon={faUser} /> &nbsp;Register</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">

                            <form onSubmit={handleSubmit(onSubmit)}>
                                <label>Full Name</label>
                                
                                    <input className="form-control" type='text' name='full_name' {...register("full_name", { required: true, minLength: 3, maxLength: 50, pattern: /^[a-z][a-z\s]*$/i })} onChange={handleChange} />
                                
                                
                                {errors.full_name && <span style={{ color: 'red' }}>This field is required</span>}
                                <br />
                                
                                <label>Password</label>
                                <span>
                                    <input className="form-control" type={passwordShown ? "text" : "password"} name='password' {...register("password", { required: true, minLength: 7, maxLength: 20, pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/i })} onChange={handleChange} />
                                    <i onClick={togglePasswordVisiblity}>{eye}</i>
                                </span>
                                
                                {errors.password && <span style={{ color: 'red' }}>Min 8 characters must contain Alphanumerica</span>}
                                <br />
                                
                                <label>Password Conformation</label>
                                

                                    <input className="form-control" type={passwordShown ? "text" : "password"}
                                        {...register("passwordConfirmation", {
                                            required: "Please confirm password!",
                                            validate: {
                                                matchesPreviousPassword: (value) => {
                                                    const { password } = getValues();
                                                    return password === value || "Passwords should match!";
                                                }
                                            }
                                        })}
                                    />
                                    <FontAwesomeIcon id='eye' onClick={togglePasswordVisiblity} icon={faEye} />
                                
                               
                                
                                <span >
                                    {errors.passwordConfirmation && (
                                        <span style={{ color: "red" }}>
                                            {errors.passwordConfirmation.message}
                                        </span>
                                    )}
                                </span>
                                <br />
                                <label>Email</label>
                                
                                    <input className="form-control" type='email' name='email' {...register("email", { required: true, pattern: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/i })} onChange={handleChange} />
                                
                               
                                {errors.password && <span style={{ color: 'red' }}>Email Should is a@domain.com</span>}
                                <br />
                                <div >
                                    <button className="form-control" id='btn' type='submit' >Register</button>
                                </div>
                            </form>

                        </div>
                    </div>
                </div>
            </div>

            <ToastContainer
                transition={Zoom}
                limit = '1'

            />





        </>
    )
}
