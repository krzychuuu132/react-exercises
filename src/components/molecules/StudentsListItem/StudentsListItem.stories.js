import StudentsListItem from './StudentsListItem';

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: 'Components/Molecules/StudentsListItem',
  component: StudentsListItem,
};

const mockedData = {
  id: '1',
  name: 'Adam Romański',
  attendance: '39%',
  average: '2.3',
  group: 'A',
};

const Template = (args) => <StudentsListItem userData={mockedData}>Read more</StudentsListItem>;

export const Default = Template.bind({});

Default.args = {
  userData: mockedData,
};
