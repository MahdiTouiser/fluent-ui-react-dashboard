'use client';

import { Spinner, Stack } from '@fluentui/react';
import { SpinnerSize } from '@fluentui/react/lib/Spinner';
import { Text } from '@fluentui/react-components';

const Home = () => {
  return (
    <Stack horizontal tokens={{ childrenGap: 5 }} style={{ overflowX: 'auto', maxWidth: '100%' }}>
      <Stack grow style={{ position: 'relative' }}>
        <Text style={{ fontSize: '2rem', marginLeft: '25px', userSelect: 'none' }}>Home</Text>
        {
          <Stack verticalAlign="center" horizontalAlign="center" style={{ height: '100%', width: '100%' }}>
            <Spinner size={SpinnerSize.large} label="Loading..." />
          </Stack>
        }
      </Stack>
    </Stack>
  );
};

export default Home;
