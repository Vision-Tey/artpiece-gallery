import { useState, useEffect } from 'react';
import { projectStorage, projectFirestore } from '../firebase/config';
import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage';
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';

const useStorage = (file) => {
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState(null);
  const [url, setUrl] = useState(null);

  useEffect(() => {
    const storageRef = ref(projectStorage, file.name);
    const collectionRef = collection(projectFirestore, 'images');
    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on('state_changed', (snapshot) => {
      let percentage = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
      setProgress(percentage);
    }, (err) => {
      setError(err);
    }, async () => {
      const url = await getDownloadURL(storageRef);
      await addDoc(collectionRef, { url, timestamp: serverTimestamp() });
      setUrl(url);

      // Reset state after upload is complete
      setProgress(0);
      setError(null);
    });

    // Clean up the subscription when the component unmounts or when the file changes
    return () => {
      // Cancel the upload task if it's still in progress
      if (uploadTask.snapshot.state === 'running') {
        uploadTask.cancel();
      }
    };
  }, [file]);

  return { progress, url, error };
};

export default useStorage;
