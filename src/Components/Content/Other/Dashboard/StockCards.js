import axios from 'axios';
import React, { useState, useEffect } from 'react'

const StockCards = () => {
  const [stocks, setStocks] = useState([]);
  const [filter, setFilter] = useState("gainers");
  const API_KEY = process.env.FINNHUB_API_KEY_REACT_APP;
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false)
  const [isDOpen, setIsDOpen] = useState(false);
  const fetchStockData = async ()=>{
    try {
      const response = await axios.get(
        `https://finnhub.io/api/v1/stock/market/list?exchange=US&token=${API_KEY}`
      );
      setStocks(response.data);
      setLoading(false)
    } catch (error) {
      setError(true);
      console.error("Error in StockCards", error);
    }
  }
  if (loading) return <div>Loading..</div>
  if (error) return <div>Error</div>

  useEffect(() => {
    fetchStockData();

    const interval = setInterval(fetchStockData, 6000);
    return () => clearInterval(interval);
  }, []);

  const filteredStocks = stocks.filter((stock)=>{
    if(filter === 'gainers') return stock.changePercent > 0;
    if(filter === 'losers') return stock.changePercent < 0;
    if(filter === 'trending') return stock.volume > 1000000;
    return stock;
  })

  

  return (
    <div className='s-c-c'>
      <h4 className="s-c-c-h">Stock Market OverView</h4>
      <div className="dropdown">
      <button className="dropbtn" onClick={() => setIsDOpen(!isDOpen)}>
        Options ▼
      </button>
      {open && (
        <div className="dropdown-content">
          <button onClick={() => alert("Profile Clicked")}>Profile</button>
          <button onClick={() => alert("Settings Clicked")}>Settings</button>
          <button className="logout" onClick={() => alert("Logout Clicked")}>
            Logout
          </button>
        </div>
      )}
    </div>
      
    </div>
  )
}

export default StockCards
