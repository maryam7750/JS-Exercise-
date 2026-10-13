  
  
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const users = await response.json();

    console.log('List of Users:', users);
    return users;

  } catch (error) {
    console.error('An error occurred while fetching users:', error);
  }



fetchUsers();