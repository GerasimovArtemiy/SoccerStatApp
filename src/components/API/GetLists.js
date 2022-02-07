import axios from "axios";

export default class GetLists {
    
    static async getList(url) {          
        const response = await axios.get(url, {
        headers: {'X-Auth-Token': process.env.REACT_APP_KEY_API}});
        return response.data;
    };
    
};
    