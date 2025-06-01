defmodule BackendWeb.SummaryController do
  use BackendWeb, :controller

  def summarize(conn, %{"pdf" => pdf}) do
    text = PdfLex.extract_text(pdf.path)
    prompt = "Summarize in 3 sentences: #{text}"
    api_key = Application.get_env(:backend, :openai)[:api_key]

    case OpenAI.chat_completion(prompt, api_key) do
      {:ok, summary} -> json(conn, %{summary: summary})
      {:error, reason} -> json(conn, %{error: "AI failed: #{reason}"})
    end
  end
end
