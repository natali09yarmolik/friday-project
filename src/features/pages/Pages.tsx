import {Navigate, Route, Routes} from "react-router-dom";
import {Register} from "../../pageComponents/register/Register";
import {Login} from "../../pageComponents/login/Login";
import {Profile} from "../../pageComponents/profile/Profile";
import {Error} from "../../pageComponents/error/Error";
import {PasswordRecovery} from "../../pageComponents/passwordRecovery/PasswordRecovery";
import {Test} from "../../pageComponents/test/test";
import React from "react";

export const PATH = {
    register: '/register',
    login: '/login',
    profile: '/profile',
    passwordRecovery: '/passwordRecovery',
    test: '/test'
}
export const Pages = () => {

    return (
        <div>
            <Routes>
                <Route path='/' element={<Login/>}/>
                <Route path={'login'} element={<Login/>}/>
                <Route path={'register'} element={<Register/>}/>
                <Route path={'profile'} element={<Profile/>}/>
                <Route path={'passwordRecovery'} element={<PasswordRecovery/>}/>
                <Route path={'test'} element={<Test/>}/>
                <Route path='404' element={<Error/>}/>
                <Route path='*' element={<Navigate to={'/404'}/>}/>
            </Routes>
        </div>
    )
}