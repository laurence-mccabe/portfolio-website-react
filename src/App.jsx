import Sidebar from './components/Sidebar/Sidebar'
import Content from './Content'
import { DarkModeProvider } from './components/Contexts/DarkModeProvider'
import { SidebarProvider } from './components/Contexts/SidebarContext '

const App = () => {

  return (
    <>
      <SidebarProvider>
        <DarkModeProvider>
          <Sidebar />
          <Content />
        </DarkModeProvider>
      </SidebarProvider>
    </>
  )
}

export default App
