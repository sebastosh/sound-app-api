class ChatChannel < ApplicationCable::Channel
  def subscribed
    # stream_from "chat"
    chat = Chat.find(params[:chat_id])
		stream_for chat
  end

  def unsubscribed
    # Any cleanup needed when channel is unsubscribed
  end
end
