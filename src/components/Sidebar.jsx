import { Home, BarChart2, Users, Settings, HelpCircle } from 'lucide-react';
import * as NavigationMenu from '@radix-ui/react-navigation-menu';

const menuItems = [
  { icon: Home, label: 'Dashboard' },
  { icon: BarChart2, label: 'Analytics' },
  { icon: Users, label: 'Users' },
  { icon: Settings, label: 'Settings' },
  { icon: HelpCircle, label: 'Help' },
];

export default function Sidebar({ isOpen }) {
  return (
    <aside className={`${isOpen ? 'w-64' : 'w-20'} transition-all duration-300 bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700`}>
      <div className="p-4">
        <h2 className={`text-xl font-bold text-gray-800 dark:text-white ${!isOpen && 'hidden'}`}>
          ModernUI
        </h2>
      </div>

      <NavigationMenu.Root className="flex flex-col gap-2 p-2">
        {menuItems.map((item, index) => (
          <NavigationMenu.Item key={index}>
            <button className="w-full flex items-center gap-3 px-3 py-2 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors">
              <item.icon className="h-5 w-5" />
              <span className={`${!isOpen && 'hidden'}`}>{item.label}</span>
            </button>
          </NavigationMenu.Item>
        ))}
      </NavigationMenu.Root>
    </aside>
  );
}
