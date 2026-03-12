import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";

const SignUpComponent = () => {

    let [username, updateUsername] = useState("")
    let [email, updateEmail] = useState("")
    let [phone, updatePhone] = useState("")
    let [password, updatePassword] = useState("")

    let [loading, setLoading] = useState("")
    let [error, setError] = useState("")
    let [success, setSuccess] = useState("")

    const handleSubmit = (e) => {
        // prevent default behaviour
        e.preventDefault();

        // notify user to wait
        setLoading("Submitting Data! Please wait ....")

        // confirm user input
        console.log(username, email, phone, password);

        // try send data to sever
        try {
            // create form data
            const user_data = FormData();
            user_data.append("username", username);
            user_data.append("email", email);
            user_data.append("phone", phone);
            user_data.append("password", password);

            // use axios tosend data to sever
            const response = axios.post("https://kmuturi.alwaysdata.net/api/signup", user_data)
            console.log(response);
        } catch (error) {
            console.log(error);
            setError(error.message);
            setLoading("");
        }
    }

    return (
        <div className="row justify-content-center mt-4">
            <div className="col-md-6 card shadow p-4">
                <h2>Sign Up</h2>
                <h5 className="text-warning">{loading}</h5>
                <h5 className="text-danger">{error}</h5>

                <form onSubmit={handleSubmit}>

                    <input
                        type="text"
                        className="form-control"
                        placeholder="enter username"
                        required
                        onChange={(e) => { updateUsername(e.target.value) }}
                        value={username}
                    /><br />

                    <input
                        type="email"
                        className="form-control"
                        placeholder="enter your email"
                        required
                        onChange={(e) => { updateEmail(e.target.value) }}
                        value={email} /><br />

                    <input
                        type="tel"
                        className="form-control"
                        placeholder="enter phone number"
                        required
                        onChange={(e) => { updatePhone(e.target.value) }}
                        value={phone} /><br />

                    <input
                        type="password"
                        className="form-control"
                        placeholder="enter your password"
                        required
                        onChange={(e) => { updatePassword(e.target.value) }}
                        value={password} /><br />

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
