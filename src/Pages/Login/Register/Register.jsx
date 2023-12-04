import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../Provider/AuthProvider';

import { getAuth, updateProfile } from 'firebase/auth';
import app from '../../../firebase/firebase.config';
import { FaEye, FaLock } from 'react-icons/fa';


const auth = getAuth(app);

const Register = () => {
    const navigate = useNavigate()
    const [error, setError] = useState('')
    const [showPassword, setShowPassword] = useState(false);
    const { createUser } = useContext(AuthContext)

    const handleRegister = event => {
        event.preventDefault()
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        if (!/^(?=.*[A-Z]).*$/.test(password)) {
            setError('Password must have at least one Uppercase Character')
            return;
        } else if (!/^(?=.*[0-9]).*$/.test(password)) {
            setError('Password must contain at least one Digit.')
            return
        }
        else if (password.length < 6) {
            setError('Your password must be at least 8 characters')
            return;
        }

        createUser(email, password)
            .then(result => {
                const createdUser = result.user;
                console.log(createdUser);
                setError('')
                updateProfile(auth.currentUser, {
                    displayName: name,
                }).then(() => {

                }).catch((error) => {
                    console.log(error.message);
                });
                navigate('/category/0')
            })
            .catch(error => {
                setError(error.message);
            })
    }

    const handleTogglePassword = () => {
        setShowPassword(!showPassword);
    };

    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col">
                <h1 className='text-5xl font-bold text-indigo-900'>REGISTER</h1>
                <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleRegister} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name='name' placeholder="Name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type={showPassword ? 'text' : 'password'} name='password' placeholder='Password' className="input input-bordered" required />
                            <label className="label">
                                <p><small>Already have an account?Please<Link className='btn btn-active btn-link' to='/login' >Login</Link></small></p>
                            </label>
                        </div>
                        <p className='text-red-500'>{error}</p>
                        <span className="eye-icon" onClick={handleTogglePassword}>
                            {showPassword ? <FaEye></FaEye> : <FaLock />}
                        </span>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Register</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;