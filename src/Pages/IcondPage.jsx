import React, { Fragment, Suspense } from "react";
import { Helmet } from "react-helmet";
import Preloader from "../Components/Common/Preloader";
const IcondComponent = React.lazy(() =>
  import("../Components/RootComponents/IcondComponent")
);
const IcondPage = () => {
  return (
    <Fragment>
      <Suspense fallback={<Preloader />}>
        <Helmet>
          <title>
            Icond || MobileKit Wallet & Banking ReactJS Mobile Template
          </title>
          <meta
            name='UikitPro'
            content='MobileKit Wallet & Banking ReactJS Mobile Template'
          />
        </Helmet>
        <IcondComponent />
      </Suspense>
    </Fragment>
  );
};

export default IcondPage;
