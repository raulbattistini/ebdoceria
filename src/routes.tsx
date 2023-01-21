import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { FAQ } from "./pages/FAQ";
import { Home } from "./pages/Home";
import { Cardapio } from "./pages/Menu";
import { Menu } from "./pages/MenuRedir";
import { NotFound } from "./pages/NotFound";
import { CakePage } from "./pages/CakePage";
import { JellyPage } from "./pages/JellyPage";
import { TYP } from "./pages/TYP";
import { Navbar } from "./components/navbar";
import { Footer } from "./components/footer";

export const RoutesList = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cardapio" element={<Cardapio />} />
        {/* <Route path="/bolos/:link"  element={<CakePage imagePath={''}/>} /> */}
        {/* <Route path="/geleias/:link"  element={<JellyPage/>} /> */}
        <Route path="/menu" element={<Menu />} />
        <Route path="/FAQ" element={<FAQ />} />
        {/* <Route path="/thank-you"  element={<TYP/>} /> */}
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </Router>
  );
};
