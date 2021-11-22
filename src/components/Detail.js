import React from "react";
import { useParams } from "react-router-dom";
import { questions, levels } from "./List";
import { Link } from "react-router-dom";
export default function Detail() {
  const level = parseInt(useParams().id);
  console.log(levels[level]);

  const question = questions.filter((x) => x.idLevel === level);
  console.log(question);

  return (
    <div className="container p-3  bg-warning">
      <div className="row">
        <div className="col-md-8 p-3">
          {question.map((que, index) => (
            <div className="bg-white p-3  mb-4 " key={que.id}>
              <h3>Câu hỏi số: {index + 1}</h3>
              <h4 className="mb-4">{que.questionContent}</h4>

              {que.answers.map((ans) => (
                <button
                  className="btn btn-outline-info ml-3 pr-5 "
                  key={ans.id}
                >
                  {ans.id} <span>: </span>
                  <span>{ans.value}</span>
                </button>
              ))}
              <p className="mt-3">Đáp án đúng là</p>
              {que.answers.map((ans) => (
                <button
                  className="btn btn-outline-info ml-3 pr-5 mb-3"
                  key={ans.id}
                  style={
                    que.correctAnswer === ans.id
                      ? { backgroundColor: "info", color: "red" }
                      : {}
                  }
                >
                  {ans.id} <span>:</span>
                  <span>{ans.value}</span>
                </button>
              ))}
            </div>
          ))}
        </div>
        <div className="col-md-4 p-3 mt-3 bg-white">
          <div className="border border-info rounded mb-4 ">
            <p className="p-5 text-info font-weight-bold text-center">
              <span>
                <i className="fas fa-edit"></i>
              </span>
              {levels[levels.map((e) => e.id).indexOf(level)].type}
            </p>
          </div>

          <ul className="list-group d-flex justify-content-between flex-row flex-wrap mh-200">
            <li className="list-group-item w-50 border-0 p-0">
              <span>
                <i className="fas fa-list mr-2"></i>
              </span>
              {levels.length + 1} Câu hỏi
            </li>
            <li className="list-group-item w-50 border-0 p-0">
              <span>
                <i className="fas fa-list mr-2"></i>
              </span>{" "}
              Lớp 3
            </li>
            <li className="list-group-item w-50 border-0 p-0">
              <span>
                <i className="fas fa-list mr-2"></i>
              </span>{" "}
              Tuần tự
            </li>
            <li className="list-group-item w-50 border-0 p-0">
              <span>
                <i className="fas fa-list mr-2"></i>
              </span>{" "}
              Toán học
            </li>
          </ul>
          <hr></hr>
          <div className="d-flex justify-content-between">
            <Link to={`/edit/${level}`}>
              <button className="btn btn-secondary">Chỉnh sửa</button>
            </Link>

            <button className="btn btn-info">Xem trước</button>
          </div>
        </div>
      </div>
    </div>
  );
}
