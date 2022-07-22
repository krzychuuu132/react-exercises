import axios from 'axios';
import { useCallback } from 'react';

export const useStudents = () => {
  const getGroups = useCallback(async () => {
    try {
      const result = await axios.get('/groups');
      return result.data.groups;
    } catch (e) {
      console.log(e);
    }
  }, []);

  const getStudentsByGroup = useCallback(async (groupId) => {
    try {
      const result = await axios.get(`/groups/${groupId}`);
      return result.data.students;
    } catch (e) {
      console.log(e);
    }
  }, []);

  const findStudents = async (searchPhrase) => {
    try {
      const { data } = await axios.post(`/students/search`, {
        searchPhrase,
      });
      return data;
    } catch (e) {
      console.log(e);
    }
  };

  const getStudentsById = useCallback(async (id) => {
    try {
      const result = await axios.get(`/students/${id}`);
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
