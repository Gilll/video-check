import logo from './logo.svg';
import './App.css';
import {useEffect, useState} from "react";

function App() {
	const [data, setData] = useState()

	function getGPUInfo() {
		let canvas = document.createElement('canvas').getContext('webgl');
		let renderer = canvas.getExtension('WEBGL_debug_renderer_info');
		if(renderer) {
			return canvas.getParameter(renderer.UNMASKED_RENDERER_WEBGL);
		}
		return false;
	}

	useEffect(() => {
		setData(getGPUInfo())
	},[])

  return (
    <div className="App">
      <header className="App-header">
		  {data}
      </header>
    </div>
  );
}

export default App;
