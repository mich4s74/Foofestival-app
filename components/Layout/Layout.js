import Footer from "./Footer";
import Header from "./Header";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      // The children of Layout in index.js
      {children}
      <Footer />
    </>
  );
};

export default Layout;
