import  ReactDOM  from "react-dom/client";
import './index.css';
import './app.css';
import { App } from './App';
import { Star } from "./components/Star";
const divRoot = document.getElementById('root');

const reactRoot = ReactDOM.createRoot(divRoot);

reactRoot.render(

    <div className="">
        <div>

                <div className="star1 absolute ml-[300px] mt-[240px]">
                    <Star />
                </div>
                <div className="star2 absolute ml-[1200px] mt-[240px]">
                    <Star />
                </div> 
        </div>
        <App />
        
    </div>


);