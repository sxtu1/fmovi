import React from 'react';

import { Route, Routes } from 'react-router-dom';

import Home from '../pages/Home';
// import Login from '../pages/Login';
// import Register from '../pages/Register';
// import NotFound from '../pages/NotFound';

// import Catelog from '../pages/Catelog';
// import Detail from '../pages/Detail';

const Routing = () => {
    return (
        <Routes>
            {/* <Route path="/:category/search/:keyword" element={<Catelog />} />
            <Route path="/:category/:id" element={<Detail />} />
            <Route path="/:category" element={<Catelog />} /> */}
            <Route path="/movie" element={<Home />} />
            <Route path="/" element={<Home />} />
        </Routes>
    )
}

export default Routing;