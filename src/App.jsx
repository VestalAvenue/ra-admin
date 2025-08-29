import "./App.css"
import { SidebarComponent, Navbar } from "./components"
import { BrowserRouter, Routes, Route } from "react-router-dom";


import { ThemeProvider } from "@/components/ThemeProvider"
import { SidebarProvider } from "./components/ui/sidebar";
import { Homepage } from "./components";
import Education from "./pages/Education";
 
 

function App({ children }) {
  return (
    <BrowserRouter>

      <div className = "flex">
        <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
          <SidebarProvider>
            <SidebarComponent />
          <div className="w-full">
            <Navbar />  
            <div className="px-4"> 
              <Routes>
                <Route path="/" element={<Homepage />} />
                <Route path="/project" element={<Homepage />} />
                <Route path="/education" element={<Education />} />
              </Routes>
            </div>
          </div>
          </SidebarProvider>
        </ThemeProvider>
      </div>
     </BrowserRouter> 
  );
}


export default App
