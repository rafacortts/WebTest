import i18nRouter from "next-i18next";
import i18nConfig from "./i18nConfig";

export function middleware(request){
return i18nRouter(request, i18nConfig);
}
