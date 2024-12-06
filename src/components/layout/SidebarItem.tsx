import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { LucideIcon } from 'lucide-react';
import clsx from 'clsx';
import { useSidebarStore } from '../../store/sidebarStore';

interface SidebarItemProps {
  icon: LucideIcon;
  label: string;
  path: string;
}

const SidebarItem = ({ icon: Icon, label, path }: SidebarItemProps) => {
  const isExpanded = useSidebarStore((state) => state.isExpanded);
  const location = useLocation();
  const isActive = location.pathname === path || 
    (path === '/dashboard' && location.pathname === '/dashboard');

  return (
    <NavLink
      to={path}
      className={clsx(
        'flex items-center gap-3 px-4 py-3 rounded text-gray-600 hover:bg-[#dfe3ff] transition-all duration-300 mb-1',
        isActive && 'bg-[#dfe3ff] text-[#5846e5]',
        !isExpanded && 'justify-center px-2'
      )}
      title={!isExpanded ? label : undefined}
    >
      <Icon size={20} />
      <span
        className={clsx(
          'transition-all duration-300',
          isExpanded ? 'opacity-100' : 'opacity-0 w-0 overflow-hidden'
        )}
      >
        {label}
      </span>
    </NavLink>
  );
};

export default SidebarItem;