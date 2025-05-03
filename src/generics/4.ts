type User = {
  name: string;
  surname: string;
  email: string;
  password: string;
};

function createOrUpdateUser(initialValues: Partial<User>): User {
  const defUser: User = {
    name: "",
    surname: "",
    email: "",
    password: "",
  };
  return { ...defUser, ...initialValues };
}

createOrUpdateUser({
  email: "user@mail.com",
  password: "password123",
});

export default { createOrUpdateUser };
