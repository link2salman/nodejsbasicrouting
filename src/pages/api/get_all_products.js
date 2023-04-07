import AxiosRequest from "services/base"

export const getProducts = async () => {
    try {
        const response = AxiosRequest.get("/user")
        return response
    } catch (error) {
        console.log("error", error)
    }

}