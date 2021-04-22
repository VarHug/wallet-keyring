import { observer } from 'mobx-react';
import * as R from 'ramda';

import { useStores } from '../../../stores';

const Path: React.FC = () => {
  const { converterFormStore } = useStores();
  const { derivationPath } = converterFormStore;

  if (R.isEmpty(derivationPath)) {
    return null;
  }

  return <div>当前HDPath为: {derivationPath}</div>;
};

export default observer(Path);
