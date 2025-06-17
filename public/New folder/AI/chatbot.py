import openai  

# Replace with your OpenAI API key
OPENAI_API_KEY = "your-api-key-here"

openai_client = openai.OpenAI(api_key=OPENAI_API_KEY)

def chat_with_ai(prompt):
    response = openai_client.chat.completions.create(
        model="gpt-3.5-turbo",
        messages=[{"role": "user", "content": prompt}]
    )
    return response.choices[0].message.content

# Keep chatting with the AI
print("AI Chatbot is ready! Type 'exit' to stop.")
while True:
    user_input = input("You: ")
    if user_input.lower() == "exit":
        break
    ai_response = chat_with_ai(user_input)
    print("AI:", ai_response)
