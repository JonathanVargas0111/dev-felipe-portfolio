'use client'
import { Provider } from "react-redux";
import store from './store'
import { ThemeProvider } from "next-themes";

const Providers = ({ children }: { children: React.ReactNode }) => {
    return (
      <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
        <Provider store={store}>
          {children}
        </Provider>
      </ThemeProvider>
    )
}

export default Providers