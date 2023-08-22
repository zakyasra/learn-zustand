import React from "react";
import useAppStore from "../../hooks/useAppStore";

const Username = () => {
  const username = useAppStore((state) => state.username); // agar tidak render saat count terjadi perubahan
  const setUsername = useAppStore((state) => state.setUsername);
  console.log("Render usernmae");

  return (
    <>
      <p>Username: {username}</p>
      <input
        type="text"
        placeholder="Masukkan nama"
        onChange={(e) => setUsername(e?.target?.value)}
      />
    </>
  );
};

export default Username;
