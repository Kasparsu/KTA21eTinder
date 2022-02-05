
export function SignUp() {
    return `Loo konto
        <a href='/'>Tagasi</a>
        <br>
        <form action="/register" method="POST">
            <div>
                <label>Name</label>
                <input name="name" />
            </div>

            <div>
                <label>Email</label>
                <input name="email" />
            </div>

            <div>
                <label>Password</label>
                <input name="password" type="password" />
            </div>

            <div>
                <label>Confirm Password</label>
                <input name="confirmPassword" type="password" />
            </div>

            <div>
                <input type="submit" value="Sign Up" />
            </div>
        </form>
    `
}