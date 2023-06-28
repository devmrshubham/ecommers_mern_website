import axios from "axios";
let Url = process.env.REACT_APP_API_BASE_URL;

const AddData = (data) => {
    return new Promise((resolve, rejected) => {
        try {
            axios.post(`${Url}/product`, data)
                .then(
                    (success) => {
                        resolve(success)
                    }
                ).catch(
                    (error) => {
                        rejected(error)
                    }
                )
        } catch (error) {

        }

    })
}

const GetData = (id) => {
    return new Promise(async (resolve, rejected) => {
        try {
            if (id !== undefined) {
                await axios.get(`${Url}/product/${id}`)
                    .then(
                        (success) => {
                            resolve(success)
                        }
                    ).catch(
                        (error) => {
                            rejected(error)
                        }
                    )

            } else {
                await axios.get(`${Url}/product`)
                    .then(
                        (success) => {
                            resolve(success)
                        }
                    ).catch(
                        (error) => {
                            rejected(error)
                        }
                    )
            }
        } catch (error) {

            rejected(error)

        }
    })
}


const GetCategoryProduct = (categoryId) => {
    return new Promise(async (resolve, rejected) => {
        try {
            await axios.get(`${Url}/product/category/${categoryId}`)
                .then(
                    (success) => {
                        resolve(success)
                    }
                ).catch(
                    (error) => {
                        rejected(error)
                    }
                )
        } catch (error) {
            rejected(error)

        }
    })
}


const DeleteData = (id, ImgName) => {
    return new Promise((resolve, rejected) => {
        try {
            axios.delete(`${Url}/product/${id}/${ImgName}`)
                .then(
                    (success) => {
                        resolve(success)
                    }
                ).catch(
                    (error) => {
                        rejected(error)
                    }
                )
        } catch (error) {
            rejected(error)
        }
    })
}


export { AddData, GetData, DeleteData, GetCategoryProduct }