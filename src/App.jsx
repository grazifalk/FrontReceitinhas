import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Root } from "./config/routes/root";
import GlobalStyle from "./style/style-config/style";
import VLibras from "@djpfs/react-vlibras/";

function App() {
  return (
    <>
      <GlobalStyle />
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
      <VLibras forceOnload={true} />
      <Root />
    </>
  );
}

export default App;
