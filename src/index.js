import { createRoot } from "react-dom/client";

import styles from "./styles.css";
import WeatherApp from "./WeatherApp";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(<WeatherApp />);
