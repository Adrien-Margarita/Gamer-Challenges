import { JSX, useEffect } from "react";
import { useSetAtom } from "jotai";
import { csrfTokenAtom } from "./csrfAtom";
import api from "@/lib/axios";

interface Props {
  children: React.ReactNode;
}

export default function CsrfProvider({ children }: Props) {
  const setCsrf = useSetAtom(csrfTokenAtom);

  useEffect(() => {
    api.get("/csrf-token")
      .then((res) => {
        setCsrf(res.data.csrfToken);
      })
      .catch((err) => {
        console.error("Erreur récupération CSRF Token", err);
      });
  }, []);

  return children as JSX.Element;
}
