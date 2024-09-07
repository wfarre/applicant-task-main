import PropTypes from "prop-types";

const RankingTable = ({ users }) => {
  return (
    <table className="w-full table-fixed text-xs sm:text-base">
      <thead className="bg-zinc-900 py-2 text-left text-white">
        <tr>
          <th className="w-8 overflow-hidden text-ellipsis" />
          <th className="overflow-hidden text-ellipsis">First Name</th>
          <th className="overflow-hidden text-ellipsis">Last Name</th>
          <th className="overflow-hidden text-ellipsis">Gender</th>
          <th className="overflow-hidden text-ellipsis">Division</th>
          <th className="overflow-hidden text-ellipsis">Nationality</th>
          <th>Time</th>
        </tr>
      </thead>
      <tbody id="table-body">
        {users?.map((user, index) => {
          return (
            <tr key={user.lastName + index}>
              <td className="bg-zinc-900 text-center text-white">
                {index + 1}
              </td>
              <td className="overflow-hidden text-ellipsis">
                {user.firstName}
              </td>
              <td className="overflow-hidden text-ellipsis">{user.lastName}</td>
              <td className="overflow-hidden text-ellipsis">{user.gender}</td>
              <td className="overflow-hidden text-ellipsis">{user.division}</td>
              <td className="overflow-hidden text-ellipsis">
                {user.nationality}
              </td>
              <td>{user.totalTime.time}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

RankingTable.propTypes = {
  users: PropTypes.arrayOf(Object),
};

export default RankingTable;
