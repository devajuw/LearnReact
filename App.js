
import ReactDOM from 'react-dom/client';

const Header = () => {
  return (
    <div className="header">
        <div className='logo-container'>
      <img className="logo" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdYOTc3ZXQsg6ZEzV2O6GPgMcCByuuWMo57g&s"></img>
    </div>
    <div className="nav-items">
        <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
            <li>Cart</li>
        </ul>
    </div>
    </div>
  );
};
const RestaurantCard = () => {
  return (
    <div className='res-card'>
        <img className='res-logo' src="https://static.toiimg.com/thumb/53314156.cms?imgsize=1762111&width=800&height=800" alt="khana-photu" />
        <h3>Salimaar</h3>
        <h4>Chhola Bhatura</h4>
        <h4>4.5 stars</h4>
        <h4>30mins</h4>
    </div>
  );
};

const Body = () => {
  return (
    <div className='body'>
        <div className='search'>Search
        </div>
        <div className='res-container'>
         <RestaurantCard/>
         <RestaurantCard/>
         <RestaurantCard/>
         <RestaurantCard/>
         <RestaurantCard/>
         <RestaurantCard/>
         <RestaurantCard/>
         <RestaurantCard/>
         <RestaurantCard/>
         <RestaurantCard/>
         <RestaurantCard/>
         <RestaurantCard/>  
        </div>
    </div>
  );
};
const AppLayout = () => {
  return (
    <div className='app'>
        <Header/>
        <Body/>
       
    </div>
  );
};




























const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<AppLayout/>);