import { APISettings } from './config.js';
import { useToast } from "vue-toastification";

const toast = useToast();
export default {
    get(urlSuffix) {
        let url = APISettings.baseURL + urlSuffix;
        return fetch(url, {
            method: 'GET',
            headers: APISettings.headers,
        })
        .then((response) => {
            if (response.status == 200) {
                return response.json();
            }
            else if (response.status == 500 && (errors = response.json().errors).length > 0) {
                toast.errors(errors);
            }
            else if(response.status == 404) {
                toast.error('Requested content not found.')
            }
            else {
                toast.error('Some error happend.');
            }

            return undefined;
        })
        .catch((err) => toast.error(err));
    },
    post(urlSuffix, data) {
        let url = APISettings.baseURL + urlSuffix;
        return fetch(url, {
            method: 'POST',
            headers: APISettings.headers,
            body: data
        })
        .then((response) => {
            if (response.status == 201) {
                return response.json();
            }
            else if (response.status == 500 && (errors = response.json().errors).length > 0) {
                toast.errors(errors);
            }
            else {
                toast.error('Some error happend.');
            }

            return undefined;
        })
        .catch((err) => toast.error(err));
    },
    put(urlSuffix, data) {
        let url = APISettings.baseURL + urlSuffix;
        return fetch(url, {
            method: 'PUT',
            headers: APISettings.headers,
            body: data
        })
        .then((response) => {
            if (response.status == 201) {
                return response.json();
            }
            else if (response.status == 500 && (errors = response.json().errors).length > 0) {
                toast.errors(errors);
            }
            else {
                toast.error('Some error happend.');
            }

            return undefined;
        })
        .catch((err) => toast.error(err));
    },
    delete(urlSuffix) {
        let url = APISettings.baseURL + urlSuffix;
        return fetch(url, {
            method: 'DELETE',
            headers: APISettings.headers,
        })
        .then((response) => {
            if (response.status == 200) {
                return response.json();
            }
            else if (response.status == 500 && (errors = response.json().errors).length > 0) {
                toast.errors(errors);
            }
            else if(response.status == 404) {
                toast.error('Requested content not found.')
            }
            else {
                toast.error('Some error happend.');
            }

            return undefined;
        })
        .catch((err) => toast.error(err));
    },
}