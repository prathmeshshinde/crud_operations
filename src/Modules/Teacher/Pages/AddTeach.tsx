import React, { useState } from "react";
import Navbar from "../../Navbar/Navbar";
import { Link, useNavigate } from "react-router-dom";
import { ITeacher } from "../InterfaceTeacher/ITeacher";
import { TeacherService } from "../Service/TeacherService";

const AddTeach: React.FC = () => {
  const [teacherChange, setTeacherChange] = useState<ITeacher>({
    firstName: "",
    lastName: "",
    subject: "",
  });

  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTeacherChange({ ...teacherChange, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    TeacherService.createTeacher(teacherChange)
      .then((res) => {
        if (res && res.data) {
          navigate("/adminteach");
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <Navbar title={"Teacher Manager"} />
      <div className="container mt-3">
        <div className="row">
          <div className="col">
            <p className="h3 text-success">Add Teacher</p>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos
              culpa officiis, illo dolore doloremque quasi quia quae eius
              aperiam et voluptas, accusantium dicta iste aliquid? Praesentium
              iure itaque, aut accusantium dolorum ad voluptas voluptate ea iste
              harum facere temporibus! Soluta neque incidunt expedita commodi?
              Id porro facilis, at soluta, aliquam fugiat maxime voluptatem
              accusantium consectetur esse sit quas modi ea, ratione minima
              deserunt veritatis facere natus labore debitis? Maxime animi vel
              ex totam odit consequuntur officiis tempora, dolor error ducimus
              cupiditate magnam atque ipsam ea optio! Laborum, in quo tenetur,
              rem illo, temporibus at dolores rerum a dolorum consequuntur
              exercitationem.
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-4">
            <form id="add-contact-form" onSubmit={(e) => handleSubmit(e)}>
              <div className="mb-2">
                <input
                  className="form-control"
                  id="name-input"
                  placeholder="First Name"
                  required
                  type="text"
                  name="firstName"
                  onChange={(e) => handleChange(e)}
                />
              </div>
              <div className="mb-2">
                <input
                  className="form-control"
                  id="name-input"
                  placeholder="Last Name"
                  required
                  type="text"
                  name="lastName"
                  onChange={(e) => handleChange(e)}
                />
              </div>
              <div className="mb-2">
                <input
                  className="form-control"
                  id="name-input"
                  placeholder="Subject"
                  required
                  type="text"
                  name="subject"
                  onChange={(e) => handleChange(e)}
                />
              </div>
              <div className="mb-2">
                <input
                  className="btn btn-success"
                  type="submit"
                  value="Create"
                />

                <Link to="/displayteach" className="btn btn-dark m-3">
                  Cancel
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddTeach;
