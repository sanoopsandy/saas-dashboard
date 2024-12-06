import React from 'react';
import { Clock, MessageSquare, Tag } from 'lucide-react';
import { useInboxStore } from '../../store/inboxStore';

const ChatSummary = () => {
  const { selectedContactId, chatSummaries, contacts } = useInboxStore();

  if (!selectedContactId) {
    return (
      <div className="h-full flex items-center justify-center bg-white">
        <p className="text-gray-500">Select a conversation to view details</p>
      </div>
    );
  }

  const summary = chatSummaries[selectedContactId];
  const contact = contacts.find(c => c.id === selectedContactId);

  if (!summary || !contact) return null;

  return (
    <div className="h-full bg-white border-l border-gray-200">
      <div className="p-4 border-b border-gray-200">
        <h2 className="text-lg font-semibold">Conversation Summary</h2>
      </div>
      
      <div className="p-4 space-y-6">
        <div>
          <h3 className="text-sm font-medium text-gray-500 mb-2">Status</h3>
          <span className="text-sm px-2 py-1 rounded bg-gray-100">
            {summary.status}
          </span>
        </div>

        <div>
          <h3 className="text-sm font-medium text-gray-500 mb-2">Activity</h3>
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-sm">
              <Clock size={16} className="text-gray-400" />
              <span>Last active: {summary.lastActivity}</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <MessageSquare size={16} className="text-gray-400" />
              <span>Total messages: {summary.totalMessages}</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <Clock size={16} className="text-gray-400" />
              <span>Avg. response time: {summary.averageResponseTime}</span>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-sm font-medium text-gray-500 mb-2">Tags</h3>
          <div className="flex flex-wrap gap-2">
            {summary.tags.map((tag) => (
              <div
                key={tag}
                className="flex items-center gap-1 text-xs px-2 py-1 rounded-full bg-secondary text-primary"
              >
                <Tag size={12} />
                <span>{tag}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatSummary;