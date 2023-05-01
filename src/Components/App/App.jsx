import Header from "../Header/Header";
import Aside from "../Aside/Aside";
import Stats from "../Stats/Stats";
import Main from "../Main/Main";
import "./App.scss";

function App() {
  return (
    <div className="wrapper">
      <Header title="Title" avatar="avatar" />
      <Aside />
      <Stats />
      <Main />
    </div>
  );
}

export default App;