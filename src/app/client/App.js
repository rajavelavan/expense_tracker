import { MainLayout } from "./styles/Layouts";
import Orb from './components/Orb/orb'
import Navigation from "./components/Navigation/Navigation";
import styled from "styled-components";
import bg from './img/bg.png';
import { useMemo, useState } from "react";
import Dashboard from "./components/Dashboard/Dashboard";
import Incomes from "./components/Incomes/Incomes";
import Expenses from "./components/Expenses/Expenses";
import { useGlobalContext } from "./context/globalContext";

function App() {
  const [active, setActive] = useState(1);
  const [profileActive,  setProfileActive] = useState(false);

  useGlobalContext();

  // const global = useGlobalContext();
  // console.log(global);

  const dissplayData = () => {
    switch (active) {
      case 1:
        return <Dashboard/>
      case 2:
        return <Incomes/> 
      case 3:
        return <Expenses/>
      default:
        return '';
    }
  }

  const orbMemo = useMemo(()=> {
    return <Orb/>
  },[])

  return (
    <AppStyled bg ={bg} className="App">
      {orbMemo}
      <MainLayout>
        <Navigation active={active} setActive={setActive} profileActive={profileActive} setProfileActive={setProfileActive}/>
        <main>
          {dissplayData()}
        </main>
      </MainLayout>
    </AppStyled>
  );
}

const AppStyled = styled.div`
  height: 100vh;
  background-image: url(${props=> props.bg});
  position: relative;
  main{
    flex: 1;
    background: rgba(252, 246, 249, 0.78);
    border: 3px solid #FFFFFF;
    border-radius: 32px;
    backdrop-filter: blur(4.5px);
    overflow-x: hidden;
    &::-webkit-scrollbar{
      width:0;
    }
  }
`;


  export default App; 