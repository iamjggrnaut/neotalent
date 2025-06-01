defmodule Backendelixir.Application do
  # See https://hexdocs.pm/elixir/Application.html
  # for more information on OTP Applications
  @moduledoc false

  use Application

  @impl true
  def start(_type, _args) do
    children = [
      BackendelixirWeb.Telemetry,
      Backendelixir.Repo,
      {DNSCluster, query: Application.get_env(:backendelixir, :dns_cluster_query) || :ignore},
      {Phoenix.PubSub, name: Backendelixir.PubSub},
      # Start the Finch HTTP client for sending emails
      {Finch, name: Backendelixir.Finch},
      # Start a worker by calling: Backendelixir.Worker.start_link(arg)
      # {Backendelixir.Worker, arg},
      # Start to serve requests, typically the last entry
      BackendelixirWeb.Endpoint
    ]

    # See https://hexdocs.pm/elixir/Supervisor.html
    # for other strategies and supported options
    opts = [strategy: :one_for_one, name: Backendelixir.Supervisor]
    Supervisor.start_link(children, opts)
  end

  # Tell Phoenix to update the endpoint configuration
  # whenever the application is updated.
  @impl true
  def config_change(changed, _new, removed) do
    BackendelixirWeb.Endpoint.config_change(changed, removed)
    :ok
  end
end
