import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import Card from './Components/Card/Card';
import Header from './Components/Header/Header';
import SelectBar from './Components/SelectBar/SelectBar';
import { fecthCovidData, selectData, selectStatus } from './Redux/covidSlice';
import { useEffect } from 'react';
import Graphic from './Components/Graphic/Graphic';

function App() {
  const dispacth = useDispatch()
  const data = useSelector(selectData)
  const status = useSelector(selectStatus)

  useEffect(() => {

    if (status === "idle") {
      dispacth(fecthCovidData())
    }
    else if (status === "succes") {
      console.log("datasucces")
    }
    else {
      console.log("error")
    }
  }, [dispacth, status])
  console.log(data)
  return (
    <div className="App">
      <Header />
      {status === "succes" ? <div>
        <Card data={data} />
        <SelectBar data={data} />
        <Graphic data={data}/>
      </div>
        : "LOADİNG"}
    </div>
  );
}

export default App;
