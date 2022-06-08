import React, { useContext } from 'react';
import { ViewWrapper } from 'components/molecules/ViewWrapper/ViewWrapper';
import UsersList from 'components/organisms/UsersList/UsersList';
import { Link, useParams } from 'react-router-dom';
import { UsersContext } from 'providers/UsersProvider';

const Dashboard = ({ group }) => {
  const { id } = useParams();
  const { groups, users, handleChangeGroup } = useContext(UsersContext);
  if (group) {
    handleChangeGroup(group);
  } else {
    handleChangeGroup(id.toLowerCase());
  }
  return (
    <ViewWrapper>
      <nav>
        {groups.map((group, index) => (
          <Link to={`/group/${group.toLowerCase()}`} key={index}>
            {group}
          </Link>
        ))}
      </nav>
      <UsersList users={users} />
    </ViewWrapper>
  );
};

Dashboard.propTypes = {};

export default Dashboard;
