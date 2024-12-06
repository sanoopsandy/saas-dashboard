import React from 'react';
import { LayoutDashboard, Inbox, Users, PieChart, Settings } from 'lucide-react';
import clsx from 'clsx';
import { useSidebarStore } from '../../store/sidebarStore';
import SidebarItem from './SidebarItem';

const navItems = [
  { icon: LayoutDashboard, label: 'Overview', path: '/dashboard' },
  { icon: Inbox, label: 'Inbox', path: '/dashboard/inbox' },
  { icon: Users, label: 'Agents', path: '/dashboard/agents' },
  { icon: PieChart, label: 'Insights', path: '/dashboard/insights' },
  { icon: Settings, label: 'Settings', path: '/dashboard/settings' },
];

const Sidebar = () => {
  const { isExpanded, setIsExpanded } = useSidebarStore();

  return (
    <aside
      onMouseEnter={() => setIsExpanded(true)}
      onMouseLeave={() => setIsExpanded(false)}
      className={clsx(
        'fixed left-0 top-0 h-screen bg-white border-r border-gray-200 transition-all duration-300 z-50',
        'shadow-lg',
        isExpanded ? 'w-64' : 'w-16'
      )}
      style={{
        transform: isExpanded ? 'translateX(0)' : 'translateX(0)',
      }}
    >
      <div className={clsx(
        'p-6 transition-all duration-300',
        !isExpanded && 'p-4'
      )}>
        <h1 className={clsx(
          'text-xl font-bold text-[#5846e5] whitespace-nowrap transition-all duration-300',
          !isExpanded && 'scale-0'
        )}>
          SaaS Dashboard
        </h1>
      </div>
      <nav className="px-2">
        {navItems.map((item) => (
          <SidebarItem
            key={item.path}
            icon={item.icon}
            label={item.label}
            path={item.path}
          />
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;