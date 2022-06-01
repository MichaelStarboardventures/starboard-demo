import React from 'react';
import { Layout as DesignLayout } from '@starboard-ventures/design.ui.layout';
import {
  Home,
  User,
  ChartBar,
  Clock,
} from '@starboard-ventures/design.ui.icons';
import Logo from '@/assets/logo.png';

const Layout: React.FC = ({ children }) => {
  return (
    <DesignLayout
      route={{
        routes: [
          {
            name: 'Dashboard',
            path: '/dashboard',
            icon: <Home />,
          },
          {
            name: 'Manage',
            path: '/manage',
            icon: <ChartBar />,
          },
          {
            name: 'User',
            path: '/user',
            icon: <User />,
          },
          {
            name: 'Clock',
            path: '/clock',
            icon: <Clock />,
          },
        ],
      }}
    >
      {children}
    </DesignLayout>
  );
};

export default Layout;
