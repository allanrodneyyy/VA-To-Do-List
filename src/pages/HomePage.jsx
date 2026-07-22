import '../App.css'

import { Header } from "../components/Header";

export function HomePage({ theme, setTheme }) {
  return (
    <div className="">
      <Header theme={theme} setTheme={setTheme} />
    </div>

  );
}