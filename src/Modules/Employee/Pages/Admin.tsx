import React, { useEffect, useState } from "react";
import Navbar from "../../Navbar/Navbar";
import { Link } from "react-router-dom";
import { IEmployee } from "../Interface/IEmployee";
import { EmployeeServices } from "../Service/EmployeeServices";

interface IState {
  employees: IEmployee[];
}

const Admin: React.FC = () => {
  const [employee, setEmployee] = useState<IState>({ employees: [] });

  const getData = () => {
    EmployeeServices.getAllEmployee()
      .then((res) => {
        setEmployee({ ...employee, employees: res.data });
      })
      .catch((err) => console.log(err));
  };

  const deleteEmp = (id: number) => {
    EmployeeServices.deleteEmployee(id)
      .then((res) => console.log("Deleted Employee Successfully", res))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getData();
  }, [employee]);

  const { employees } = employee;
  return (
    <div>
      <Navbar title={"Employee Manager"} />
      <div className="container mt-3">
        <div className="row">
          <div className="col">
            <p className="h3">Admin Page</p>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id
              aliquid, aut quos recusandae earum dicta nobis velit, repudiandae
              repellat fugiat in corrupti quas vitae. Provident, necessitatibus
              recusandae dolore doloremque modi perferendis expedita placeat
              nostrum cumque? Amet odio molestiae illo asperiores consectetur
              ea, sunt consequuntur blanditiis qui. Ab dolore optio aspernatur
              ut provident accusamus eum. Aut quod odio fugiat animi atque
              sapiente mollitia voluptatibus at ratione numquam unde omnis
              maiores porro nulla exercitationem consectetur voluptatem, nihil
              veniam id amet eaque magnam qui tempore enim. Nesciunt magnam
              consectetur qui, doloremque, quae rerum rem expedita minima quos
              est dignissimos magni aspernatur modi. Veniam doloremque ipsam eos
              illum distinctio? Dicta, expedita quibusdam voluptatem eveniet
              consequatur quo debitis accusantium iusto sint tempore eaque ea?
              Voluptatibus iusto omnis facere tenetur harum, cumque quis officia
              exercitationem molestiae neque error cupiditate deleniti, labore
              nulla, non alias nesciunt corporis. Quidem nostrum reprehenderit
              corrupti magni saepe pariatur quam officia sint deleniti ex ab
              omnis quos, corporis amet laudantium mollitia doloremque fugit
              tempore dolore atque animi sed expedita placeat et. Illum, illo!
              Voluptatum consequatur, inventore quod possimus asperiores fuga
              error velit ratione obcaecati fugit soluta dolore a molestiae sit
              ducimus atque similique. Vitae quod ut earum voluptas magnam! Qui,
              maiores minima.
            </p>
            <Link to="/add" className="btn btn-success mt-3">
              + New
            </Link>
          </div>
        </div>
      </div>

      <div className="container mt-3">
        <div className="row">
          <div className="col">
            <table className="table table-dark table-striped">
              <thead>
                <tr>
                  <th>Sr. No</th>
                  <th>FirstName</th>
                  <th>LastName</th>
                  <th>Email</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody id="contact-table-body">
                {employees?.map((item, index) => {
                  return (
                    <tr key={index}>
                      <td>{index + 1}</td>
                      <td>{item.firstName}</td>
                      <td>{item.lastName}</td>
                      <td>{item.emailId}</td>
                      <td>
                        <Link to={`/update/${item.id}`}>
                          <button className="btn btn-primary m-2">
                            Update
                          </button>
                        </Link>

                        <button
                          className="btn btn-warning"
                          onClick={() => deleteEmp(Number(item.id))}
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admin;
