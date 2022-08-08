import { Switch, SwitchProps } from '@mui/material';
import { ReactElement, useState } from 'react';

function FlagSwitch(props: SwitchProps): ReactElement {
  const { checked } = props;
  const [isChecked, setIsChecked] = useState(checked);

  return <Switch color="secondary" size="medium" checked={isChecked} onChange={(): void => setIsChecked(!isChecked)} />;
}

export default FlagSwitch;
