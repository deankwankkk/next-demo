import { NextPage } from 'next';

import Navbar from 'components/Navbar';
import Footer from 'components/Footer';

const Layout: NextPage = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col justify-between">
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
