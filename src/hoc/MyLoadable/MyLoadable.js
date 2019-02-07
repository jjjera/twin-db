import React from 'react';
import Loadable from 'react-loadable';

const MyLoadable = (options) => {
  return Loadable({
    loader: options.loader,
    render(loaded, props) {
      let Component = loaded.default;
      return <Component {...props} />;
    }
  });
};
export default MyLoadable;
