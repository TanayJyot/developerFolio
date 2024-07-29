import React from "react";
import "./App.scss";
import Main from "./containers/Main";

function App() {
  return (
    <div>
      <Main />

      <!-- Google tag (gtag.js) -->
      <script async src={`https://www.googletagmanager.com/gtag/js?id=${process.env.GTAG}`}></script>
      <script>
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments)}
        gtag('js', new Date());

        gtag('config', '${process.env.GTAG}');
      </script>
    </div>
  );
}

// This is to try push
export default App;
