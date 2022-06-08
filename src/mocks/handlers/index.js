import { rest } from 'msw';
import { students } from 'mocks/data/students';

export const handlers = [
  rest.get('/group/:id', (req, res, ctx) => {
    const { id: group } = req.params;
    const filteredStudents = students.filter((student) => student.group.toLowerCase() === group);
    console.log(filteredStudents);
    if (group) {
      return res(
        ctx.status(200),
        ctx.json({
          students: filteredStudents,
        })
      );
    }
  }),
  rest.get('/group', (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        students,
      })
    );
  }),
];
