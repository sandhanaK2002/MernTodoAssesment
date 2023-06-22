import axios from 'axios';

const baseurl = "http://localhost:8000/api/todos"

export const fetchTodos = async (setTodo) => {
  try {
    const response = await axios.get(baseurl);
    setTodo(response.data)
  } catch (error) {
    console.error('Error fetching todos:', error);
    throw error; // Rethrow the error to handle it in the component
  }
};

export const createTodo = async (text , setText , setTodo) => {
  try {
    const response = await axios.post(baseurl, {text});
    setText("")
    fetchTodos(setTodo)
    } catch (error) {
    console.error('Error creating todo:', error);
    throw error; // Rethrow the error to handle it in the component
  }
};

  export const updateTodo = async (todoId , text , setTodo , setText , setIsUpdating) => {
    try {
      console.log(text)
      const response = await axios.put(`${baseurl}/${todoId}`, {text});
      setText("")
      setIsUpdating(false)
      fetchTodos(setTodo)
    } catch (error) {
      console.error('Error updating todo:', error);
      throw error; // Rethrow the error to handle it in the component
    }
  };

export const deleteTodo = async (_id, setTodo) => {
  try {
    const response = await axios.delete(`${baseurl}/${_id}`);
    fetchTodos(setTodo);
  } catch (error) {
    console.error('Error deleting todo:', error);
    throw error; // Rethrow the error to handle it in the component
  }
};

