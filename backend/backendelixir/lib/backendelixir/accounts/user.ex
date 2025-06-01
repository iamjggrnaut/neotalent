defmodule Backend.Accounts.User do
  use Ecto.Schema
  schema "users" do
    field :email, :string
    field :password_hash, :string
    field :password, :string, virtual: true
  end
end