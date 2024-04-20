import db from "./libs/prismadb";

export default async function Home() {
  const getAllUsers = await db.user.findMany();
  return (
    <div className=" pt-56">
      <span>Hello Airbnb</span>
      <ul>
        {getAllUsers?.length > 0 &&
          getAllUsers.map((val, index) => {
            return <li key={index}>{val.name}</li>;
          })}
      </ul>
      {getAllUsers.length === 0 && <div>No User Found</div>}
    </div>
  );
}
