import * as Switch from '@radix-ui/react-switch';
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import { Sun, Moon, Menu, Bell, Settings, User } from 'lucide-react';

export default function Header({ isDarkMode, setIsDarkMode, toggleSidebar }) {
  return (
    <header className="bg-white dark:bg-gray-800 shadow-sm">
      <div className="px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <button
            onClick={toggleSidebar}
            className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700"
          >
            <Menu className="h-6 w-6 text-gray-600 dark:text-gray-300" />
          </button>
          
          <h1 className="text-xl font-semibold text-gray-800 dark:text-white">
            Dashboard
          </h1>
        </div>

        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <Sun className="h-4 w-4 text-gray-600 dark:text-gray-300" />
            <Switch.Root
              checked={isDarkMode}
              onCheckedChange={setIsDarkMode}
              className="w-11 h-6 bg-gray-200 rounded-full relative dark:bg-gray-700 transition-colors"
            >
              <Switch.Thumb className={`block w-5 h-5 bg-white rounded-full shadow-lg transition-transform duration-100 translate-x-0.5 ${isDarkMode ? 'translate-x-[22px]' : ''}`} />
            </Switch.Root>
            <Moon className="h-4 w-4 text-gray-600 dark:text-gray-300" />
          </div>

          <button className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700">
            <Bell className="h-6 w-6 text-gray-600 dark:text-gray-300" />
          </button>

          <DropdownMenu.Root>
            <DropdownMenu.Trigger asChild>
              <button className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700">
                <User className="h-6 w-6 text-gray-600 dark:text-gray-300" />
              </button>
            </DropdownMenu.Trigger>

            <DropdownMenu.Portal>
              <DropdownMenu.Content className="min-w-[200px] bg-white dark:bg-gray-800 rounded-lg shadow-lg p-2">
                <DropdownMenu.Item className="flex items-center gap-2 px-3 py-2 text-sm text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded cursor-pointer">
                  <User className="h-4 w-4" />
                  Profile
                </DropdownMenu.Item>
                <DropdownMenu.Item className="flex items-center gap-2 px-3 py-2 text-sm text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded cursor-pointer">
                  <Settings className="h-4 w-4" />
                  Settings
                </DropdownMenu.Item>
              </DropdownMenu.Content>
            </DropdownMenu.Portal>
          </DropdownMenu.Root>
        </div>
      </div>
    </header>
  );
}
