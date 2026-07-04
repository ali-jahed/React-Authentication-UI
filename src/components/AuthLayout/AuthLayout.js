import "./AuthLayout.css";

import logo from "../../assets/images/logo.png";

function AuthLayout({ title, children }) {
    return (
        <main className="auth-page">

            <section className="glass-card">

                <img
                    src={logo}
                    alt="Logo"
                    className="logo"
                />

                <h2 className="auth-title">
                    {title}
                </h2>

                {children}

            </section>

        </main>
    );
}

export default AuthLayout;