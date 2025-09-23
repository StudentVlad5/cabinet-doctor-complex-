import { useState, useEffect } from 'react';
import { fetchData } from 'services/APIservice';
import { onFetchError } from 'helpers/Messages/NotifyMessages';

export const useArchiveData = reload => {
  const [checklists, setChecklists] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    (async () => {
      setIsLoading(true);
      try {
        const { data } = await fetchData('read?identifier=old');
        if (!data) return onFetchError('Whoops, something went wrong');

        const uniqueIdentifiers = new Set();
        const unique = data.normal
          .sort((a, b) => b.identifier - a.identifier)
          .filter(el => {
            if (uniqueIdentifiers.has(el.identifier)) return false;
            uniqueIdentifiers.add(el.identifier);
            return true;
          });
        setChecklists(unique);
      } catch (err) {
        setError(err);
      } finally {
        setIsLoading(false);
      }
    })();
  }, [reload]);

  return { checklists, isLoading, error };
};
