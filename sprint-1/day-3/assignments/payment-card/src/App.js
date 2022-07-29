import './App.css';
import PaymentCard from './components/PaymentCard';

function App() {
  return (
    <div className="App">
      <PaymentCard date="28/10/2020" heading="Case Study" subHeading="Amazon Gift Pay" device="Desktop - Mobile" logo="https://www.askgalore.com/wp-content/uploads/2020/08/amazon-icon-amazon-logo-png-icon.png" color="#FFA500"/>

      <br/><br/>

      <PaymentCard date="17 Sep 2020" heading="Case Study" subHeading="Apple Gift Payment" device="MacOS - Mobile" logo="https://logolook.net/wp-content/uploads/2021/06/Apple-Logo.svg" color="#F5F5F5"/>
    </div>
  );
}

export default App;
