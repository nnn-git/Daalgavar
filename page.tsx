"use client";
import { Input } from "antd-mobile";
import { useState } from "react";
import { useEffect } from "react";
export function Dasgal() {
  const [numbers, setNumbers] = useState<number[]>([0, 0, 0, 0]);
  const [score, setScore] = useState(0);
  const [userInput, setUserInput] = useState("");

  useEffect(()=> {
    Randomnumber();
  }, []);
  const Randomnumber = () => {
    const randoms = Array.from({ length: 4 }, () =>
      Math.floor(Math.random() * 10) + 1
    );
    setNumbers(randoms);
    setUserInput(""); 
  };

  const CheckAnswer = () => {
    const correctSum = numbers.reduce((acc, val) => acc + val, 0);
    if (parseInt(userInput) === correctSum) {
      alert("ЗӨВ!")
      setScore(prevScore => prevScore + 1);
      Randomnumber();
    } else {
      alert("Буруу ! Зөв хариу" +correctSum )
      Randomnumber();
    }
  };

  return (
    <>
      
      <div
        style={{
          backgroundColor: "#8c8c8c",
          padding: "30px",
          textAlign: "left",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <h1 style={{ color: "white", margin: 0, fontSize: "30px" }}>
          SUM PLAY
        </h1>
       
        <h1 style={{ color: "white", margin: 0, fontSize: "36px" }}>{score}</h1>
        
      </div>

      
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(2,1fr)",
          gridTemplateRows: "repeat(3, 1fr)",
          height: "90vh",
          backgroundColor: "#00004d",
        }}
      >
        {numbers.map((num, i) => (
          <div
            key={i}
            style={{
              backgroundColor: ["#ff4da6", "#ffff00", "#00ffff", "#8080ff"][i],
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <h1 style={{ color: "black", fontSize: "60px" }}>{num}</h1>
          </div>
        ))}

       
        <div
          style={{
            backgroundColor: "#999999",
            display: "grid",
            gridTemplateRows: "repeat(2, 1fr)",
          }}
        >
          <div style={{ padding: 48 }}>
            <p style={{ fontSize: "30px" }}>Sum</p>
          </div>
          <div style={{ padding: 40, backgroundColor: "#8080ff" }}>
            <button
              onClick={CheckAnswer}
              style={{ backgroundColor: "#f7f7f7", width: "100%", height: "100%" }}
            >
              Check
            </button>
          </div>
        </div>

      
        <div
          style={{
            backgroundColor: "#999999",
            display: "grid",
            gridTemplateRows: "repeat(2, 1fr)",
          }}
        >
          <div style={{ padding: 58 }}>
            <Input
              placeholder=""
              value={userInput}
              onChange={(val) => setUserInput(val)}
              style={{ backgroundColor: "white", width:"100%", height:"50%", }}
              type="number"
            />
          </div>
          <div style={{ padding: 40, backgroundColor: "#8080ff" }}>
            <button
              onClick={Randomnumber}
              style={{ backgroundColor: "#f7f7f7", width: "100%", height: "100%" }}
            >
              Reset
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Dasgal;
