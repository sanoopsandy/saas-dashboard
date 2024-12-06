import React from 'react';
import ContactList from '../../components/inbox/ContactList';
import ChatWindow from '../../components/inbox/ChatWindow';
import ChatSummary from '../../components/inbox/ChatSummary';

const Inbox = () => {
  return (
    <div className="h-[calc(100vh-5rem)] grid grid-cols-[320px_1fr_300px] gap-0">
      <ContactList />
      <ChatWindow />
      <ChatSummary />
    </div>
  );
};

export default Inbox;