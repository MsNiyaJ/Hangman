import './global.css';

import LettersSection from './letters/LettersSection';
import WordSection from './WordSection';

function App() {
  return (
    <div
      style={{
        backgroundImage: `url(${'/outside_bg.png'})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
      }}
      className="w-full h-screen"
    >
      <h1 className="game-title">Hangman</h1>
      <WordSection />
      <LettersSection />
    </div>
  );
}

export default App;
