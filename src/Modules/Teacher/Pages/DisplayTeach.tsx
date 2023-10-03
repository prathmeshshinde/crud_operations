import React, { useEffect, useState } from "react";
import Navbar from "../../Navbar/Navbar";
import { TeacherService } from "../Service/TeacherService";
import { ITeacher } from "../InterfaceTeacher/ITeacher";

interface IState {
  teachers: ITeacher[];
}

const DisplayTeach: React.FC = () => {
  const [teacher, setTeacher] = useState<IState>({ teachers: [] });

  const getAllTeach = () => {
    TeacherService.getAllTeachers()
      .then((res) => {
        setTeacher({ ...teacher, teachers: res.data });
      })
      .catch((err) => console.log(err));
  };

  const { teachers } = teacher;

  useEffect(() => {
    getAllTeach();
  }, []);

  return (
    <div>
      <Navbar title={"Teacher Manager"} />
      <div className="container mt-3">
        <div className="row">
          <div className="col">
            <p className="h2 text-success">Display Contact</p>
            <p className="fst-italic">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia
              quos accusamus, tempore molestias, quisquam facere, quam enim
              neque sit ea pariatur debitis possimus! Illo nemo quae pariatur
              necessitatibus commodi architecto blanditiis a? Accusantium
              libero, unde, modi non ipsa quos magni architecto quam obcaecati
              omnis illo iste rem cumque id et!
            </p>
          </div>
        </div>
        <div className="row">
          {teachers?.map((item, index) => {
            return (
              <div className="col-lg-3 mt-2 mb-2" key={index}>
                <div className="card h-100">
                  <div className="card-header">
                    <div className="card-title">Employee</div>
                  </div>
                  <div className="card-body">
                    <ul className="list-group">
                      <li className="list-group-item">
                        Name: {item.firstName} {item.lastName}
                      </li>
                      <li className="list-group-item">
                        Subject: {item.subject}
                      </li>
                    </ul>
                    <p className="h7">
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                      Placeat aliquam dolor, quo voluptatem rem quas qui ducimus
                      sed ex dignissimos itaque quam culpa vitae cum quos iusto
                      veniam odit repellendus.
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default DisplayTeach;
