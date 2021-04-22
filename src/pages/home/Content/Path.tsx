import { observer } from 'mobx-react';

import { useStores } from '../../../stores';

const Path: React.FC = () => {
  const { converterFormStore } = useStores();
  const { derivationPath } = converterFormStore;

  if (derivationPath === '') {
    return null;
  }

  return <div>当前HDPath为: {derivationPath}</div>;
};

export default observer(Path);
