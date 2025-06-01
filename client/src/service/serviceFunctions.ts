import axios from "axios";
import axiosInstance from "./config/axiosInstance";
import { BASE_URL } from "./config/config";

export const ServiceFunctions = {
  handleLogin: async (email: string, password: string, setError: any) => {
    try{
      const response = await axios.post(`${BASE_URL}/auth/login`, { email, password });
      if(response.data.token){
          localStorage.setItem("token", response.data.token);
          document.location.href = '/summarize'
      } else {
          setError(response.data.message)
        console.log(response);
            
      }
    } catch (error: any){
      console.log(error);
      
      setError(error.response.data.message)
    }
  },
  
  handleRegister: async (email: string, password: string, setError: any) => {
    try{
      const response = await axios.post(`${BASE_URL}/auth/register`, { email, password });
      if(response.data.token){
          localStorage.setItem("token", response.data.token);
          document.location.href = '/summarize'
      } else {
          setError(response.data.message)
      }
    } catch(error: any){
      setError(error.response.data.message)
    }
  },

  handleSubmit: async (file: any, setSummary: any) => {
    try{
      const formData = new FormData();
      formData.append("pdf", file!);
  
      const response = await axiosInstance.post(`${BASE_URL}/summaries/upload`, formData, {
        headers: { 
          'Content-Type': 'multipart/form-data',
        },
      });
      setSummary(response.data.summary);
    } catch(error:any){
      console.log(error);
    }
  },
};
