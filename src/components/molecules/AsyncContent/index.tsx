import React, {FC, PropsWithChildren} from 'react';

import Button from '../Button';

import Loader from '~components/atoms/Loader';
import Typography from '~components/atoms/Typography';
import ViewFlex from '~components/atoms/ViewFlex';

interface Props extends PropsWithChildren {
  isLoading?: boolean;
  isError?: boolean;
  showRetry?: boolean;
  onRetry?: () => void;
  loadingTestID?: string;
  errorTestID?: string;
}

const AsyncContent: FC<Props> = ({
  isLoading,
  isError,
  showRetry,
  onRetry,
  children,
  errorTestID,
  loadingTestID,
}) => {
  if (isError) {
    return (
      <ViewFlex center testID={errorTestID}>
        <Typography>Hubo un error en la petición...</Typography>
        {showRetry && <Button title="Reintentar" onPress={onRetry} />}
      </ViewFlex>
    );
  }

  if (isLoading) {
    return (
      <ViewFlex center testID={loadingTestID}>
        <Loader isLoading />
      </ViewFlex>
    );
  }

  return <ViewFlex>{children}</ViewFlex>;
};

export default AsyncContent;
