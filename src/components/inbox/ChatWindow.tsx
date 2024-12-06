import React, { useState } from 'react';
import { Send } from 'lucide-react';
import { useInboxStore } from '../../store/inboxStore';
import clsx from 'clsx';

const ChatWindow = () => {
  const [message, setMessage] = useState('');
  const { selectedContactId, messages, contacts, sendMessage } = useInboxStore();

  const selectedContact = contacts.find(c => c.id === selectedContactId);
  const chatMessages = selectedContactId ? messages[selectedContactId] || [] : [];

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!message.trim()) return;
    
    sendMessage(message);
    setMessage('');
  };

  if (!selectedContact) {
    return (
      <div className="h-full flex items-center justify-center bg-white">
        <p className="text-gray-500">Select a conversation to start chatting</p>
      </div>
    );
  }

  return (
    <div className="h-full flex flex-col bg-white">
      <div className="p-4 border-b border-gray-200 flex items-center gap-4">
        <img
          src={selectedContact.avatar}
          alt={selectedContact.name}
          className="w-10 h-10 rounded-full"
        />
        <div>
          <h2 className="font-semibold">{selectedContact.name}</h2>
          <span
            className={clsx(
              'text-xs px-2 py-0.5 rounded-[4px]',
              selectedContact.status === 'hot' && 'bg-red-100 text-red-700',
              selectedContact.status === 'cold' && 'bg-blue-100 text-blue-700',
              selectedContact.status === 'closed' && 'bg-gray-100 text-gray-700'
            )}
          >
            {selectedContact.status}
          </span>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {chatMessages.map((msg) => (
          <div
            key={msg.id}
            className={clsx(
              'flex',
              msg.isUser ? 'justify-end' : 'justify-start'
            )}
          >
            <div
              className={clsx(
                'max-w-[70%] rounded-[4px] p-3',
                msg.isUser
                  ? 'bg-primary text-white rounded-br-none'
                  : 'bg-gray-100 text-gray-900 rounded-bl-none'
              )}
            >
              <p>{msg.content}</p>
              <span
                className={clsx(
                  'text-xs mt-1 block',
                  msg.isUser ? 'text-white/80' : 'text-gray-500'
                )}
              >
                {msg.timestamp}
              </span>
            </div>
          </div>
        ))}
      </div>

      <form onSubmit={handleSend} className="p-4 border-t border-gray-200">
        <div className="flex gap-2">
          <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Type your message..."
            className="flex-1 rounded-[4px] border-gray-200 focus:ring-primary focus:border-primary"
          />
          <button
            type="submit"
            className="bg-primary text-white p-2 rounded-[4px] hover:bg-primary/90 transition-colors"
          >
            <Send size={20} />
          </button>
        </div>
      </form>
    </div>
  );
};

export default ChatWindow;