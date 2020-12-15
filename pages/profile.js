import { useUser } from '@auth/hooks';
import Layout from '@components/Layout';
import dbConnect from '@utils/dbConnect';
import Item from '@models/Item';
import { useSetColormode } from '@context/Colormode';

const Profile = ({ items }) => {
  const user = useUser({ redirectTo: '/login' });
  const toggleColormode = useSetColormode();

  return (
    <Layout>
      <h1>Profile</h1>
      <button onClick={() => toggleColormode()}>Toggle Colormode</button>
      {user && (
        <>
          <p>Your session:</p>
          <pre>{JSON.stringify(user, null, 2)}</pre>
          <p>Items:</p>
          <ul>
            {items.map((item) => (
              <li key={item._id}>{item.name}</li>
            ))}
          </ul>
        </>
      )}
    </Layout>
  );
};

export async function getServerSideProps() {
  await dbConnect();

  /* find all the data in our database */
  const result = await Item.find({});
  const items = result.map((doc) => {
    const item = doc.toObject();
    item._id = item._id.toString();
    return item;
  });

  return { props: { items } };
}

export default Profile;
