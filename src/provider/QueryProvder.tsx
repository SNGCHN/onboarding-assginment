import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { PropsWithChildren } from "react";

// 컴포넌트 외부에 인스턴스 생성
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false, // 탭 포커싱 됐을 때 refetch 안함
      staleTime: 1000 * 60 * 5, //5분마다 fresh 데이터로 갱신
    },
  },
});

function QueryProvider({ children }: PropsWithChildren) {
  return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>;
}

export default QueryProvider;
