import { GET } from '@/services';

export function getXXX(params: { test: string }) {
  return GET<{ list: any[] }>('/test', params);
}
