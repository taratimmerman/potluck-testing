import React, { useState } from "react";
import styled from "styled-components";

function FoodList(props) {
  const [beverage, setBeverage] = useState("");
  const [food, setFood] = useState("");
  const logName = () => {
    console.log(beverage);
    console.log(food);
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    alert(`Items Submitted 👌 `);
  };

  const handleBeverageInput = (evt) => {
    setBeverage(evt.target.value);
  };
  const handleFoodInput = (evt) => {
    setFood(evt.target.value);
  };

  return (
    <FoodListDiv>
      <H1>Food List</H1>
      <form onSubmit={handleSubmit}>
        <FoodLabel>
          <label htmlFor="food">
            <H3>Add Food:</H3>
            <input
              name="food"
              placeholder="Food"
              value={food}
              onChange={handleFoodInput}
            />
          </label>
        </FoodLabel>
        <BeverageLabel>
          <label htmlFor="beverage">
            <H3> Add Beverage:</H3>
            <input
              name="beverage"
              placeholder="Beverage"
              value={beverage}
              onChange={handleBeverageInput}
            />
          </label>
        </BeverageLabel>
        <SubmitDiv>
          <Button onClick={logName}>Submit</Button>
        </SubmitDiv>
      </form>
      <ReturnDiv>
        <h3>Items You're Bringing:🍴</h3>
        <p>{food}</p>
        <p>{beverage}</p>
      </ReturnDiv>
    </FoodListDiv>
  );
}



// Styled Components
const FoodListDiv = styled.div`
  background-color: #00af91;
  padding: 7px 70px;
  justify-cont
`;

const FoodLabel = styled.div`
  text-align: center;
  margin: 10px auto;
  font-size: 1.3 rem;
`;

const BeverageLabel = styled.div`
  text-align: center;
  margin 10px auto;
  font-size: 1.3 rem;
  
`;
const SubmitDiv = styled.div`
text-align: center;
margin 10px auto;
`;

const ReturnDiv = styled.div`
  color: #ffcc29;
  text-align: center;
`;

const Button = styled.button`
  font-family: sans-serif;
  font-size: 1.3 rem;
  padding: 7px 70px;
  margin-top: 10px;
  background: #F58634;
  border-radius: 5px ;
  color: #FFF;
  &: hover {
    color: #ffcc29;
`;

const H1 = styled.h1`
  color: #ffcc29;
  text-align: center;
`;

const H3 = styled.h3`
  color: #ffcc29;
`;

export default FoodList;
