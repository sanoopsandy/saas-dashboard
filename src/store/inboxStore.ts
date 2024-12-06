import { create } from 'zustand';
import { Contact, Message, ChatSummary } from '../types/inbox';

interface InboxState {
  contacts: Contact[];
  selectedContactId: string | null;
  messages: Record<string, Message[]>;
  chatSummaries: Record<string, ChatSummary>;
  selectContact: (contactId: string) => void;
  sendMessage: (content: string) => void;
}

// Mock data
const mockContacts: Contact[] = [
  {
    id: '1',
    name: 'Alice Johnson',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=32&h=32&fit=crop&crop=face',
    unreadCount: 3,
    status: 'hot',
    lastMessage: 'Looking forward to our next meeting',
    lastMessageTime: '2 min ago'
  },
  {
    id: '2',
    name: 'Bob Smith',
    avatar: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=32&h=32&fit=crop&crop=face',
    unreadCount: 0,
    status: 'cold',
    lastMessage: 'Thanks for your help',
    lastMessageTime: '1 hour ago'
  },
  {
    id: '3',
    name: 'Carol White',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=32&h=32&fit=crop&crop=face',
    unreadCount: 1,
    status: 'closed',
    lastMessage: 'Project completed successfully',
    lastMessageTime: '1 day ago'
  }
];

const mockMessages: Record<string, Message[]> = {
  '1': [
    { id: '1', senderId: '1', content: 'Hi there!', timestamp: '10:00 AM', isUser: false },
    { id: '2', senderId: 'user', content: 'Hello! How can I help?', timestamp: '10:01 AM', isUser: true },
    { id: '3', senderId: '1', content: 'I have a question about the new feature', timestamp: '10:02 AM', isUser: false }
  ]
};

const mockSummaries: Record<string, ChatSummary> = {
  '1': {
    status: 'hot',
    lastActivity: '2 minutes ago',
    totalMessages: 24,
    averageResponseTime: '5 minutes',
    tags: ['Priority', 'Feature Request', 'Active']
  }
};

export const useInboxStore = create<InboxState>((set, get) => ({
  contacts: mockContacts,
  selectedContactId: null,
  messages: mockMessages,
  chatSummaries: mockSummaries,
  
  selectContact: (contactId) => {
    set({ selectedContactId: contactId });
  },
  
  sendMessage: (content) => {
    const { selectedContactId, messages } = get();
    if (!selectedContactId) return;

    const newMessage: Message = {
      id: Date.now().toString(),
      senderId: 'user',
      content,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      isUser: true
    };

    set({
      messages: {
        ...messages,
        [selectedContactId]: [...(messages[selectedContactId] || []), newMessage]
      }
    });
  }
}));