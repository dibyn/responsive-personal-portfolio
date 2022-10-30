import React from 'react';
import { About } from './components/About';
import { Contact } from './components/Contact';
import { Experience } from './components/Experience';
import { Footer } from './components/layout/footer';
import { Header } from './components/layout/header';
import { Nav } from './components/layout/nav';
import { Services } from './components/Services';
import { Testimonials } from './components/Testimonials';
import { Works } from './components/Works';

// import styles from './Portfolio.styles';

type PortfolioProps = {};

export const Portfolio: React.FC<PortfolioProps> = (props) => {
  return <>
    <Header />
    <Nav />
    <About />
    <Experience />
    <Services />
    <Works />
    <Testimonials />
    <Contact />
    <Footer />
  </>;
};
