import { observer } from 'mobx-react';

import { useStores } from '../../../stores';

const Path: React.FC = () => {
  const { hdPathStore } = useStores();
  const { pathString } = hdPathStore;

  if (pathString === '') {
    return null;
  }

  return <div>当前HDPath为: {pathString}</div>;
};

export default observer(Path);
