get "/messages" do
  @messages = Message.all
  erb :"index"
end

get "/messages/new" do
  redirect "/" unless session[:user_id]
  erb :"messages/_message_form"
end
