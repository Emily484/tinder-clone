import Header from "./components/header/Header";
import TinderCards from './components/tinderCards/TinderCards';
import SwipeButtons from './components/swipeButtons/SwipeButtons';

function App() {
  return (
    //BEM class naming convention
    <div className="app">
      <Header />
      <TinderCards />
      <SwipeButtons />
    </div>
  );
}

export default App;
