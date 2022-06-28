import './App.css';
import Pages from "./Pages/Pages"
import Category from "./Components/Category"
import Search from "./Components/Search"
import { Link } from "react-router-dom"
import styled from 'styled-components'
import {GiKnifeFork} from "react-icons/gi"

function App() {
  return (
    <div className="App">
    <Nav>
    <GiKnifeFork />
      <Logo to="/" >deliciousss</Logo>
    </Nav>
      <Search />
      <Category />
      <Pages />
    </div>
  );
}
const Logo=styled(Link)`
  text-decoration: none;
  font-size: 1.5rem;
  font-weight: 400;
  font-family: "Lobstar Two", cursive;
  cursor: pointer;
`
const Nav=styled.div`
  padding: 4rem 0;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  svg{
    font-size: 1.5rem;
  }
`
export default App;
