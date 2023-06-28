import axios from "axios";
let Url = process.env.REACT_APP_API_BASE_URL;

const addCategory = (data) => {
  return new Promise((resolve, rejected) => {
    axios
      .post(`${Url}/category`, data)

      .then((success) => {
        resolve(success);
      })
      .catch((error) => {
        rejected(error);
      });
  });
};

const getCategory = (id = undefined) => {
  return new Promise(async (resolve, rejected) => {
    if (id !== undefined) {
      await axios
        .get(`${Url}/category/${id}`)
        .then((success) => {
          resolve(success);
        })
        .catch((error) => {
          rejected(error);
        });
    } else {
      await axios
        .get(`${Url}/category`)
        .then((success) => {
          resolve(success);
        })
        .catch((error) => {
          rejected(error);
        });
    }
  });
};

const DeletData = (id, imageName) => {
  return new Promise((resolve, rejected) => {
    axios
      .delete(`${Url}/category/${id}/${imageName}`)
      .then((success) => {
        resolve(success);
      })
      .catch((error) => {
        rejected(error);
      });
  });
};

const updateCategory = (id, data) => {

  return new Promise((resolve, reject) => {
    axios
      .post(`${Url}/category/update/${id}`, data)
      .then((success) => {
        resolve(success);
      })
      .catch((error) => {
        console.log(error);
        reject(error);
      });
  });
};

export { addCategory, getCategory, DeletData, updateCategory };
