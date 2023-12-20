import { useState, useEffect } from 'react';
import { projectFirestore } from '../firebase/config';
import { collection, onSnapshot, orderBy, query } from 'firebase/firestore';

const useFirestore = (collectionn) => {
  const [docs, setDocs] = useState([]);

  useEffect(() => {
    const unsubscribe = onSnapshot(
      query(collection(projectFirestore, collectionn), orderBy('timestamp', 'desc')),
      (snapshot) => {
        const images = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
        setDocs(images);
      }
    );

    // Cleanup the subscription when the component unmounts
    return () => unsubscribe();
  }, [collectionn]);

  return { docs };
};

export default useFirestore;
