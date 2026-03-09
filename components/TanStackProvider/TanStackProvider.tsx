// 'use client';

// import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
// import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
// import { useState } from 'react';

// type Props = {
//   children: React.ReactNode;
// };

// export default function TanStackProvider({ children }: Props) {
//   const [queryClient] = useState(() => new QueryClient());

//   return (
//     <QueryClientProvider client={queryClient}>
//       {children}
//       <ReactQueryDevtools />
//     </QueryClientProvider>
//   );
// }

// 'use client';

// import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
// import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

// const queryClient = new QueryClient();

// export default function TanStackProvider({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   return (
//     <QueryClientProvider client={queryClient}>
//       {children}
//       {process.env.NODE_ENV === 'development' && <ReactQueryDevtools />}
//     </QueryClientProvider>
//   );
// }

'use client';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

export default function TanStackProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <QueryClientProvider client={queryClient}>
      {children}
    </QueryClientProvider>
  );
}