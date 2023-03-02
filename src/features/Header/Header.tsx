import {NavLink} from "react-router-dom";
import {PATH} from "../pages/Pages";
import s from "./header.module.css"

export const Header = () => {

    return (
        <div className={s.header}>
            <NavLink
                id={'login'}
                to={PATH.login}
            >
                Login
            </NavLink>
            <NavLink
                id={'register'}
                to={PATH.register}
            >
                Register form
            </NavLink>

            <NavLink
                id={'profile'}
                to={PATH.profile}
            >
                Profile
            </NavLink>
            <NavLink
                id={'passwordRecovery'}
                to={PATH.passwordRecovery}
            >
                Password Recovery
            </NavLink>
            <NavLink
                id={'test'}
                to={PATH.test}
            >
                Test
            </NavLink>
        </div>
    )
}