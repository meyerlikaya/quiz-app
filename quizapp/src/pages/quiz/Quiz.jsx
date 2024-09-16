import React, { useEffect, useState } from "react";
import * as api from '../../api/api';
import { useParams } from "react-router-dom";
import "./Quiz.css";

const Quiz = () => {
  const { difficulty, amount } = useParams();
  const [questionsData, setQuestionsData] = useState([]);
  useEffect(() => {
    const getData = async() => {
      const data = await api.fetchQuizData(difficulty, amount);
      setQuestionsData(data);
    }
    getData();
  }, [])

  console.log(questionsData)
  
  return (
    <div className="quiz">
      {difficulty} - {amount}
    </div>
  );
};

export default Quiz;
