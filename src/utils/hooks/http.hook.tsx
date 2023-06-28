import { useState, useCallback } from 'react';

export const useHttp = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [process, setProcess] = useState('waiting');

    const request = useCallback(async (
        url: RequestInfo | URL, 
        method = 'GET', 
        body: string | null | undefined = null, 
        headers: Record<string, string> = {
            'Content-Type': 'application/json',
          }
    ) => {

        setLoading(true);
        setProcess('loading');

        try {
            const response = await fetch(url, {method, body, headers});

            if(!response.ok) {
                throw new Error(`Could not fetch ${url}, status: ${response.status}`);
            }

            const data = await response.json();

            setLoading(false);

            return data;

        } catch(e: any) {
            setLoading(false);
            setError(e.message);
            setProcess('error');
            throw e;
        }

    }, []);

    
    const clearError = useCallback(() => {
        setError(null);
        setProcess('loading');
    }, []);

    return {loading, request, error, clearError, process, setProcess}
}