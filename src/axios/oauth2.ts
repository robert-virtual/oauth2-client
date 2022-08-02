import axios from "axios";
import { OAUTH2_SERVER } from "../constantes";

export const oauth2 = axios.create({
  baseURL: OAUTH2_SERVER,
  params: {
    redirec_uri: "http://localhost:3000/",
    client_id: "1047629314149-f5sp9o7ol8ta174r41hur8untntt188j.apps.googleusercontent.com",
    response_type: "token",
    include_granted_scopes:true,
    state: "pass-through value",
    scope: "https://www.googleapis.com/auth/spreadsheets",

  }
})
