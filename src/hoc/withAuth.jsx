// @ts-nocheck
import { useSession } from "next-auth/react";
import Router from "next/router";

const withAuth = (WrappedComponent) => {
  const Wrapper = (props) => {
    const { data: session, status } = useSession();
    if (status === "loading") return <p>Loading...</p>; // TW hier dann noch einen spinner oder skeleton einbauen
    if (!session) {
      Router.replace("/auth/login");
      return null;
    }
    return <WrappedComponent {...props} />;
  };
  Wrapper.getInitialProps = async (ctx) => {
    const componentProps =
      WrappedComponent.getInitialProps &&
      (await WrappedComponent.getInitialProps(ctx));
    return { ...componentProps };
  };
  return Wrapper;
};
export default withAuth;
