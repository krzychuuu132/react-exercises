import StudentDetails from 'components/molecules/StudentDetails/StudentDetails';
import Modal from './Modal';

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: 'Components/Atoms/Modal',
  component: Modal,
};

const student = {
  id: '1',
  name: 'Adam Romański',
  attendance: '39%',
  average: '2.3',
  group: 'A',
};

const Template = (args) => (
  <Modal {...args}>
    <StudentDetails student={student} />
  </Modal>
);

export const Default = Template.bind({});
