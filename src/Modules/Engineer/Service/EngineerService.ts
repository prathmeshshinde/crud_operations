import axios from "axios";
import { InterfaceEngi } from "../InterfaceEngineer/InterfaceEngi";

export class EngineerService {
  private static serverUrl = "http://3.110.193.86:4444";

  public static getAllEngineer = (): Promise<{ data: InterfaceEngi[] }> => {
    const dataUrl = `${this.serverUrl}/engineer`;
    return axios.get(dataUrl);
  };

  public static createEngineer = (
    engineer: InterfaceEngi
  ): Promise<{ data: InterfaceEngi }> => {
    const dataUrl = `${this.serverUrl}/engineer`;
    return axios.post(dataUrl, engineer);
  };

  public static getOneEngineer = (id: number) => {
    const dataUrl = `${this.serverUrl}/engineer/${id}`;
    return axios.get(dataUrl);
  };

  public static updateEngineer = (
    id: number,
    engineer: InterfaceEngi
  ): Promise<{ data: InterfaceEngi }> => {
    const dataUrl = `${this.serverUrl}/engineer/${id}`;
    return axios.put(dataUrl, engineer);
  };

  public static deleteEngineer = (id: number) => {
    const dataUrl = `${this.serverUrl}/engineer/${id}`;
    return axios.delete(dataUrl);
  };
}
