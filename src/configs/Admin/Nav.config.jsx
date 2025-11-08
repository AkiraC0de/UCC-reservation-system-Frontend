import {LayoutDashboard, Calendar, Package, Users, Clock, Settings } from 'lucide-react';

export const MENU_ITEMS = [
  {
    id: 'dashboard',
    label: 'Dashboard',
    icon: LayoutDashboard,
    type: 'single',
    to: '/admin'
  },
  {
    id: 'reservations',
    label: 'Reservations',
    icon: Calendar,
    type: 'section',
    items: [
      { id: 'all-reservations', label: 'Room Reservations', to: '/admin/reservation-room' },
      { id: 'pending-approvals', label: 'Item Reservations',  to: '/admin/reservation-item' }
    ]
  },
  {
    id: 'management',
    label: 'Management',
    icon: Package,
    type: 'section',
    items: [
      { id: 'manage-equipment', label: 'Manage Equipment',  to: '/admin/manage-items' },
      { id: 'manage-rooms', label: 'Manage Rooms',  to: '/admin/manage-rooms' },
    ]
  },
  {
    id: 'users',
    label: 'Users',
    icon: Users,
    type: 'section',
    items: [
      { id: 'user-list', label: 'User Management',  to: '/admin/user-management' },
      { id: 'user-application', label: 'Applications', to: '/admin/user-application' },
    ]
  },
  {
    id: 'logs',
    label: 'Logs & History',
    icon: Clock,
    type: 'section',
    items: [
      { id: 'calendar', label: 'Calendar', to: '/admin/calendar' },
      { id: 'activity-logs', label: 'Activity Logs', to: '/admin/activity-logs' },
      { id: 'history', label: 'History', to: '/admin/history' }
    ]
  },
  // {
  //   id: 'settings',
  //   label: 'Settings',
  //   icon: Settings,
  //   type: 'section',
  //   items: [
  //     { id: 'system-settings', label: 'System Settings' },
  //     { id: 'notifications', label: 'Notifications' },
  //     { id: 'backup-restore', label: 'Backup & Restore' }
  //   ]
  // }
]