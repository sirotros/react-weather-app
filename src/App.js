import React, { useState } from "react";
import "./App.css";

import { WeatherProvider } from "./context/WeatherContext";
import Form from "./components/Form";
import Content from "./components/Content";

function App() {
  return (
    <WeatherProvider>
      <Form />
      <Content />
    </WeatherProvider>
  );
}

export default App;
