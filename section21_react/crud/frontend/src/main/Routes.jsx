import React from "react";
import {Routes, Route} from "react-router-dom";

import Home from "../components/home/Home.jsx";
import UserCrud from "../components/user/UserCrud.jsx";

export default props =>
    <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/users" element={<UserCrud />} />
        <Route path="*" element={<Home />} />
    </Routes>

