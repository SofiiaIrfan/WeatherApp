import { createRoot } from "react-dom/client";

import WeatherApp from "./WeatherApp";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(<WeatherApp />);
