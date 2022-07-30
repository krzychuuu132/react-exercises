import axios from 'axios';
import { useCallback } from 'react';

const studentsAPI = axios.create({});

studentsAPI.interceptors.request.use(
  (config) => {
    // Do something before request is sent
    const token = localStorage.getItem('token');

    if (token) {
      config.headers.authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    // Do something with request error
    return Promise.reject(error);
  }
);

export const useStudents = () => {
  const getGroups = useCallback(async () => {
    try {
      const result = await studentsAPI.get('/groups');
      return result.data.groups;
    } catch (e) {
      console.log(e);
    }
  }, []);

  const getStudentsByGroup = useCallback(async (groupId) => {
    try {
      const result = await studentsAPI.get(`/groups/${groupId}`);
      return result.data.students;
    } catch (e) {
      console.log(e);
    }
  }, []);

  const findStudents = async (searchPhrase) => {
    try {
      const { data } = await studentsAPI.post(`/students/search`, {
        searchPhrase,
      });
      return data;
    } catch (e) {
      console.log(e);
    }
  };

  const getStudentsById = useCallback(async (id) => {
    try {
      const result = await studentsAPI.get(`/students/${id}`);
      return result.data.students;
    } catch (err) {
      console.log(err);
    }
  }, []);

  return {
    getStudentsByGroup,
    getGroups,
    findStudents,
    getStudentsById,
  };
};
