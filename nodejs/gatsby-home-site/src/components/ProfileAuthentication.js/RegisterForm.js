import React from 'react'

const RegisterForm = () => {
    return (
        <div className="register-form">
            <h2>註冊新帳號</h2>

            <form>
                <div className="form-group">
                    <label>電子郵件</label>
                    <input type="text" className="form-control" placeholder="email" />
                </div>

                <div className="form-group">
                    <label>密碼</label>
                    <input type="password" className="form-control" placeholder="Password" />
                </div>
                
                   <p className="description">
                    密碼至少八碼，最好搭配大小寫英文字母，提供安全性。
                   </p>
                
                

                <button type="submit">註冊</button>
            </form>
        </div>
    )
}

export default RegisterForm