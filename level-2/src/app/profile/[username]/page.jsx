import React from "react";

const page = async ({ params }) => {
  const { username } = await params;

  return (
    <div>
      username - {username}
    </div>
  );
};

export default page;
