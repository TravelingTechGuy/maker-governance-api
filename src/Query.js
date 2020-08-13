import React from 'react';
import View from 'react-json-view';
import {useQuery} from '@apollo/react-hooks';
import * as queries from './queries';

export default ({query, variables, theme = 'solarized'}) => {
  const { loading, error, data } = useQuery(queries[query], variables? {variables} : {});
  console.log(data);
  return (
    <div>
    {
      error
      ? 
        <div>{error}</div>
      :
        loading
        ?
          <div>Loading...</div>
        :
          <View src={data} theme={theme}/>
    }
    </div>
  )
}
