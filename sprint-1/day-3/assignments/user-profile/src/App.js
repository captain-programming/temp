import './App.css';
import UserProfile from './componets/UserProfile';

function App() {

  const userInfo = {
    name: "Dinesh Karde",
    avatar_url: "https://www.pixsy.com/wp-content/uploads/2021/04/ben-sweet-2LowviVHZ-E-unsplash-1.jpeg",
    title: "Software Engineer",
    skillsets: [
      {
        icon: "https://w7.pngwing.com/pngs/452/495/png-transparent-react-javascript-angularjs-ionic-github-text-logo-symmetry.png",
        description: "React"
      },
      {
        icon: "https://cdn.nextptr.com/images/tagimages/javascript_logo.png",
        description: "JavaScript"
      },
      {
        icon: "https://w1.pngwing.com/pngs/885/534/png-transparent-green-grass-nodejs-javascript-react-mean-angularjs-logo-symbol.png",
        description: "Node JS"
      },
      {
        icon: "https://symbols.getvecta.com/stencil_28/61_sql-database-generic.90b41636a8.svg",
        description: "SQL"
      },
      {
        icon: "https://1000logos.net/wp-content/uploads/2020/08/MongoDB-Logo-500x313.png",
        description: "MangoDB"
      },
      {
        icon: "https://miro.medium.com/max/768/1*0j4xd4B_o-jxiaM9QYqgWw.png",
        description: "React Hooks"
      },
      {
        icon: "https://res.cloudinary.com/practicaldev/image/fetch/s--RZLh7X6w--/c_imagga_scale,f_auto,fl_progressive,h_1080,q_auto,w_1080/https://thepracticaldev.s3.amazonaws.com/i/ohddnl42wgpfoi1g8lz9.png",
        description: "Reaxt Native"
      },
    ]
  }
  return (
    <div className="App">
      <UserProfile userInfo={userInfo}/>
    </div>
  );
}

export default App;
