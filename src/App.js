import Colorpick from './components/Colorpicks.js';
import './App.css';

const Apps = () => {
  const colors = ["red", "green", "blue", "yellow", "purple","orange","violet","black","pink","skyblue","lightgreen","darkviolet","lightyellow","gray"];

  return (
    <div className="App">
      <Colorpick colors={colors} />
    </div>
  );
};

export default Apps;
