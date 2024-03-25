import axios from "axios";

export function Login() {
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("hehlo");
        const params = new FormData(event.target);
        axios.post("http://localhost:3000/sessions.json", params).then((response) => {
            console.log(response);
            event.target.reset();
        });
    };


    return (
        <div id="login">
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    Email: <input name="email" type="text" />
                </div>
                <div>
                    Password: <input name="password" type="password" />
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}