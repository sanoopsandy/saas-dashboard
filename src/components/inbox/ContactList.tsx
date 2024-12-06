import React from 'react';
import { useInboxStore } from '../../store/inboxStore';
import clsx from 'clsx';

const ContactList = () => {
  const { contacts, selectedContactId, selectContact } = useInboxStore();

  return (
    <div className="h-full bg-white border-r border-gray-200">
      <div className="p-4 border-b border-gray-200">
        <h2 className="text-lg font-semibold">Conversations</h2>
      </div>
      <div className="overflow-y-auto h-[calc(100vh-10rem)]">
        {contacts.map((contact) => (
          <button
            key={contact.id}
            onClick={() => selectContact(contact.id)}
            className={clsx(
              'w-full p-4 border-b border-gray-100 hover:bg-gray-50 transition-colors',
              'flex items-center gap-4 text-left',
              selectedContactId === contact.id && 'bg-secondary'
            )}
          >
            <img
              src={contact.avatar}
              alt={contact.name}
              className="w-10 h-10 rounded-full"
            />
            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between">
                <p className="font-medium truncate">{contact.name}</p>
                <span className="text-xs text-gray-500">{contact.lastMessageTime}</span>
              </div>
              <div className="flex items-center gap-2 mt-1">
                <span
                  className={clsx(
                    'text-xs px-2 py-0.5 rounded-[4px]',
                    contact.status === 'hot' && 'bg-red-100 text-red-700',
                    contact.status === 'cold' && 'bg-blue-100 text-blue-700',
                    contact.status === 'closed' && 'bg-gray-100 text-gray-700'
                  )}
                >
                  {contact.status}
                </span>
                {contact.unreadCount > 0 && (
                  <span className="bg-primary text-white text-xs px-2 py-0.5 rounded-[4px]">
                    {contact.unreadCount}
                  </span>
                )}
              </div>
              <p className="text-sm text-gray-500 truncate mt-1">
                {contact.lastMessage}
              </p>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};

export default ContactList;