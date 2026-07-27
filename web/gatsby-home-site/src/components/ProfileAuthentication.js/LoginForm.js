import React from 'react'
import {Link} from 'gatsby'

const LoginForm = () => {
    return (
        <div className="login-form">
            <h2>登入</h2>

            <form>
                <div className="form-group">
                    <label>電子郵件</label>
                    <input type="text" className="form-control" placeholder="Username or email" />
                </div>

                <div className="form-group">
                    <label>密碼</label>
                    <input type="password" className="form-control" placeholder="Password" />
                </div>

                <div className="row align-items-center">
                    <div className="col-lg-6 col-md-6 col-sm-6 remember-me-wrap">
                        <p>
                            <input type="checkbox" id="test2" />
                            <label>記住我</label>
                        </p>
                    </div>

                    <div className="col-lg-6 col-md-6 col-sm-6 lost-your-password-wrap">
                        <Link to="#" className="lost-your-password">
                            忘記密碼?
                        </Link>
                    </div>
                </div>

                <button type="submit">登入</button>
            </form>
        </div>
    )
}

export default LoginForm