import { useState } from "react";
import { Link } from "react-router-dom";

const SignUpComponent = () => {

    let [username, updateUsername] = useState("")
    let [email, updateEmail] = useState("")
    let [phone, updatePhone] = useState("")
    let [password, updatePassword] = useState("")
    return (
        <div className="row justify-content-center mt-4">
            <div className="col-md-6 card shadow p-4">
                <h2>Sign Up</h2>
                <p>current username : {username}</p>
                <form >

                    <input
                        type="text"
                        className="form-control"
                        placeholder="enter username"
                        required
                        onChange={(e) => { updateUsername(e.target.value) }}
                    /><br />

                    <input
                        type="email"
                        className="form-control"
                        placeholder="enter your email" 
                        required
                        onChange={(e)=>{updateEmail(e.target.value)}}/><br />

                    <input
                        type="tel"
                        className="form-control"
                        placeholder="enter phone number"
                        required 
                        onChange={(e)=>{updatePhone(e.target.value)}}/><br />

                    <input
                        type="password"
                        className="form-control"
                        placeholder="enter your password"
                        required
                        onChange={(e)=>{updatePassword(e.target.value)}} /><br />

                    <button className="btn btn-dark">
                        Sign Up
                    </button><br />

                    <Link to="/signin">Alredy have an account? Sign In</Link>


                </form>
            </div>



        </div>
    );
}

export default SignUpComponent;
