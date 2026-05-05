import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

// Context to provide the current path
const RouterContext = createContext<{
  path: string;
  navigate: (path: string) => void;
}>({
  path: window.location.pathname,
  navigate: () => {},
});

export const RouterProvider = ({ children }: { children: ReactNode }) => {
  const [path, setPath] = useState(window.location.pathname);

  useEffect(() => {
    const handlePopState = () => {
      setPath(window.location.pathname);
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const navigate = (newPath: string) => {
    if (window.location.pathname !== newPath) {
      window.history.pushState({}, '', newPath);
      setPath(newPath);
      window.scrollTo(0, 0);
    }
  };

  return (
    <RouterContext.Provider value={{ path, navigate }}>
      {children}
    </RouterContext.Provider>
  );
};

export const useRouter = () => useContext(RouterContext);

export const Route = ({ path, component: Component }: { path: string, component: React.ComponentType<any> }) => {
  const { path: currentPath, navigate } = useRouter();
  
  if (currentPath !== path) return null;
  
  return <Component onNavigate={navigate} />;
};

export const Link = ({ to, children, className }: { to: string, children: ReactNode, className?: string }) => {
  const { navigate } = useRouter();
  
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    navigate(to);
  };
  
  return (
    <a href={to} onClick={handleClick} className={className}>
      {children}
    </a>
  );
};
