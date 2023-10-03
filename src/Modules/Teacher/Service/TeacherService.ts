import axios from "axios";
import { ITeacher } from "../InterfaceTeacher/ITeacher";

export class TeacherService {
  private static serverUrl = "http://3.110.193.86:4444";

  public static getAllTeachers = (): Promise<{ data: ITeacher[] }> => {
    const dataUrl = `${this.serverUrl}/teacher/getall/`;
    return axios.get(dataUrl);
  };

  public static createTeacher = (
    teacherData: ITeacher
  ): Promise<{ data: ITeacher }> => {
    const dataUrl = `${this.serverUrl}/teacher/save`;
    return axios.post(dataUrl, teacherData);
  };

  public static getOneTeacher = (id: number): Promise<{ data: ITeacher }> => {
    const dataUrl = `${this.serverUrl}/teacher/id/${id}`;
    return axios.get(dataUrl);
  };

  public static updateTeacher = (
    id: number,
    teacherData: ITeacher
  ): Promise<{ data: ITeacher }> => {
    const dataUrl = `${this.serverUrl}/teacher/update`;
    return axios.put(dataUrl, teacherData);
  };

  public static deleteTeacher = (id: number) => {
    const dataUrl = `${this.serverUrl}/teacher/delete/${id}`;
    return axios.delete(dataUrl);
  };
}
