import { React, useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { useForm } from "react-hook-form";
// import { toast, ToastContainer } from "react-toastify";
import { levels, questions } from "./List";
import "../App.css";

export default function EditAdd() {
  const idSelectLevel = parseInt(useParams().id);//useParam: trả về obj 
  const {
    register,
    reset,
    handleSubmit,
    setValue,
    formState: { error }, //validate
  } = useForm({
    defaultValues: {},
  });//đăng ký useform

  const [isEdit, setIsEdit] = useState(true);
  const [data, setData] = useState(questions);
  const [indexSelectQuestion, setIndexSelectQuestion] = useState(0);
  const currentQuestion = data[indexSelectQuestion];

  //lay chi so trong mang cua level duoc chon
  const levelType =
    levels[levels.map((level) => level.id).indexOf(idSelectLevel)].type;

  //loc ra nhung cau hoi co idLevel bang voi idSelectLevel duoc truyen vao

  const questionOfType = data.filter(
    (question) => question.idLevel === idSelectLevel
  );

  //chi so cau hoi

  //khi click nut add
  const handleClickAdd = () => {
    setIsEdit(false);
    alert("Thêm mới câu hỏi")
    reset();
  };

  //ham khi click nut luu
  const onHandleSubmit = (formValues) => {
    setData(
      data.map((item, index) => {
        return index !== indexSelectQuestion
          ? item
          : {
              ...item,
              questionContent: formValues.questionContent,
              correctAnswer: formValues.correctAnswer,
              answers: [
                {
                  id: "A",
                  value: formValues.answerA,
                },
                {
                  id: "B",
                  value: formValues.answerB,
                },
                {
                  id: "C",
                  value: formValues.answerC,
                },
                {
                  id: "D",
                  value: formValues.answerD,
                },
              ],
            };
      })
    );
  };

  //ham khi click nut xoa

  const deleteQuestion = (indexQuestion) => {
    if (indexQuestion) {
      if (window.confirm("Bạn có thực sự muốn xóa?")) {
        setData((prev) => {
          alert("Xóa thành công !");
          return prev.map((question, index) => {
            return index !== indexQuestion ? question : prev.splice(index, 1);
          });
          
        });
        
      } else {
        alert("Xóa câu hỏi thất bại");
      }
    }
  };


  //khi indexSelectQuestion thay doi thi question cung thay doi theo, goi sau tat ca

  useEffect(() => {
    setValue("answerA", currentQuestion?.answers[0].value);
    setValue("answerB", currentQuestion?.answers[1].value);
    setValue("answerC", currentQuestion?.answers[2].value);
    setValue("answerD", currentQuestion?.answers[3].value);
    setValue("correctAnswer", currentQuestion?.correctAnswer);
    setValue("questionContent", currentQuestion?.questionContent);
  }, [indexSelectQuestion]);

  return (
    <>
   
      <div className="edit-create">
        {/* Phần Header */}
        <div
          className="header-edit border border-warning p-3 bg-white "
          id="header"
        >
          <div className="row">
            <div className="col-5">
              <Link
                to={`/detail/${idSelectLevel}`}
                className="text-decoration-none"
              >
                <button className="btn btn-primary rounded-pill me-2">
                  <i className="fas fa-angle-left"></i> Quay lại
                </button>
              </Link>
            </div>
            <div className="col-7">
              <p className="fw-bold fs-4">{levelType}</p>
            </div>
          </div>
        </div>

        {/* Body */}
        <div
          className="container-edit "
          style={{ paddingRight: 20, backgroundColor: "#d4bebc" }}
        >
          <div className="row">
            {/* Phần load danh sách câu hỏi */}
            <div className="col-2" style={{ marginTop: "95px" }}>
              {/* Load danh sách câu hỏi */}
              {questionOfType.map((question, index) => (
                <div className="item border border-1" key={index}>
                  <div
                    className="d-flex bd-highlight mb-2"
                    style={{ height: "120px" }}
                  >
                    <div
                      className="p-2 flex-shrink-1 bd-highlightn position-relative"
                      style={{ width: "30%" }}
                    >
                      <div className="position-absolute top-50 start-50 translate-middle">
                        <p>{index + 1}</p>
                        <button
                          style={{ width: "50px", border: "solid 1px" }}
                          onClick={() => deleteQuestion(index)}
                        >
                          <i className="far fa-trash-alt"></i>
                        </button>
                      </div>
                    </div>
                    <div
                      className="p-2 bd-highlight bg-white"
                      style={{ width: "70%" }}
                      onClick={() => {
                        setIsEdit(true);
                        setIndexSelectQuestion(
                          data
                            .map((question) => question)
                            .indexOf(questionOfType[index])
                        );
                      }}
                    ></div>
                  </div>
                </div>
              ))}

              {/* Nút tạo câu hỏi mới */}
              <div className="item border border-1" onClick={handleClickAdd}>
                <div
                  className="d-flex bd-highlight mb-2"
                  style={{ height: "120px" }}
                >
                  <div
                    className="p-2 flex-shrink-1 bd-highlight"
                    style={{ width: "30%" }}
                  ></div>
                  <div
                    className="p-2 bd-highlight bg-white d-flex align-items-center text-center position-relative"
                    style={{
                      width: "70%",
                      marginRight: "auto",
                      marginLeft: "auto",
                    }}
                  >
                    <div className="position-absolute top-50 start-50 translate-middle">
                      <i className="fas fa-plus"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Form chỉnh sửa câu hỏi */}
            <div className="col-10 bg-light p-3 " id="a">
              <form onSubmit={handleSubmit(onHandleSubmit)}>
                <label className="fw-bold">Câu hỏi: </label>
                <div className="form-floating p-3 bg-white border border-primary">
                  <textarea
                    className="form-control"
                    name="questionContent"
                    style={{
                      height: "150px",
                      backgroundColor: "#F4F6F6",
                      resize: "none",
                    }}
                    {...register("questionContent")}
                  ></textarea>
                </div>
                <label className="fw-bold mt-4">Các lựa chọn:</label>
                <div className="row">
                  {currentQuestion?.answers.map((answer) => (
                    <div className="form-floating col-6 mb-4" key={answer.id}>
                      <input
                        // id={`radio${answer.id}`}
                        className="form-check-input"
                        type="radio"
                        name="correctAnswer"
                        {...register("correctAnswer")}
                        value={answer.id}
                        //checked={}
                      />
                      <textarea
                        className="form-control border border-info"
                        style={{ height: "95px", resize: "none" }}
                        {...register(`answer${answer.id}`)}
                      ></textarea>
                    </div>
                  ))}
                </div>
                <button
                  onSubmit={onHandleSubmit}
                  type="submit"
                  className="btn btn-info rounded-pill"
                  style={{ width: "100px" }}
                >
                  <i className="far fa-save"></i> Lưu
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
