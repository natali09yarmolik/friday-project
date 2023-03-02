import {NavLink} from "react-router-dom";


export const Header=()=>{
    return(
        <div>
            <NavLink
                id={'register'}
                to={'/register'}
           /*     onClick={handleClose}
                className={({isActive})=>isActive? s.active : ''} // делает студент
         */   >
                Register form
            </NavLink>
            <NavLink
                id={'login'}
                to={'/login'}
        /*        onClick={handleClose}
                className={({isActive})=>isActive? s.active : ''} // делает студент
      */      >
                Login
            </NavLink>
            <NavLink
                id={'profile'}
                to={'/profile'}
                onClick={handleClose}
                className={({isActive})=>isActive? s.active : ''} // делает студент
            >
                Junior Plus
            </NavLink>
        </div>
    )
}