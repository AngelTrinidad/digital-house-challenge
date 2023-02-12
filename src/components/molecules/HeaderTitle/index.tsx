import React, {FC} from 'react';

import {BasicHeader, BasicHeaderProps, Typography} from '~components/atoms';

interface Props extends BasicHeaderProps {
  title: string;
}

const HeaderTitle: FC<Props> = ({title, ...props}) => {
  return (
    <BasicHeader {...props}>
      <Typography variant="xxl" numberOfLines={2} adjustsFontSizeToFit>
        {title}
      </Typography>
    </BasicHeader>
  );
};

export default HeaderTitle;
