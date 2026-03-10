// Global mock declarations to suppress TypeScript errors in environments without node_modules installed.

declare module 'framer-motion' {
  export const motion: any;
  export const AnimatePresence: any;
}

declare module 'lucide-react' {
  export const Plus: any;
  export const MapPin: any;
  export const Phone: any;
  export const Mail: any;
  export const ChefHat: any;
  export const Leaf: any;
  export const Clock: any;
  export const Instagram: any;
  export const Facebook: any;
  export const Twitter: any;
  export const ShoppingCart: any;
  export const Menu: any;
  export const X: any;
  export const ShoppingBag: any;
  export const ArrowRight: any;
  export const Star: any;
  export const Tag: any;
}

declare module 'next/image' {
  import { DetailedHTMLProps, ImgHTMLAttributes } from 'react';
  const Image: React.FC<any>;
  export default Image;
}

declare module 'next/link' {
  const Link: React.FC<any>;
  export default Link;
}

declare module 'clsx' {
  export function clsx(...inputs: any[]): string;
  export type ClassValue = any;
}

declare module 'tailwind-merge' {
  export function twMerge(...inputs: any[]): string;
}

declare module 'next/font/google' {
  export function Inter(options: any): any;
  export function Outfit(options: any): any;
}

declare module 'react' {
  export const useState: any;
  export const useEffect: any;
  export const useRef: any;
  export const useMemo: any;
  export const useCallback: any;
  export const FC: any;
  export const ReactNode: any;
}
