import { ThemeProvider } from "@/providers/ThemeProvider"
 
function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      {children}
    </ThemeProvider>
  )
}
 
export default App