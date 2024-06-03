/* eslint-disable react/display-name */
import Cookies from "js-cookie";
import { useRouter } from "next/router";
import { useEffect } from "react";

const withAuth = (WrappedComponent) => {
  return (props) => {
    const router = useRouter();

    useEffect(() => {
      if (typeof window !== "undefined") {
        const token = Cookies.get('token');
        if (!token || token === 'null') {
          router.push("/");
        }
      }
    }, [router]);

    // If we are on server, return null
    if (typeof window === "undefined") {
      return null;
    }

    const token = Cookies.get('token');
    if (!token || token === 'null') {
      return null;
    }

    return <WrappedComponent {...props} />;
  };
};

export default withAuth;
