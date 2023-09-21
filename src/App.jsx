import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Root } from "./config/routes/root";
import GlobalStyle from "./style/style-config/style";
import VLibras from "@djpfs/react-vlibras/";
import { ThemeProvider } from "styled-components";
import { useEffect } from "react";
import { useState } from "react";

function App() {
  const savedDarkMode = localStorage.getItem("darkMode");
  const [darkMode, setDarkMode] = useState(savedDarkMode === "true");
  const [size, setSize] = useState(() => {
    const savedFontSize = localStorage.getItem("fontSize");
    return savedFontSize ? parseInt(savedFontSize) : 20;
  });

  const [increaseCount, setIncreaseCount] = useState(() => {
    const savedIncreaseCount = localStorage.getItem("increaseCount");
    return savedIncreaseCount ? parseInt(savedIncreaseCount) : 0;
  });

  const [decreaseCount, setDecreaseCount] = useState(() => {
    const savedDecreaseCount = localStorage.getItem("decreaseCount");
    return savedDecreaseCount ? parseInt(savedDecreaseCount) : 0;
  });

  const maxCount = 3;

  useEffect(() => {
    localStorage.setItem("fontSize", size.toString());
  }, [size]);

  useEffect(() => {
    localStorage.setItem("increaseCount", increaseCount.toString());
  }, [increaseCount]);

  useEffect(() => {
    localStorage.setItem("decreaseCount", decreaseCount.toString());
  }, [decreaseCount]);
  useEffect(() => {
    localStorage.setItem("fontSize", size.toString());
  }, [size]);

  const increaseFontSize = () => {
    if (increaseCount < maxCount) {
      setSize((prevSize) => prevSize + 2);
      setIncreaseCount((prevCount) => prevCount + 1);

      if (increaseCount + 1 === maxCount) {
        setDecreaseCount(0);
      }
    }
  };

  const decreaseFontSize = () => {
    if (decreaseCount < maxCount) {
      setSize((prevSize) => prevSize - 2);
      setDecreaseCount((prevCount) => prevCount + 1);

      if (decreaseCount + 1 === maxCount) {
        setIncreaseCount(0);
      }
    }
  };

  useEffect(() => {
    const savedFontSize = localStorage.getItem("fontSize");
    if (savedFontSize) {
      setSize(parseInt(savedFontSize));
    }
    localStorage.setItem("darkMode", darkMode.toString());
  }, [darkMode]);

  const HandledarkMode = () => {
    setDarkMode(!darkMode);
  };

  const lightTheme = {
    colors: {
      white: "#FFF",
      black: "#000",
      blackSecondary: "#303030",
      blue: "#c4eff2",
      green: "#bbdac7",
      yellow: "#ffe9a7",
      salmon: "#ffece1",
      greenBg: "#a6ceb6",
      container1: "rgba(255, 255, 255, 0.5)",
      container2: "#f5f3f0",
      scrollbarI: "#d9d9d9",
      scrollbar: "#013d32",
    },
  };

  const darkTheme = {
    colors: {
      // white: "#3A3A3A",
      // black: "#FFF",
      // blackSecondary: "#303030",
      // blue: "#c4eff2",
      // green: "#bbdac7",
      // yellow: "#ffe9a7",
      // salmon: "#ffece1",
      // greenBg: "#0D0D0D",
      // container1: "rgba(255, 255, 255, 0.5)",
      // container2: "#f5f3f0",
      // scrollbarI: "#d9d9d9",
      // scrollbar: "#FFF",

      white: "#3A3A3A", // Cor de fundo clara
      black: "#FFF", // Cor de texto escura
      blackSecondary: "#444", // Cor de texto secundária mais escura
      blue: "#2a99f5", // Cor azul para destaque
      green: "#00A968", // Cor verde para destaque
      yellow: "#FFD700", // Cor amarela para destaque
      salmon: "#FF6347", // Cor salmão para destaque
      greenBg: "#0D0D0D", // Cor de fundo verde claro
      container1: "rgba(0, 0, 0, 0.5)", // Cor de fundo do contêiner com transparência
      container2: "#333", // Cor de fundo secundária
      scrollbarI: "#444", // Cor da barra de rolagem inativa
      scrollbar: "#2a99f5", // Cor da barra de rolagem ativa
    },
  };

  const theme = {
    ...(darkMode ? darkTheme : lightTheme),
    font: {
      size: `${size}px`,
    },
  };

  const checar = darkMode ? true : false;

  return (
    <>
      <ThemeProvider theme={theme}>
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
        <Root
          increaseFontSize={increaseFontSize}
          decreaseFontSize={decreaseFontSize}
          HandledarkMode={HandledarkMode}
          checar={checar}
        />
      </ThemeProvider>
    </>
  );
}

export default App;
