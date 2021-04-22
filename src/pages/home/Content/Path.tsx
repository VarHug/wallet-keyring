import { observer } from 'mobx-react';

import { useStores } from '../../../stores';

const Path: React.FC = () => {
  const { derivationPathStore } = useStores();
  const { pathString } = derivationPathStore;

  if (pathString === '') {
    return null;
  }

  return <div>当前HDPath为: {pathString}</div>;
};

export default observer(Path);
