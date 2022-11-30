import axios from "axios";

const instance = axios.create({
	baseURL: "https://us-central1-clone-fd68b.cloudfunctions.net/api",
});

export default instance;

// http://127.0.0.1:5001/clone-fd68b/us-central1/api
