import React from 'react';
import { Home } from '../components/Home';
import { About } from '../components/About';
import { Contact } from '../components/Contact';
import { Routes, Route } from 'react-router-dom';

export const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />}>
        {' '}
      </Route>
      <Route path="/About" element={<About />}>
        {' '}
      </Route>
      <Route path="/Contact" element={<Contact />}>
        {' '}
      </Route>
    </Routes>
  );
};
