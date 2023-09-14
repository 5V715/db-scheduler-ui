const API_BASE_URL: string =
  (import.meta.env.VITE_API_BASE_URL as string) ??
  window.location.origin + '/api';

export const ALL_LOG_QUERY_KEY = `logs/all`;

export const getAllLogs = async () => {
  const response = await fetch(`${API_BASE_URL}/logs/all`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });

  if (!response.ok) {
    throw new Error(`Error fetching logs. Status: ${response.statusText}`);
  }

  return await response.json();
};
