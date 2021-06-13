import './App.css';
import WikipediaViewer from './views/WikipediaViewer/WikipediaViewer';
import Header from './components/Header/Header';
function App() {
  return (
    <div className="app">
      <Header text="Wikipedia viewer APP"/>
      <body className="app__content">
        <WikipediaViewer/>
      </body>
      <footer className="app__footer"></footer>
    </div>
  );
}

export default App;
