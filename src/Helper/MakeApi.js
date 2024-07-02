import axios from "axios";
export const makeApi = async (req, url, body) => {
    // const userToken = userlocalStorageData().userToken

    var config = {
        method: req,
        url: url,
        data: body,
        headers: {
            // Authorization: `Bearer ${userToken}`,
            'Content-Type': 'multipart/form-data',
            access_control_allow_origin: "*"
        }
    };
    try {
        const response = await axios(config);
        return response.data;
    } catch (error) {
        console.log("error at catch of make api", error);
        throw error;
    }
}