import { Routes, Route } from "react-router-dom";
import { TopBar } from "@/components/top-bar/top-bar";

// content pages
import { Home as HomePage } from "@/components/home/home";
import { About as AboutPage } from "@/components/about/about";
import { Contact as ContactPage } from "@/components/contact/contact";
import { NoMatch } from "@/components/not-found/not-found";

// navigation
import { Links } from "@/components/links/links";

export const App = () => (
  <>
    <div>
      <TopBar>
        <Links />
      </TopBar>
    </div>
    <Routes>
      <Route path="*" element={<NoMatch />} />
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/contact" element={<ContactPage />} />
    </Routes>
  </>
); 