import "./Header.css";

export default function Header() {
  return (
    <header className="container mt-[60px] flex items-center justify-between">
      <img src="src/assets/logo.svg" alt="logo" />
      <div className="flex item-center"></div>
    </header>
  );
}
