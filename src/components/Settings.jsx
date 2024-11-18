import * as Dialog from '@radix-ui/react-dialog';
import { X } from 'lucide-react';

export default function Settings({ isOpen, onClose, isDark, onDarkModeChange }) {
  return (
    <Dialog.Root open={isOpen} onOpenChange={onClose}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black/50 backdrop-blur-sm" />
        <Dialog.Content className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-md bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
          <div className="flex justify-between items-center mb-4">
            <Dialog.Title className="text-xl font-semibold text-gray-900 dark:text-white">
              Settings
            </Dialog.Title>
            <Dialog.Close className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200">
              <X className="w-5 h-5" />
            </Dialog.Close>
          </div>

          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <label className="text-gray-700 dark:text-gray-200">
                Dark Mode
              </label>
              <button
                onClick={() => onDarkModeChange(!isDark)}
                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                  isDark ? 'bg-blue-600' : 'bg-gray-200'
                }`}
              >
                <span
                  className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                    isDark ? 'translate-x-6' : 'translate-x-1'
                  }`}
                />
              </button>
            </div>

            <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
              <h3 className="text-sm font-medium text-gray-900 dark:text-white mb-2">
                About
              </h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Weather Dashboard v1.0.0
              </p>
            </div>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
