import axios from "axios";

const Axios = axios.create({
  baseURL: "https://api.airtable.com/v0/app0naBCACbPBJ3HT/Projects"
});

const airtableAPIKey = process.env.VUE_APP_AIRTABLEKEY;

Axios.defaults.headers.common = { Authorization: `Bearer ` + airtableAPIKey };

export default {
  getProjects() {
    return Axios.get("?view=Most%20Recent%20Posts");
  },
  getProject(slug) {
    return Axios.get("?filterByFormula={Slug}='" + slug + "'");
  }
};
