import cookie from "js-cookie";
const API_HOST = "https://g1api.finlogix.com/v1";

class ApiHelper {
  constructor() {
    this.headers = new Headers();
  }

  async get(url, queryData = {}) {
    try {
      this.headers.append("Content-Type", "application/json; charset=utf-8");
      this.headers.append("Authorization", `Bearer ${cookie.get("token")}`);

      const urlObj = new URL(url);
      urlObj.search = new URLSearchParams(queryData).toString();

      const option = {
        method: "GET  ",
        headers: this.headers,
      };
      const response = await fetch(urlObj.href, option);
      const data = await response.json();

      return { status: response.status, data };
    } catch (error) {
      console.error(error);
    }
  }

  async post(url, bodyData) {
    try {
      this.headers.append("Content-Type", "application/json; charset=utf-8");
      this.headers.append("Authorization", `Bearer ${cookie.get("token")}`);

      const option = {
        method: "POST",
        body: JSON.stringify(bodyData),
        headers: this.headers,
      };
      const response = await fetch(url, option);
      const data = await response.json();

      return { status: response.status, data };
    } catch (error) {
      console.error(error);
    }
  }
}

export default ApiHelper;
