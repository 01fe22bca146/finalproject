import Footer from "./components/footer"
import Header from "./components/header"
import HomeScreen from "./screens/homescreen"
import ProductDetails from './screens/productdetails'
import "./App.css";
import { Container } from "react-bootstrap";
import { BrowserRouter as Router, Route } from 'react-router-dom'
import CartScreen from "./screens/CartScreen";
import LoginScreen from "./screens/LoginScreen";
import RegisterScreen from "./screens/RegisterScreen";
import ProfileScreen from "./screens/ProfileScreen";
import ShippingScreen from "./screens/ShippingScreen";
const App = () => {
  return (
    <Router>
      <Header />
      <main>
        <Container>
        <Route path="/login" component={LoginScreen} />
        <Route path="/register" component={RegisterScreen}/>
        <Route path="/profile" Component={ProfileScreen}exact/>
        <Route path="/shipping" Component={ShippingScreen}/>
        <Route path="/cart/:id?" component={CartScreen} />
          <Route path="/product/:id" component={ProductDetails} />
          <Route path="/" component={HomeScreen} exact />
        </Container>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
