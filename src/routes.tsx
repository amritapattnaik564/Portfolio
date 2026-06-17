import type { RouteObject } from 'react-router-dom';
import About from './pages/About';
import Skillset from './pages/Skillset';
import Expertise from './pages/Expertise';
import Experience from './pages/Experience';
import Projects from './pages/Projects';
import Contact from './pages/Contact';

export const routes: RouteObject[] = [
  {
    path: '/',
    element: <About />
  },
  {
    path: '/skillset',
    element: <Skillset />
  },
  {
    path: '/expertise',
    element: <Expertise />
  },
  {
    path: '/experience',
    element: <Experience />
  },
  {
    path: '/projects',
    element: <Projects />
  },
  {
    path: '/contact',
    element: <Contact />
  }
];

export default routes;
