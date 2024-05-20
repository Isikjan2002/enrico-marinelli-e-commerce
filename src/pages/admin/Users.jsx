import { useClients } from "../../features/users/useClients";

const Users = () => {
  const { clientsData: users, isLoading, isError } = useClients();

  if (isLoading)
    return (
      <div className="h-full w-full flex items-center justify-center">
        Loading...
      </div>
    );

  if (isError) return <div>Error: {isError.message}</div>;

  return (
    <div className="max-w-7xl mx-auto p-6 w-full">
      <h1 className="text-3xl mb-4 font-semibold">Users</h1>
      <div className="overflow-x-auto">
        <div className="flex flex-col">
          <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
              <div className="overflow-hidden">
                <table className="min-w-full text-left text-sm font-light text-surface">
                  <thead className="border-b bg-slate-50 border-neutral-200 font-medium">
                    <tr>
                      <th scope="col" className="px-6 py-4">
                        #
                      </th>
                      <th scope="col" className="px-6 py-4">
                        First
                      </th>
                      <th scope="col" className="px-6 py-4">
                        Last
                      </th>
                      <th scope="col" className="px-6 py-4">
                        Email
                      </th>
                      <th scope="col" className="px-6 py-4">
                        Phone
                      </th>
                      <th scope="col" className="px-6 py-4">
                        Adress
                      </th>
                    </tr>
                  </thead>
                  <tbody className="shadow-xl">
                    {users.map((user, index) => (
                      <tr key={user.id} className="border-b border-neutral-200">
                        <td className="whitespace-nowrap border-y px-6 py-4 font-medium">
                          {index + 1}
                        </td>
                        <td className="whitespace-nowrap border-y px-6 py-4">
                          {user.user_metadata.name
                            ? user.user_metadata.name
                            : "N/A"}
                        </td>
                        <td className="whitespace-nowrap border-y px-6 py-4">
                          {user.user_metadata.lastname
                            ? user.user_metadata.lastname
                            : "N/A"}
                        </td>
                        <td className="whitespace-nowrap border-y px-6 py-4">
                          {user.email}
                        </td>
                        <td className="whitespace-nowrap border-y px-6 py-4">
                          {user.user_metadata.phone
                            ? user.user_metadata.phone
                            : "N/A"}
                        </td>
                        <td className="whitespace-nowrap border-y px-6 py-4">
                          {user.user_metadata.adress
                            ? user.user_metadata.adress
                            : "N/A"}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Users;
