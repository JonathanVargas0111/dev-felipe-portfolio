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
            className="fixed right-4 top-4 z-[9999] rounded-full border border-[var(--line)] bg-[var(--card)] p-2.5 text-[var(--ink)] shadow-[var(--shadow)] transition-all duration-300 hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-[var(--accent-2)]"
            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
        >
            {theme === 'dark' ? (
                <BsSun className="h-5 w-5 text-[var(--accent)]" />
            ) : (
                <BsMoon className="h-5 w-5 text-[var(--ink-muted)]" />
            )}
        </button>
    )
}

export default ThemeToggle
