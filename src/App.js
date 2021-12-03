import './global.css';

import LettersSection from './letters/LettersSection';

function App() {
  return (
    <div
      style={{
        backgroundImage: `url(${process.env.PUBLIC_URL + '/outside_bg.png'})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
      }}
      className="w-full h-screen"
    >
      <h1>Hangman</h1>

      <LettersSection />
    </div>
  );
}

export default App;
