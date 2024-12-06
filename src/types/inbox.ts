export interface Contact {
  id: string;
  name: string;
  avatar: string;
  unreadCount: number;
  status: 'hot' | 'cold' | 'closed';
  lastMessage: string;
  lastMessageTime: string;
}

export interface Message {
  id: string;
  senderId: string;
  content: string;
  timestamp: string;
  isUser: boolean;
}

export interface ChatSummary {
  status: 'hot' | 'cold' | 'closed';
  lastActivity: string;
  totalMessages: number;
  averageResponseTime: string;
  tags: string[];
}