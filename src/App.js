import React from 'react';
import './style.css';

export default function App() {
  return (
    <div>
      <h1>Just A Test with React</h1>
      <p>lorem</p>

      <>
        const sideLength = "200px"; 
  
        <img 
            src="./../images/football.com" 
            alt="football"
            role="Image of a ball"  
            height={sideLength} 
            width={sideLength} />

        <h1>Liste de la Team</h1>
        <p>Cette liste a pour but de lister les jouers de cette ligue des champions.</p>
          <ul>
            <li>GoalKepper: Casillas</li>
            <li>Defenseur central droit: Sergio Ramos</li>
            <li>Defenseur central gauche: Carles Pyol</li>
            <li>Defenseur droit: Daniel Alves</li>
            <li>Defenseur gauche: Michel Doa</li>
            <li>Midfieldeur ralayeur droit: Andres Iniesta</li> 
            <li>Midfieldeur ralayeur gauche: Xavi</li> 
            <li>Midfieldeur central: Sergio Busquet</li> 
            <li>Midfieldeur offensif: Lionel Messi</li>
            <li>Attaquant: C.ronaldo</li>
          </ul>  
      </>
    </div>
    
  );
}
