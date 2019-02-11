import axios from 'axios';
import * as config from "../config";

export const getPictureByPath = (path) => {
    return axios.get(config.API_IMAGE_DOMAIN+"/t/p/w500"+path, {
        responseType: 'arraybuffer'
    });
};