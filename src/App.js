import React, { useEffect } from "react";
import "./App.scss";
import Main from "./containers/Main";

function App() {
  useEffect(() => {
    const script1 = document.createElement("script");
    script1.src = `https://www.googletagmanager.com/gtag/js?id=${process.env.GTAG}`;
    script1.async = true;
    document.body.appendChild(script1);

    const script2 = document.createElement("script");
    script2.innerHTML = `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments)}
      gtag('js', new Date());
      gtag('config', '${process.env.GTAG}');
    `;
    document.body.appendChild(script2);

    return () => {
      document.body.removeChild(script1);
      document.body.removeChild(script2);
    };
  }, []);

  return (
    <div>
      <Main />
    </div>
  );
}

export default App;
