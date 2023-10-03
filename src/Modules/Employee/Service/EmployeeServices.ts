import axios from "axios";
import { IEmployee } from "../Interface/IEmployee";

export class EmployeeServices {
  private static serverUrl = "http://3.110.193.86:4444";

  public static getAllEmployee = (): Promise<{ data: IEmployee[] }> => {
    const dataUrl = `${this.serverUrl}/employee/employees`;
    return axios.get(dataUrl);
  };

  public static createEmployee = (
    employee: IEmployee
  ): Promise<{ data: IEmployee }> => {
    const dataUrl = `${this.serverUrl}/employee/`;
    return axios.post(dataUrl, employee);
  };

  public static getEmployee = (id: number): Promise<{ data: IEmployee }> => {
    const dataUrl = `${this.serverUrl}/employee/id/${id}`;
    return axios.get(dataUrl);
  };

  public static updateEmployee = (
    id: number,
    employee: IEmployee
  ): Promise<{ data: IEmployee }> => {
    const dataUrl = `${this.serverUrl}/employee/id/${id}`;
    return axios.put(dataUrl, employee);
  };

  public static deleteEmployee = (id: number) => {
    const dataUrl = `${this.serverUrl}/employee/id/${id}`;
    return axios.delete(dataUrl);
  };
}
