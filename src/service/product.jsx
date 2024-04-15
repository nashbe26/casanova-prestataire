// App.js
import React, { useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { userState, todosState } from './atoms';
import { fetchProducts } from './api';

function App() {
  const [user, setUser] = useRecoilState(userState);
  const [todos, setTodos] = useRecoilState(todosState);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const userData = await fetchProducts();
        setUser(userData);
        
      } catch (error) {
        console.error('Error fetching data:', error.message);
      }
    };

    fetchData();
  }, [setUser, setTodos]);

 
}

export default App;
