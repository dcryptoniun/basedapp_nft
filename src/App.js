import './assets/style/App.css';

function App() {
  return (
   <div className="relative flex h-screen w-screen justify-center items-center">
    <div className='flex absolute h-52 w-52 bg-yellow-400/25 rounded-full  '></div>
    <div className="flex justify-center items-center backdrop-blur-xl border shadow relative h-80 w-80">
      <h1>Web3 Dapp</h1>
    </div>
   </div>
  );
}

export default App;
