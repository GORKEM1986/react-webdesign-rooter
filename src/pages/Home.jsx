import React from 'react'
import { Outlet } from 'react-router-dom';
import Card from '../components/Card';
import data from '../data/data';

const Home = () => {
  return (
    <div>
      {/* <section>
        <div className="section-left">
        <p>Subscribe To Our Newsletter</p>
        </div>


        <div className="section-right">
          <input
            className="section-input"
            type="email"
            name="email"
            id="email"
            placeholder="Enter Email..."
          />
          <input
            className="section-input"
            type="submit"
            id="submit"
            defaultValue="Subscribe"
          />
        </div>
      </section> */}

      <div className="footer-top">
       {data.map((item)=>{
        return <Card key={item.id} item={item}/>
       }) }
      </div>
      <Outlet/>
    </div>
  )
}

export default Home;