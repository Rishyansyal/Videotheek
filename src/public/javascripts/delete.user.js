function deleteFetch(userId, callback) {
  fetch(`/users/${userId}/delete`, {method: 'DELETE'})
  .then((res) => res.json())
  .then((data) => {
    return data.status !== 200 ? callback(data, undefined) : callback(undefined, data);
  })
  .catch((err) => {
    callback(err, undefined);
  });
}

function deleteButtonClicked(userId, buttonElement) {
  console.log('clicked');
    deleteFetch(userId, (error, result) => {
      if (error) {
        console.error(error);
        return error;
      } 
      else {
        let row = buttonElement.closest('tr');
        if(row) row.remove();
        console.lofg("User deleted successfully");
        
      }
      if (result) {
        console.log("User deleted successfully");
        return result;
      }
    });
  }