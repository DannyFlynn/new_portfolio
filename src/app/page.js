import { Navigation } from "./components/Navigation";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="bg-black text-white relative overflow-x-hidden text-lg sm:text-2xl">
      <Navigation />
      <Header />
      <Main />
      <Footer />
    </div>
  );
}
