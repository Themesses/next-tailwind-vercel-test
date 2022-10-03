import Link from "next/link";
export const getStaticProps = async () => {
    //only runs at build time so don't write any code you expect to run in the browser
    const response = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await response.json();

    return {
        props: { users: data}
    }

}

const Users = ({ users}) => {
  return (
    <div>
      <h1>All users</h1>
      {
        users.map(user => (
            <Link key={user.id} href={'users/' + user.id}>
                <a>
                    <h3>
                        {user.name}
                    </h3>
                </a>
            </Link>
        ))
      }
    </div>
  )
}

export default Users
