import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";


const SignInComponent = () => {

    let [email, updateEmail] = useState("")
    let [password, updatePassword] = useState("")

    let [loading, setLoading] = useState("");
    let [success, setSuccess] = useState("");
    let [error, setError] = useState("");

    // create variable for use navigate
    let navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(email, password)

        // notifying the user of the process
        setLoading("Please Wait...")
        setSuccess("")
        setError("")
        // try sending user_data to server
        try {
            // create form user_data
            const user_data = new FormData();
            user_data.append("email", email);
            user_data.append("password", password);

            const response = await axios.post("https://kmuturi.alwaysdata.net/api/signin", user_data,);
            console.log(response)

            if (response.status === 200) {
                if (response.data.user) {
                    localStorage.setItem("user", JSON.stringify(response.data.user))
                    setSuccess(response.data.message);
                    navigate("/")
                }
            };
        } catch (error) {
            console.log(error)
            setError(error.message)
            setLoading("")
        }
    }

    return (
        <div className="row justify-content-center mt-4">
            <div className="col-md-6 card shadow p-4">
                <h2>Sign In</h2>
                <h5 className="text-warning">{loading}</h5>
                <h5 className="text-danger">{error}</h5>
                <h5 className="text warning">{success}</h5>
                <form onSubmit={handleSubmit}>
                    <input type="text"
                        className="form-control"
                        placeholder="Enter email"
                        required
                        onChange={(e) => { updateEmail(e.target.value) }}
                        value={email}
                    /><br />

                    <input type="text"
                        className="form-control"
                        placeholder="Enter your password"
                        required
                        onChange={(e) => { updatePassword(e.target.value) }}
                        value={password}
                    /><br />

                    <button className="btn btn-dark">Sign In</button><br />

                    <Link to="/signup">Dont have an account? Sign Up</Link>
                </form>

            </div>
        </div>
    );
}

export default SignInComponent;