import { Outlet, NavLink, Link } from "react-router-dom";

import github from "../../assets/github.svg";

import styles from "./Layout.module.css";

const Layout = () => {
    return (
        <div className={styles.layout}>
            <header className={styles.header} role={"banner"}>
                <div className={styles.headerContainer}>
                    <img
                        src={'resources/logo.png'}
                        alt={"Logo"}
                        style={{ height: 60, margin: 12 }}
                    />
                    <Link to="/" className={styles.headerTitleContainer}>
                        <h3 className={styles.headerTitle}>GPT + Enterprise data | SEC 10-K files</h3>
                    </Link>
                    <NavLink to="/qa" className={({ isActive }) => (isActive ? styles.headerNavPageLinkActive : styles.headerNavPageLink)}>
                        <h5 className={styles.headerTitle}>Ask a question</h5>
                    </NavLink>
                    <nav>
                        {/* <ul className={styles.headerNavList}>
                            <li>
                                <NavLink to="/" className={({ isActive }) => (isActive ? styles.headerNavPageLinkActive : styles.headerNavPageLink)}>
                                    Chat
                                </NavLink>
                            </li>
                        </ul> */}
                    </nav>
                    <h4 className={styles.headerRightText}>Azure OpenAI + Cognitive Search</h4>
                </div>
            </header>

            <Outlet />
        </div>
    );
};

export default Layout;
