def generate_token(user) do
  {:ok, token, _} = Joken.encode_and_sign(%{"user_id" => user.id}, Backend.Auth.Guardian)
  {:ok, token}
end