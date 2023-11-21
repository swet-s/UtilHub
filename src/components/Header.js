import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faNavicon } from "@fortawesome/free-solid-svg-icons";

const Header = ({ text }) => {
    const location = useLocation();
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleNavBar = () => {
        setIsSidebarOpen((prevState) => !prevState);
    };

    return (
        <header className="header">
            <nav>
                <div className="row-1">
                    <span className="nav-name">{text}</span>
                    <FontAwesomeIcon
                        className="sidebar-button"
                        onClick={() => toggleNavBar()}
                        icon={faNavicon}
                    ></FontAwesomeIcon>
                </div>
                <ul className={`nav-list ${isSidebarOpen ? "active" : ""}`}>
                    <hr className="content-separator" />
                    <li className="nav-item">
                        <Link
                            to="/cointoss"
                            className={
                                location.pathname === "/cointoss" || location.pathname === "/"
                                    ? "selected"
                                    : ""
                            }
                        >
                            Coin-Toss
                        </Link>
                    </li>
                    <hr className="content-separator" />
                    <li className="nav-item">
                        <Link
                            to="/levelwindow"
                            className={
                                location.pathname === "/levelwindow" ||
                                location.pathname.startsWith("/fifteenpuzzle")
                                    ? "selected"
                                    : ""
                            }
                        >
                            15-Puzzle
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;