import React, { useEffect, useState } from "react";
import Navbar from "../../Navbar/Navbar";
import { useNavigate, useParams } from "react-router-dom";
import { IEmployee } from "../Interface/IEmployee";
import { EmployeeServices } from "../Service/EmployeeServices";
import { Link } from "react-router-dom";

interface IState {
  employee: IEmployee;
}

const Update: React.FC = () => {
  const [emp, setEmp] = useState<IState>({
    employee: { firstName: "", lastName: "", emailId: "" } as IEmployee,
  });

  const { id } = useParams();
  const navigate = useNavigate();
  const { employee } = emp;
  const convertNum = Number(id);

  const getEmp = (id: number) => {
    EmployeeServices.getEmployee(id)
      .then((res) => setEmp({ ...emp, employee: res.data }))
      .catch((err) => console.log(err));
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmp({
      ...emp,
      employee: { ...employee, [e.target.name]: e.target.value },
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    EmployeeServices.updateEmployee(convertNum, employee)
      .then((res) => {
        if (res && res.data) {
          navigate("/admin");
        }
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    if (id) {
      getEmp(convertNum);
    }
  }, []);

  return (
    <div>
      <Navbar title={"Employee Manager"} />
      <div className="container mt-3">
        <div className="row">
          <div className="col">
            <p className="h3 text-success">Add Contact</p>
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
                  value={employee.firstName}
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
                  value={employee.lastName}
                />
              </div>
              <div className="mb-2">
                <input
                  className="form-control"
                  id="name-input"
                  placeholder="Email ID"
                  required
                  type="text"
                  name="emailId"
                  onChange={(e) => handleChange(e)}
                  value={employee.emailId}
                />
              </div>
              <div className="mb-2">
                <input
                  className="btn btn-success"
                  type="submit"
                  value="Update"
                />
                <Link to="/display" className="btn btn-dark m-3">
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

export default Update;
