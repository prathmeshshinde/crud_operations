import React, { useEffect, useState } from "react";
import Navbar from "../../Navbar/Navbar";
import { useNavigate, useParams } from "react-router-dom";
import { InterfaceEngi } from "../InterfaceEngineer/InterfaceEngi";
import { EngineerService } from "../Service/EngineerService";
import { Link } from "react-router-dom";

interface IState {
  engineers: InterfaceEngi;
}

const UpdateEngi: React.FC = () => {
  const [updateEngineer, setUpdateEngineer] = useState<IState>({
    // engineers: {
    //   firstName: "",
    //   lastName: "",
    //   emailId: "",
    // },
    engineers: {
      firstName: "",
      lastName: "",
      emailId: "",
    },
  });

  const { id } = useParams();
  const convertNum = Number(id);
  const navigate = useNavigate();

  const getEngineer = (id: number) => {
    EngineerService.getOneEngineer(id)
      .then((res) => {
        setUpdateEngineer({ ...updateEngineer, engineers: res.data });
      })
      .catch((err) => console.log(err));
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUpdateEngineer({
      ...updateEngineer,
      engineers: {
        ...engineers,
        [e.target.name]: e.target.value,
      },
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    EngineerService.updateEngineer(convertNum, engineers)
      .then((res) => {
        if (res && res.data) {
          navigate("/adminengi");
        }
      })
      .catch((err) => console.log(err));
  };

  const { engineers } = updateEngineer;

  useEffect(() => {
    getEngineer(convertNum);
  }, []);

  return (
    <div>
      <Navbar title="Engineer Manager" />
      <div className="container mt-3">
        <div className="row">
          <div className="col">
            <p className="h3 text-success">Update Teacher</p>
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
                  value={engineers.firstName}
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
                  value={engineers.lastName}
                />
              </div>
              <div className="mb-2">
                <input
                  className="form-control"
                  id="name-input"
                  placeholder="Subject"
                  required
                  type="text"
                  name="emailId"
                  onChange={(e) => handleChange(e)}
                  value={engineers.emailId}
                />
              </div>
              <div className="mb-2">
                <input
                  className="btn btn-success"
                  type="submit"
                  value="Update"
                />

                <Link to="/displayengi" className="btn btn-dark m-3">
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

export default UpdateEngi;
