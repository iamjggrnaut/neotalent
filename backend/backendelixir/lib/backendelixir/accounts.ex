def register_user(attrs) do
  %User{}
  |> User.registration_changeset(attrs)
  |> Repo.insert()
end

def authenticate_user(email, password) do
  user = Repo.get_by(User, email: email)
  if user && Bcrypt.verify_pass(password, user.password_hash) do
    {:ok, user}
  else
    {:error, "Invalid credentials"}
  end
end