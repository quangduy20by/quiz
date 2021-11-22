import React from "react";
import { Link } from "react-router-dom";

const levels = [
  {
    id: 1,
    type: "Câu hỏi dễ",
  },
  {
    id: 2,
    type: "Câu hỏi khó",
  },
];

const questions = [
  {
    id: 1,
    idLevel: 1,
    questionContent: "Con gà có mấy chân",
    answers: [
      {
        id: "A",
        value: "1 chân",
      },
      {
        id: "B",
        value: "2 chân",
      },
      {
        id: "C",
        value: "3 chân",
      },
      {
        id: "D",
        value: "4 chân",
      },
    ],
    correctAnswer: "B",
  },
  {
    id: 2,
    idLevel: 2,
    questionContent: "1 + 3 bằng mấy?",
    answers: [
      {
        id: "A",
        value: "1",
      },
      {
        id: "B",
        value: "2",
      },
      {
        id: "C",
        value: "3",
      },
      {
        id: "D",
        value: "4",
      },
    ],
    correctAnswer: "D",
  },
  {
    id: 3,
    idLevel: 1,
    questionContent: "9 - 6 bằng mấy?",
    answers: [
      {
        id: "A",
        value: "1",
      },
      {
        id: "B",
        value: "2",
      },
      {
        id: "C",
        value: "3",
      },
      {
        id: "D",
        value: "4",
      },
    ],
    correctAnswer: "C",
  },
  {
    id: 4,
    idLevel: 1,
    questionContent: "10 : 10 bằng mấy?",
    answers: [
      {
        id: "A",
        value: "10",
      },
      {
        id: "B",
        value: "1",
      },
      {
        id: "C",
        value: "13",
      },
      {
        id: "D",
        value: "4",
      },
    ],
    correctAnswer: "A",
  },
];

export { questions, levels };

export default function List() {
  return (
    <div>
      <div className="container bg-info mt-5">
        <div className="input-group d-flex justify-content-end">
          <div className="input-group-append p-3   mr-4">
            <button
              className="btn btn-outline bg-white rounded  border-secondary dropdown-toggle"
              type="button"
              data-toggle="dropdown"
              aria-expanded="false"
            >
              Lớp
            </button>
            <div className="dropdown-menu">
              <a className="dropdown-item" href="/#">
                Action
              </a>
            </div>
          </div>
          <div className="input-group-append p-3   mr-4">
            <button
              className="btn btn-outline bg-white rounded  text-left border-secondary dropdown-toggle"
              type="button"
              data-toggle="dropdown"
              aria-expanded="false"
            >
              Môn
            </button>
            <div className="dropdown-menu">
              <a className="dropdown-item" href="/#">
                Action
              </a>
            </div>
          </div>
          <div className="input-group-append p-3   mr-4">
            <button
              className="btn btn-primary rounded pl-3 pr-3  border-secondary "
              type="button"
              aria-expanded="false"
            >
              <i className="fas fa-plus mr-2"></i>Tạo
            </button>
          </div>
        </div>
      </div>
      <div className="fs-5 text-center " style={{ marginTop: "60px" }}>
        {levels.map((item) => (
          <div className="item-levels row bg-light mb-3 d-flex align-content-center border"
          style={{height: "50px"}}
          key={item.id}>
            <Link to ={`/todo/${item.id}`}>
              <div className="col">{item.type}</div>
            </Link>
            <div className="col">
                {questions.filter((x) => x.idLevel === item.id).length}
                  câu hỏi
            </div>
            </div>
        ))}
      </div>
    </div>
  );
}
