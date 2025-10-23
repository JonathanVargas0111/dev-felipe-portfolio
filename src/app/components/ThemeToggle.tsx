'use client'
import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '../store/store'
import { toggleTheme } from '../store/slices/settings/SettingsSlices'
import { BsSun, BsMoon } from 'react-icons/bs'

const ThemeToggle = () => {
    const { theme } = useSelector((state: RootState) => state.settings)
    const dispatch = useDispatch()

    const handleToggle = () => {
        dispatch(toggleTheme())
    }

    return (
        <button
            onClick={handleToggle}
            className="fixed z-[9999] p-2.5 transition-all duration-300 bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm border border-gray-200 dark:border-gray-700 rounded-full shadow-lg top-4 right-4 hover:shadow-xl hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-1 dark:focus:ring-offset-gray-900"
            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
        >
            {theme === 'dark' ? (
                <BsSun className="w-5 h-5 text-yellow-500" />
            ) : (
                <BsMoon className="w-5 h-5 text-gray-800" />
            )}
        </button>
    )
}

export default ThemeToggle