import Portfolio from "./pages/Portfolio";

/**
 * The whole site is the terminal + diary portfolio.
 * Internal navigation is hash-based (#about, #projects, #writing,
 * #reading, #contact) and handled inside src/portfolio/app.ts,
 * so no router is needed.
 */
const App = () => <Portfolio />;

export default App;
