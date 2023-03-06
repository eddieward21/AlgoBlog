import { useSession } from 'next-auth/react';
import client from "../utils/client"

const Profile = async() => {
  const {data:session} = useSession();


  if (!session) {
    return <p>Please login to view your profile</p>;
  }

  const { user } = session;

  const query = `*[_type == "user" && email == $email][0]{
    name,
    email
  }`;

  const params = { email: user.email };

  const { data } = await client.fetch(query, params);

  return (
    <>
      <h1>Profile</h1>
      <p>Name: {data.name}</p>
      </>
     
  )
}
  export default Profile