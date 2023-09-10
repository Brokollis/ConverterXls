import HeaderComponent from "./components/header";
import Routies from "./routes/Routes";
import { FileDataProvider } from "./services/UseFileContext";
import { ContainerGlobal, GlobalStyle } from "./styles/GlobalStyle";



const App = () => {
  return (
    <FileDataProvider>
      <ContainerGlobal>
        <GlobalStyle/>
        <HeaderComponent/>
        <Routies/>
      </ContainerGlobal>
    </FileDataProvider>

  );
}

export default App;

